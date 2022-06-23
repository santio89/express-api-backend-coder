const express = require("express")
const router = express.Router();
const {formView, productsView, formSent} = require("../controllers/viewController");

/* ruteo */
router.get("/", formView)
router.get("/productos", productsView)
router.post("/productos", formSent)


module.exports = {router};