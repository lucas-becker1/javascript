let nombre = prompt ("Hola, ingresa tu nombre");
let edad = parseInt(prompt ("Ingresa tu edad"))

if (edad > 18){
    alert("Bienvenido " + nombre + " puedes continuar en la pagina")
} else {
    alert("Lo sentimos " + nombre + " no posees la edad necesaria para ingresar a la pagina")
}