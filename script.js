function Producto(nombreProducto, precio, color, estampado) {
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.color = color;
    this.estampado = estampado;
    this.mostrar = () => console.log("Stock disponible");
}

const producto1 = new Producto("camiseta", 500, "azul", "si")
const producto2 = new Producto("short", 350, "azul", "si")
const producto3 = new Producto("medias", 250, "blanco", "no")
const producto4 = new Producto("pantalon", 700, "celeste", "no")
const producto5 = new Producto("campera", 850, "celeste", "si")

const lista = [producto1.precio, producto2.precio, producto3.precio, producto4.precio, producto5.precio]
console.log("La lista sin ordenar es: " + lista)

lista.sort()
console.log("La lista de precios ordenada de menor a mayor es: " + lista)