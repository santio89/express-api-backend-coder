/* contenedor principal de productos */
const Contenedor = require("../Contenedor");
const contenedorProductos = new Contenedor("./productos.txt");

/* cargar algunos productos iniciales */
contenedorProductos.save({title: "Trainspotting", price: 20, thumbnail: "https://www.ocimagazine.es/wp-content/uploads/2021/06/trainspotting-cartel.jpg"})
contenedorProductos.save({title: "2001: A Space Odyssey", price: 15, thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/2001_A_Space_Odyssey_%281968%29.png/220px-2001_A_Space_Odyssey_%281968%29.png"})
contenedorProductos.save({title: "Friday de 13th I", price: 12, thumbnail: "https://play-lh.googleusercontent.com/NGKnPK332fE8qh0N4wIyNqhCa9VHOx3a6lMrkB6Dd2CH50rnQjU-gshAN9c1N1kjUpA=w240-h480-rw"})


const getAllProducts = (req, res)=>{
    res.json(contenedorProductos.getAll());
}

const getProductById = (req, res)=>{
    res.json(contenedorProductos.getById(Number(req.params.id)));
}

const postProduct = (req, res)=>{
    res.json(contenedorProductos.save(req.body))
}

const putProduct = (req, res)=>{
    res.json(contenedorProductos.saveById(Number(req.params.id), req.body));
}

const deleteProductById = (req, res)=>{
    res.json(contenedorProductos.deleteById(Number(req.params.id)));
}

module.exports = {contenedorProductos, getAllProducts, getProductById, postProduct, putProduct, deleteProductById}