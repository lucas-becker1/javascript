alert("¡Bienvenidos a Camisetea2")
// Creo dos const para que el cliente pueda ingresar sus datos
let cantidadJ = parseInt(prompt("Ingrese cuantos clientes desea registrar: "))
for(let i=0; i < cantidadJ; i++){
    let nombre = prompt("Ingrese nombre: ")
    let apellido = prompt("Ingrese apellido: ")
    console.log("Cliente: ")
    console.log("-" + nombre + " " + apellido)
    }

    alert("¡Registro exitoso!")


alert("Tenemos 5 combos para vos")

// Creo una funcion donde registro cada uno de mis productos
function Producto(nombreProducto, talle, color) {
    this.nombreProducto = nombreProducto;
    this.talle = talle;
    this.color = color;
    this.mostrar = () => console.log("Stock disponible");
    this.retorna = () => `${this.nombreProducto} ${this.talle}`
}

// Creo 5 const donde utilizo la funcion producto para poder registrar mis 5 productos
const producto1 = new Producto("camiseta", "L", "azul")
const producto2 = new Producto("short", "M", "azul")
const producto3 = new Producto("medias", "L", "blanco")
const producto4 = new Producto("pantalon", "L", "celeste")
const producto5 = new Producto("campera", "XL", "celeste")

// Muestro que los productos fueron registrados correctamente
producto1.mostrar()
producto2.mostrar()
producto3.mostrar()
producto4.mostrar()
producto5.mostrar()

// Creo arrays para ofrecer 5 combos de mis productos
const combo1 = ["Camiseta + " + "Short "];
const combo2 = ["Short + " + "Medias "];
const combo3 = ["Campera + " + "Pantalon "];
const combo4 = ["Camiseta + " + "Short + " + "Medias "];
const combo5 = ["Campera + " + "Pantalon + " + "Medias "];

// Utilizo la propiedad lenght para saber cuantos productos tiene cada combo
console.log( "El combo1 contiene: " + combo1.lenght + " productos y son: " + combo1);
console.log( "El combo2 contiene: " + combo2.lenght + " productos y son: " + combo2);
console.log( "El combo3 contiene: " + combo3.lenght + " productos y son: " + combo3);
console.log( "El combo4 contiene: " + combo4.lenght + " productos y son: " + combo4);
console.log( "El combo5 contiene: " + combo5.lenght + " productos y son: " + combo5);

// Utilizo el push para agregar un elemento a mi combo
combo1.push(" Campera");
console.log("El combo1 queda: "+ combo1);

//Funcion para saber lo que contiene cada combo, el usuario ingresa que combo desea y muestro con un alert lo que este contiene
let opera = prompt("Ingrese: ( combo1, combo2, combo3, combo 4, combo5 ) ")

function combo_ingresado(combo1,combo2,combo3,combo4,combo5,opera) {

    switch(opera) {
        case "combo1":
            alert("El Combo1 contiene: "+ (combo1))
            break
        case "combo2":
            alert("El Combo2 contiene: "+ (combo2))
            break
        case "combo3":
            alert("El Combo3 contiene: "+ (combo3))
            break
        case "combo4":
            alert("El Combo4 contiene: "+ (combo4))
            break
        case "combo5":
            alert("El Combo5 contiene: "+ (combo5))
            break
    }
}

// Llamo a la funcion combo_ingresado para que se ejecute
combo_ingresado(combo1,combo2,combo3,combo4,combo5,opera)

// Creo una clase bandera para crear banderas
class bandera {
    constructor(numeroBandera, tamaño, color) {
        this.numeroBandera = numeroBandera;
        this.tamaño = tamaño;
        this.color = color;
    }

    mostrarCaracteristicas () {
        console.log(`Bandera n°:${this.numeroBandera} cm:${this.tamaño} color:${this.color}`)
    }
}

// Creo 2 const para poner la in
const bandera1 = new bandera (20, 200, "Azul")
const bandera2 = new bandera (14, 250, "Roja")

// Muestro por consola que banderas les corresponden de regalo
console.log("Las banderas de regalo que le corresponde son: ")
bandera1.mostrarCaracteristicas()
bandera2.mostrarCaracteristicas()

alert("Su compra y regalos fueron procesados, gracias por elegirnos!")










/* Desafio 4 - Primer funcion

function listaAlumnos (nombre,legajo){
    let nom = nombre
    let leg = legajo
    return ("Nombre: " + nom + "Legajo: " + leg)
}

// Segunda funcion

function Aprobados (nota){
    if (nota < 0) {
        alert ("Parcial desaprobado")
    }
    if (nota >= 1 && nota <= 3) {
        alert ("Parcial desaprobado")
    }
    if (nota >= 4 && nota <= 10){
        alert ("Parcial aprobado")
    } else{
        alert("Error")
    }
}

// Tercera funcion

function Promocion (nota) {
    if (nota < 0) {
        alert ("No tiene posibilidad de promocionar la materia")
}
    if (nota > 1 && nota <= 3) {
        alert ("No tiene posibilidad de promocionar la materia")
}
    if (nota >= 4 && nota <= 6){
        alert ("No tiene posibilidad de promocionar la materia")
}
    if (nota >= 7 && nota <= 10){
        alert ("Tiene posibilidad de promocionar la materia")
    } else {
        alert ("Error")
    }
}

// El profesor necesita saber si el alumno promociona o no la materia
// El requisito es que la nota debe ser >= 7 y <= 10

let nombre = prompt("Ingrese su nombre: ")
let leg = parseInt(prompt("Ingrese su n° de legajo: "))
console.log(listaAlumnos (nombre,leg))
let nota = prompt("Ingrese su nota de parcial: ")
Aprobados (nota)
Promocion (nota)*/