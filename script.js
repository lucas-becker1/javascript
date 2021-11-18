class Cliente{
    constructor(id, nombre, apellido, talle, color) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.talle = talle;
        this.color = color;
    }
}


let id = 1;


let Client = []


let formClientes = document.getElementById("formClientes")
formClientes.addEventListener("submit", (clientess) => {
    clientess.preventDefault()
    
    let formDatos = new FormData(clientess.target)
    console.log(clientess.target)
    console.log(formDatos.get("nombre"))
    console.log(formDatos.get("apellido"))
    console.log(formDatos.get("talle"))
    console.log(formDatos.get("color"))
    let Clientes_Datos = new Cliente(id, formDatos.get("nombre"), formDatos.get("apellido"), formDatos.get("talle"), formDatos.get("color"))
    id++
    console.log(Clientes_Datos)

    Client.push(Client)
})


document.getElementById("input1").addEventListener("change", () => {
    let parrafo1 = document.getElementById("parrafo1")
    parrafo1.innerText = "¡Usuario disponible!"
}) 


function Producto (nombre, talle, precio, color) {
    this.nombre = nombre;
    this.talle = parseInt(talle);
    this.precio = parseFloat(precio);
    this.color = color;
    this.mostrar = () => console.log("Stock disponible");
}

 
const producto1 = new Producto("camiseta", 3, 300, "rojo")
const producto2 = new Producto("short", 2, 250, "negro")
const producto3 = new Producto("medias", 1, 100, "blanco")
const producto4 = new Producto("pantalon", 3, 400, "azul")
const producto5 = new Producto("campera", 4, 450, "azul")


producto1.mostrar()
producto2.mostrar()
producto3.mostrar()
producto4.mostrar()
producto5.mostrar()


const combo1 = ["Camiseta" ,  " Short"];
const combo2 = ["Campera" , " Pantalon"];
const combo3 = ["Campera", " Camiseta"];
const combo4 = ["Camiseta", " Short", " Medias"];
const combo5 = ["Campera" , " Pantalon" , " Camiseta"];


console.log( "El combo1 contiene: " + combo1.length + " productos y son: " + combo1 ); 
console.log( "El combo2 contiene: " + combo2.length + " productos y son: " + combo2 ); 
console.log( "El combo3 contiene: " + combo3.length + " productos y son: " + combo3 ); 
console.log( "El combo4 contiene: " + combo4.length + " productos y son: " + combo4 ); 
console.log( "El combo5 contiene: " + combo5.length + " productos y son: " + combo5 ); 


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
    console.log("¡Registrado")
}