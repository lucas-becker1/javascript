class Cliente {
    constructor(nombre, apellido, email, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.sueldo = sueldo
    }

    realizarPago(gasto) {
        this.sueldo -= gasto
    }

}

class Tarjeta {
    constructor(numero, fechaVencimiento, tipo) {
        this.numero = numero;
        this.fechaVencimiento = fechaVencimiento;
        this.tipo = tipo;
    }
}