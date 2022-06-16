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
            return this.productos[index];
        } else {
            return {error: `No se encontró el producto con ID ${id}`}
        }
    }

    getById(id) {
        const objeto = this.productos.find(producto => producto.id === id);
        return (objeto ? objeto : {error: `No se encontró el producto con ID ${id}`});
    }

    getAll() {
        return (this.productos);
    }

    deleteById(id) {
        const index = this.productos.findIndex(producto => producto.id === id)
        if (index != -1) {
            this.productos.splice(index, 1);
            return {success: `Producto con ID ${id} eliminado`}
        } else {
            return {error: `No se encontró el producto con ID ${id}`}
        }
    }
}

module.exports = Contenedor;