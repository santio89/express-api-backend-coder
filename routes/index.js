const Contenedor = require("../Contenedor")
const express = require("express")
const router = express.Router();
const contenedorProductos = new Contenedor("./productos.txt");


router.get("/", (req, res)=>{
    res.json(contenedorProductos.getAll());
})

router.get("/:id", (req, res)=>{
    res.json(contenedorProductos.getById(req.params.id));
})

router.post("/", (req, res)=>{
    res.json(contenedorProductos.save(req.body));
})

router.put("/:id", (req, res)=>{
    res.json(contenedorProductos.saveById(req.params.id, req.body));
})

router.delete("/:id", (req, res)=>{
    contenedorProductos.deleteById(req.params.id)
})

module.exports = router;