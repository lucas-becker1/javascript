function suma(numero1, numero2) {
    return (numero1 / numero2)
}

let numero1 = parseFloat(prompt("Ingrese el precio del producto"))
let numero2 = parseFloat(prompt("Ingrese la cantidad de cuotas que desea: 3, 6, 9 o 12"))

alert("El precio final de cada cuota es de $" + suma(numero1, numero2))

/*const IVA = 1.21;

function sumarIVA (producto) {
    return producto * IVA
}

let producto = parseFloat(prompt("Ingrese el precio del producto"))

alert("El precio final es de $" + sumarIVA(producto))*/