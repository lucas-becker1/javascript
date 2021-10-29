// Primera funcion

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
Promocion (nota)