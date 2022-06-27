const express = require("express")
const router = express.Router();
const {formView, productsView, upload, formSent} = require("../controllers/viewController");

/* ruteo */
/* server side rendering desactivado de momento, ya que el desafio de websockets pide renderizar desde el cliente 
router.get("/", formView)
router.get("/productos", productsView) */
router.post("/productos", upload.single("imgFile"), formSent)


module.exports = {router};