class Alumno {
    constructor(nombre, apellido, materia) {
        this.nombre = nombre
        this.apellido = apellido
        this.materia = materia
    }
}

let arrayAlumnos = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let apellidoI = formulario.children[1].value;
let materiaI = formulario.children[1].value;

let contenedor = document.querySelector("#alumnoIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;


miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener('click', MostrarTodosAlumnos);


inputNombre.focus();


function validarForm() {

    nombreI = formulario.children[1].value;
    apellidoI = formulario.children[1].value;
    materiaI = formulario.children[1].value;
    console.log(nombreI);
    console.log(apellidoI);
    console.log(materiaI);

    if (nombreI == '' || apellidoI == '' || materiaI == '') {
        alert('ERROR - Complete todos los campos para continuar');
        inputNombre.focus();
        bandera = false;
    }   else {
        bandera = true;
    }
}


function agregarAlumnos (e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("¿Seguro que desea agregar al alumno?");
        if (opcion == true) {
            let formulario = e.target
            arrayAlumnos.push(new Alumno(nombreI, apellidoI, materiaI));
        } else {
            alert('No se agregará al alumno');
        }
    formulario.children[1].value = '';
    formulario.children[1].value = '';
    formulario.children[1].value = '';
    contenedor.innerHTML = '';
    AgregarAlDom();
    inputNombre.focus();
    } else {
    inputNombre.focus();
    }
}


function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo alumno ingresado:</h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Apellido: </strong> ${apellidoI} </p>
    <p><strong> Materia: </strong> ${materiaI}</p>
    </hr>`;
}


function MostrarTodosAlumnos (e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Listado de todos los alumnos:</h3>';
    for (const alumno of arrayAlumnos) {

        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Apellido: </strong> ${apellidoI} </p>
    <p><strong> Materia: </strong> ${materiaI}</p>
    </hr>`;
    }
}