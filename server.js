const express = require("express")
const { engine } = require('express-handlebars');
const routesApi = require("./routes/indexApiRoutes").router;
const routesView = require("./routes/indexViewRoutes").router;
const { contenedorProductos } = require("./controllers/apiController")
const { Server: IOServer } = require("socket.io");
const fs = require("fs")

const path = require("path")
const app = express();
const port = 8080;

/* post url encode */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* serve static files */
app.use(express.static(path.join(__dirname, "./public")))


/* handlebars config */
/* app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
})); */

/* views folder*/
/* app.set('views', './views'); */

/* view engine */
/* app.set('view engine', 'ejs'); */


/* routes main */
app.use("/", routesView)
app.use("/api/productos", routesApi)

/* not found */
app.use((req, res) => {
    res.status(404).render("404");
})

// error handler
app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});

/* start server */
const expressServer = app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})

const io = new IOServer(expressServer);

io.on("connection", async socket => {
    console.log("Nuevo usuario conectado")
    socket.emit("server:productos", contenedorProductos.productos)

    socket.on("client: producto", async producto =>{
        contenedorProductos.save(producto)

        io.emit("server:producto", producto)
    })
})

