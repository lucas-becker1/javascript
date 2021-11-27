class Camiseta {
    constructor(id, equipo, temporada, talle) {
        this.id = id;
        this.equipo = equipo;
        this.temporada = temporada;
        this.talle = talle;
    }
    
devolverDatos() {
        return `
            <div class="card" style="width: 18rem"; id="${this.id}">
                <div class="card-body">
                    <h5 class="card-title">Camiseta N°${this.id}</h5>
                    <p class="card-text">Equipo: ${this.equipo}</p>
                    <p class="card-text">Temporada: ${this.tempoada}</p>
                    <p class="card-text">Talle: ${this.talle}</p>
                    <a href="#" class="btn btn-danger" id="boton${this.id}">Eliminar</a>
                </div>
            </div>
        `
    }
}

function crearId() {
    const cabecera = Date.now().toString(36)
    const cuerpo = Math.random().toString(36).substring(2)
    return cabecera + cuerpo
}

let camisetas = []

$(() => {
    $('#boton1').click(() => {
        camisetas.forEach(camiseta => {
            $('#camisetas').append(camiseta.devolverDatos());
        })
        camisetas.forEach(camiseta => {
            $(`#boton${camiseta.id}`).click(() => {
                $(`#camisetas #${camiseta.id}`).remove()
                let indice = camisetas.findIndex(camisetaBuscar => camisetaBuscar.id == camiseta.id)
                camisetas.splice(indice,1)
            })
        })
    })

    $('#formCamiseta').submit((e) => {
        e.preventDefault()
        let datosCamiseta = new FormData(e.target)
        let camiseta = new Camiseta(crearId(), datosCamiseta.get("equipo"), datosCamiseta.get("temporada"), datosCamiseta.get("talle"))
        camisetas.push(camiseta)
        console.log(camiseta)
        $('#formCamiseta').trigger('reset')
    })
})