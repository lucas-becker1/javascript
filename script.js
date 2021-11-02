function Producto(nombreProducto, talle, tela, color) {
    this.nombreProducto = nombreProducto;
    this.talle = talle;
    this.tela = tela;
    this.color = color;
    this.mostrar = () => console.log("Productos Registrados");
    this.retorna = () => `${this.nombreProducto} ${this.talle}`
}


const producto1 = new Producto("remera", "M", "jersey", "blanco")
const producto2 = new Producto("chomba", "L", "pique", "rojo")
const producto3 = new Producto("campera", "XL", "jersey", "azul")
const producto4 = new Producto("buzo", "M", "friza", "negro")
const producto5 = new Producto("pantalon", "L", "friza", "azul")


console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)
console.log(producto5)
producto1.mostrar()
producto2.mostrar()
producto3.mostrar()
producto4.mostrar()
producto5.mostrar()



function Egresado(nombre, apellido, talle) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.talle = talle;
    this.mostrar = () => console.log("¡Hola!");
    this.retorna = () => `${this.nombre} ${this.apellido}`
}


const egresado1 = new Egresado (prompt("Ingrese nombre: "), prompt("Ingrese apellido: "), prompt("Ingrese talle: "))
const egresado2 = new Egresado (prompt("Ingrese nombre: "), prompt("Ingrese apellido: "), prompt("Ingrese talle: "))


console.log(egresado1)
egresado1.mostrar()
console.log(egresado2)
egresado2.mostrar()


class Vaso {
        constructor(tipoVaso, colorVaso) {
            this.tipoVaso = tipoVaso;
            this.colorVaso = colorVaso;
        }

        tipo(modelo) {
            console.log(`El vaso ${this.tipoVaso} que le corresponde es de color: ${this.colorVaso} `)
        }
    }


const vaso1 = new Vaso("de café", "Negro")
const vaso2 = new Vaso("de entrenamiento", "Blanco")


console.log(vaso1)
vaso1.tipo("de café")
console.log(vaso2)
vaso2.tipo("de entrenamiento")




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