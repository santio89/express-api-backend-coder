const express = require("express")
const router = express.Router();
const items = require("./indexApi.routes").contenedorProductos.productos;

router.get("/", (req, res)=>{
    res.render("form")
})

router.get("/productos", (req, res)=>{
    res.render("productos", {items})
})

module.exports = {router};