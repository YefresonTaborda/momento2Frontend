export class Cliente {
    constructor(nombre, apellido, direccion, nroIdentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.nroIdentificacion = nroIdentificacion;
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    consultarSaldo() {
        return this.cuentas.map(cuenta => ({
            tipo: cuenta.constructor.name,
            saldo: cuenta.consultarSaldo()
        }));
    }
}
