// Creo una clase EGRESADO para guardar los datos ingresados por el usuario.
class Egresado{
    constructor(id, nombreCompleto, edad, talle, color) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.talle = talle;
        this.color = color;
    }
}

// Inicializo mi variable en 1
let id = 1;

// Creo un array vacio
let Egre = []

// Aca obtengo los elementos mediante el ID , luego cuando tocan el boton de enviar me muestra por consola los 
// datos ingresados por el usuario.
let formEgresado = document.getElementById("formEgresado")
formEgresado.addEventListener("submit", (egresadoss) => {
    egresadoss.preventDefault()
    
    let formDatos = new FormData(egresadoss.target)
    console.log(egresadoss.target)
    console.log(formDatos.get("nombre"))
    console.log(formDatos.get("edad"))
    console.log(formDatos.get("talle"))
    console.log(formDatos.get("color"))
    let Egresado_Datos = new Egresado(id, formDatos.get("nombre"), formDatos.get("edad"), formDatos.get("talle"), formDatos.get("color"))
    id++
    console.log(Egresado_Datos)
    // Agrego con un push cada dato al array
    Egre.push(Egre)
})


document.getElementById("input1").addEventListener("change", () => {
    let parrafo1 = document.getElementById("parrafo1")
    parrafo1.innerText = "¡Usuario disponible!"
}) 

// Creo una función donde registro cada uno de mis productos 
function Producto (nombreProducto, talle, tela, color) {
    this.nombreProducto = nombreProducto;
    this.talle = talle;
    this.tela = tela;
    this.color = color;
    this.mostrar = () => console.log("Stock ¡OK!");
    this.retorna = () => `${this.nombreProducto} ${this.talle}`
}

// Creo 5 const donde utilizo la función producto para poder registrar mis 5 productos 
const producto1 = new Producto("campera", 4, "jersey", "blue")
const producto2 = new Producto("chomba", 7, "pique", "white")
const producto3 = new Producto("remera", 4, "jersey", "orange")
const producto4 = new Producto("buzo", 5, "friza", "red")
const producto5 = new Producto("pantalon", 6, "friza", "black")

// Muestro que los productos fueron registrados correctamente
producto1.mostrar()
producto2.mostrar()
producto3.mostrar()
producto4.mostrar()
producto5.mostrar()


// Creo Arrays para ofrecer 5 combos de mis productos

const combo1 = ["Campera " ,  " Chomba "];
const combo2 = ["Campera" , " Buzo"];
const combo3 = ["Buzo", " Remera"];
const combo4 = ["Chomba", " Pantalon", "Buzo"];
const combo5 = ["Campera" , "Remera" , "Pantalon"];

// Utilizo la propiedad LENGHT para saber cuantos productos tiene cada combo

console.log( "El combo1 contiene: " + combo1.length + " productos y son: " + combo1 ); 
console.log( "El combo2 contiene: " + combo2.length + " productos  y son: " + combo2 ); 
console.log( "El combo3 contiene: " + combo3.length + " productos  y son: " + combo3 ); 
console.log( "El combo4 contiene: " + combo4.length + " productos  y son: " + combo4 ); 
console.log( "El combo5 contiene: " + combo5.length + " productos  y son: " + combo5 ); 



let datos = []
let botonAgregarLista = document.getElementById("botonAgregar")
let div = document.getElementById("div1")
botonAgregarLista.addEventListener("click", () => {
    let input = document.getElementById("input")
    div.innerHTML += `<p> ${input.value} </p>`
    datos.push(input.value)
    input.value = ""
    console.log(datos)
})
botonAgregarLista.onclick = () => {
    console.log("¡Registro OK!")
}