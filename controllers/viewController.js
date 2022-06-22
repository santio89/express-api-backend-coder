const items = require("../routes/indexApi.routes").contenedorProductos.productos;

const formView = (req, res)=>{
    res.render("form")
}

const productsView = (req, res)=>{
    res.render("productos", {items})
}

module.exports={formView, productsView}