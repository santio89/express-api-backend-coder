const express = require("express")
const router = express.Router();
const app = express();
const port = 8080;
const routes = require("./routes/index")

app.use(express.json())
app.use (express.urlencoded({extended:true}))

app.use("/", express.static(__dirname+"/html/index.html"))
app.use("/api/productos", routes)

app.listen(port, (err)=>{
    if(!err){
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else{
        console.log(`Hubo un error al iniciar el servidor: `,err)
    }
})