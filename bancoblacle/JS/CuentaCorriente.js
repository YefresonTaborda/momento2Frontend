import { Cuenta } from './Cuenta.js';

export class CuentaCorriente extends Cuenta {
    constructor(numeroCuenta, saldo = 0) {
        super(numeroCuenta, saldo);
        this.sobregiroMaximo = 500000;
    }

    realizarRetiro(monto) {
        if (monto > 0 && monto <= this.saldo + this.sobregiroMaximo) {
            this.saldo -= monto;
        }
    }
}
