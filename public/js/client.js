const socket = io();

async function renderItems(items) {
    /* plantilla */
    const plantillaResponse = await fetch("./ejs/clientMain.ejs");
    const plantilla = await plantillaResponse.text();
    const html = ejs.render(plantilla, {items: items.productos});
    document.getElementById('root').innerHTML = html;
    /* form */
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

    /* chat */
    const mensajesContainer = document.querySelector(".chat__container__mensajes");
    const chatForm = document.querySelector(".chat__container");
    const chatNombre = document.querySelector(".chat__container__nombre");
    const chatMensaje = document.querySelector(".chat__container__mensaje");

    items.mensajes.forEach(mensaje => {
        mensajesContainer.innerHTML += `<div>${mensaje}</div>`
    })

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        socket.emit("client:mensaje", chatMensaje.value);
        chatMensaje.value = "";
    })

}

function renderProducto(item) {
    const table = document.querySelector(".productos__table")
    table.innerHTML += `<tr>
    <td>${item.title}</td>
    <td><img alt="item img" src="${item.imgUrl}"/></td>
    <td>$${item.price} USD</td>
</tr>`
}

function renderMensaje(mensaje) {
    const mensajesContainer = document.querySelector(".chat__container__mensajes");
    mensajesContainer.innerHTML += `<div>${mensaje}</div>`;
}

socket.on("server:items", items => {
    renderItems(items);
})

socket.on("server:producto", producto => {
    renderProducto(producto);
})

socket.on("server:mensajes", mensajes => {
    renderMensajes(mensajes)
})
socket.on("server:mensaje", mensaje => {
    renderMensaje(mensaje)
})