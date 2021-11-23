let clientes = []

let formCliente = document.getElementById("formCliente")
let botonClientes = document.getElementById("botonMostrarClientes")
let divClientes = document.getElementById("divClientes")

formCliente.addEventListener("submit", (e) => {
    e.preventDefault()
    let datosFormulario = new FormData(e.target)
    let cliente = new Cliente(datosFormulario.get("nombre"), datosFormulario.get("apellido"), datosFormulario.get("email"), datosFormulario.get("edad"), datosFormulario.get("talle"))
    clientes.push(cliente)
    localStorage.setItem('clientes',JSON.stringify(clientes))
    formCliente.reset()
})

botonClientes.addEventListener("click", () => {
    let clientesParseados = JSON.parse(localStorage.getItem('clientes'))
    clientesParseados.forEach((cliente, indice) => {
        divClientes.innerHTML += `
        <div class="card" style="width: 18rem;" id="cliente${indice + 1}">
            <div class="card-body">
                <h5 class="card-title">Cliente ${indice + 1}</h5>
                <p>Nombre: ${cliente.nombre}</p>
                <p>Apellido: ${cliente.apellido}</p>
                <p>Edad: ${cliente.edad}</p>
                <p>Email: ${cliente.email}</p>
                <p>Talle: ${cliente.talle}</p>
                <button type="button" class="btn btn-danger" id="boton${indice + 1}">Eliminar</button>
            </div>
        </div>
    `
})

    clientesParseados.forEach((cliente, indice) => {
        document.getElementById(`boton${indice + 1}`).addEventListener("click", () => {
            divClientes.removeChild(document.getElementById(`cliente${indice + 1}`))
            clientesParseados.splice(indice,1)
            console.log(clientesParseados)
            console.log(`Cliente ${cliente.nombre} eliminado` )
            localStorage.setItem('clientes', JSON.stringify(clientesParseados))
        })
    })
    
})


document.getElementById("input1").addEventListener("change", () => {
    let parrafo1 = document.getElementById("parrafo1")
    parrafo1.innerText = "¡Usuario disponible!"
}) 