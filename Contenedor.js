class Contenedor {
    constructor() {
        this.productos = [];
    }

    static idCount = 1;

    save(objeto) {
        objeto.id = Contenedor.idCount;
        this.productos.push(objeto)
        Contenedor.idCount++;

        return objeto;
    }

    saveById(id, objeto) {
        const index = this.productos.findIndex(producto => producto.id === id)
        if (index != -1) {
            objeto.id = id;
            this.productos[index] = objeto;
            return objeto;
        } else {
            return `No se encontró el producto con ID ${id}`
        }
    }

    getById(id) {
        const objeto = this.productos.find(producto => producto.id === id);
        console.log(objeto)
        return (objeto ? objeto : `No se encontró el producto con ID ${id}`);
    }

    getAll() {
        return (this.productos);
    }

    deleteById(id) {
        const nuevoArray = this.productos.filter(producto => producto.id !== id);
        this.productos = nuevoArray;
        return `Producto con ID ${id} eliminado.`
    }
}

module.exports = Contenedor;