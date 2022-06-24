const express = require("express")
const router = express.Router();
const {formView, productsView, upload, formSent} = require("../controllers/viewController");

/* ruteo */
router.get("/", formView)
router.get("/productos", productsView)
router.post("/productos", upload.single("imgFile"), formSent)


module.exports = {router};