alert("¡Bienvenido/a a Camisetea2!")
// Aqui se registra el cliente
let nombre = prompt("Ingrese nombre: ")
let apellido = prompt("Ingrese apellido: ")
console.log("Cliente: " + nombre + " " + apellido)

alert("¡Registro exitoso!")

// Creo una funcion para los productos
function Producto(nombre, talle, precio) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = parseFloat(precio);
    this.disponible = true;
}

// Creo un array para que el cliente elija sus productos
var arrayProductos = [];
do {
    var comprobacion = prompt("Ingrese el nombre del producto que desea o FIN para terminar de agregar");
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin"){
        break;
    }else{
        nombreP = comprobacion;
        var talleP = prompt("Ingrese el talle del producto");
        var precioP = prompt("Ingrese el precio del producto");
        arrayProductos.push(new Producto(nombreP, talleP, precioP));
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin" )

console.log(arrayProductos);


for (var producto of arrayProductos) {
    console.log(producto.nombre);
    console.log(producto.talle);
    console.log(producto.precio);
}

// Aqui se ordenan los productos segun su precio (en caso de ser mas de uno)
var ordenadosPrecio = [];
ordenadosPrecio = arrayProductos.map (elemento => elemento);
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log("Ordenados por precios ascendentes:");
console.log(ordenadosPrecio);

// Creo una clase para crear banderas
class Bandera {
    constructor(numeroBandera, tamaño, color) {
        this.numeroBandera = numeroBandera;
        this.tamaño = tamaño;
        this.color = color;
    }

    mostrarCaracteristicas () {
        console.log(`Bandera N°:${this.numeroBandera} CM:${this.tamaño} Color:${this.color}`)
    }
}

// Creo 2 const para poner la in
const bandera1 = new Bandera (1, 200, "a eleccion")
const bandera2 = new Bandera (2, 250, "a eleccion")

// Muestro por consola que banderas le corresponden de regalo al cliente
console.log("Las banderas que le corresponde de regalo son: ")
bandera1.mostrarCaracteristicas()
bandera2.mostrarCaracteristicas()

alert("Su compra y regalos fueron procesados, gracias por elegirnos!")