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
            this.productos[index] = objeto;
            return objeto;
        } else {
            return `No se encontró el objeto de ID ${objeto.id}`
        }
    }

    getById(id) {
        const objeto = this.productos.find(objeto => objeto.id === id);
        return (objeto ? objeto : `No se encontro el objeto con id ${id}`);
    }

    getAll() {
        return (this.productos);
    }

    deleteById(id) {
        const nuevoArray = this.productos.filter(objeto => objeto.id !== id);
        this.productos = nuevoArray;
        return `Producto de ID ${id} eliminado.`
    }
}

module.exports = Contenedor;