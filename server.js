const express = require("express")
const app = express();
const port = 8080;
const routes = require("./routes/index");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", express.static(__dirname + "/public"))
app.use("/api/productos", routes)

app.use((req, res) => {
    res.status(404).send("No pudimos encontrar la dirección")
})

app.use((err, req, res) => {
    console.error(err)
    res.status(500).send("Ocurrió un error")
})

// error handler
app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});


app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})