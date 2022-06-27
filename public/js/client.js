const socket = io();

async function renderProductos(items) {
    const plantillaResponse = await fetch("./ejs/clientMain.ejs");
    const plantilla = await plantillaResponse.text();
    const html = ejs.render(plantilla, { items });
    document.getElementById('root').innerHTML = html;

    const form = document.querySelector(".formulario__form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const title = document.getElementById("form__title")
        const price = document.getElementById("form__price")
        const imgUrl = document.getElementById("form__imgUrl")

        socket.emit("client: producto", { title: title.value, price: price.value, imgUrl: imgUrl.value })
        
        title.value = "";
        price.value = "";
        imgUrl.value = "";
    })
}

function renderProducto(item){
    const table = document.querySelector(".productos__table")
    table.innerHTML+=`<tr>
    <td>${item.title}</td>
    <td><img alt="item img" src="${item.imgUrl}"/></td>
    <td>$${item.price} USD</td>
</tr>`
}

socket.on("server:productos", productos => {
    renderProductos(productos);
})

socket.on("server:producto", producto=>{
    renderProducto(producto);
})