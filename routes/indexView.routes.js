const express = require("express")
const router = express.Router();
const {formView, productsView} = require("../controllers/viewController");

router.get("/", formView)

router.get("/productos", productsView)

module.exports = {router};