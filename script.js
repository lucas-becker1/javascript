alert("¡Bienvenidos a Camisetea2!")

let nombre = prompt("Ingrese nombre: ")
let apellido = prompt("Ingrese apellido: ")
console.log("Cliente: " + nombre + " " + apellido)

alert("¡Registro exitoso!")


class Producto {
    constructor(nombre, talle, precio) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = parseFloat(precio);
    this.disponible = true;
    }

precioFinal() {
    return this.precio * 1.75;
    }
}

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
    console.log(producto.precioFinal());
}

var ordenadosPrecio = [];
ordenadosPrecio = arrayProductos.map (elemento => elemento);
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log("Ordenados por precios ascendentes:");
console.log(ordenadosPrecio);


class Bandera {
    constructor(numeroBandera, tamaño, color) {
        this.numeroBandera = numeroBandera;
        this.tamaño = tamaño;
        this.color = color;
    }

    mostrarCaracteristicas () {
        console.log(`Bandera n°:${this.numeroBandera} cm:${this.tamaño} color:${this.color}`)
    }
}

const bandera1 = new Bandera (20, 200, "Azul")
const bandera2 = new Bandera (14, 250, "Roja")

console.log("Las banderas de regalo que le corresponde son: ")
bandera1.mostrarCaracteristicas()
bandera2.mostrarCaracteristicas()

alert("Su compra y regalos fueron procesados, gracias por elegirnos!")