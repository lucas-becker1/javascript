let darkMode;

if(localStorage.getItem('dark-mode')) {
    darkMode = localStorage.getItem('dark-mode')
} else {
    darkMode = "light"
}

localStorage.setItem('dark-mode', darkMode)

$(() => {
    if(localStorage.getItem('dark-mode') == "dark") {
        $('body').addClass("dark")
        $('#boton-dark-mode').hide()
        $('#boton-light-mode').show()
    } else {
        $('#boton-light-mode').hide()
    }

    $('#boton-light-mode').click(() => {
        $('#boton-light-mode').hide()
        $('#boton-dark-mode').show()
        $('body').removeClass("dark")

        localStorage.setItem('dark-mode', "light")
    })


    $('#boton-dark-mode').click(() => {
        $('#boton-light-mode').show()
        $('#boton-dark-mode').hide()
        $('body').addClass("dark")
        localStorage.setItem('dark-mode', "dark")
    })

    $('#boton1').click(function() {
        $('#box').animate({
            height: "200px",
            width: "200px",
            backgroundColor: '#082AD9'
        }, {
            duration: 1000,
            easing: "linear",
            complete: () => {
                console.log(this)
            }
        });
    })

    $('#p1').animate({
        "font-size": "40px",
        "padding": "30px",
        "color": "#1C34B0",
        "width": "140px"},
        "fast",
        function() {
            console.log("Animacion terminada")
        }
    ).fadeOut(5000).delay(1000).fadeIn(5000)
    
    $('#p2').fadeOut('slow', () => {
        $('#p2').fadeIn(1000)
    })
})

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