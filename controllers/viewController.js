const contenedor = require("./apiController").contenedorProductos;
const items = contenedor.productos;

const formView = (req, res)=>{
    res.render("form")
}

const productsView = (req, res)=>{
    res.render("productos", {items})
}

const formSent = (req, res)=>{
    contenedor.save(req.body)
    res.redirect("/")
}

module.exports={formView, productsView, formSent}