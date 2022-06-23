const express = require("express")
const { engine } = require('express-handlebars');
const path = require("path")
const app = express();
const port = 8080;
const routesApi = require("./routes/indexApiRoutes").router;
const routesView = require("./routes/indexViewRoutes").router;

/* handlebars config */
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials')
}));

/* views folder*/
app.set('views', './views');

/* view engine: alternar entre hbs/pug/ejs */
app.set('view engine', 'ejs');

/* post url encode */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* serve static files */
app.use(express.static(path.join(__dirname, "./public")))

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
app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})