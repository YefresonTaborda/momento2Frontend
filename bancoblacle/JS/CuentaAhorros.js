import { Cuenta } from './Cuenta.js';

export class CuentaAhorros extends Cuenta {
    constructor(numeroCuenta, saldo = 0) {
        super(numeroCuenta, saldo);
        this.movimientos = [];
    }

    realizarDeposito(monto) {
        super.realizarDeposito(monto);
        this.movimientos.push(`Depósito de $${monto}`);
    }

    realizarRetiro(monto) {
        if (monto <= this.saldo) {
            super.realizarRetiro(monto);
            this.movimientos.push(`Retiro de $${monto}`);
        }
    }

    consultarMovimientos() {
        return this.movimientos;
    }
}
