const contenedor = require("./apiController").contenedorProductos;
const items = contenedor.productos;
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb){
        file.date = Date.now();
        cb(null, file.date + "-" + file.originalname )
    }
})
const upload = multer({storage: storage})


const formView = (req, res)=>{
    res.render("form")
}

const productsView = (req, res)=>{
    res.render("productos", {items})
}


const formSent = (req, res)=>{
    const img = req.body.formImage
    
    if (img == "file" && req.file){
        req.body.thumbnail = `/uploads/${req.file.date}-${req.file.originalname}`
    } 
    contenedor.save(req.body)
    res.redirect("/")
}

module.exports={formView, productsView, formSent, upload}