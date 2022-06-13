const Contenedor = require("../Contenedor")
const express = require("express")
const router = express.Router();
const contenedorProductos = new Contenedor("./productos.txt");

contenedorProductos.save({title: "a", price: 1, thumbnail: "a(url)"})
contenedorProductos.save({title: "b", price: 2, thumbnail: "b(url)"})
contenedorProductos.save({title: "c", price: 3, thumbnail: "c(url)"})

router.get("/", (req, res)=>{
    res.json(contenedorProductos.getAll());
})

router.get("/:id", (req, res)=>{
    res.json(contenedorProductos.getById(Number(req.params.id)));
})

router.post("/", (req, res)=>{
    res.json(contenedorProductos.save(req.body))
})

router.put("/:id", (req, res)=>{
    res.json(contenedorProductos.saveById(Number(req.params.id), req.body));
})

router.delete("/:id", (req, res)=>{
    res.json(contenedorProductos.deleteById(Number(req.params.id)));
})

module.exports = router;