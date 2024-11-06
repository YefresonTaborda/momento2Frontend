
import { Cliente } from './Cliente.js';
import { CuentaCorriente } from './CuentaCorriente.js';
import { CuentaAhorros } from './CuentaAhorros.js';

const clienteActual = new Cliente("Juan", "Pérez", "Calle 123", "12345678");
const cuentaCorriente = new CuentaCorriente("1001");
const cuentaAhorros = new CuentaAhorros("2001");
clienteActual.agregarCuenta(cuentaCorriente);
clienteActual.agregarCuenta(cuentaAhorros);


const saldoDisplay = document.getElementById("saldoDisplay");
const depositoInput = document.getElementById("depositoInput");
const retirarInput = document.getElementById("retirarInput");
const depositoBtn = document.getElementById("depositoBtn");
const retirarBtn = document.getElementById("retirarBtn");
const movimientosDisplay = document.getElementById("movimientosDisplay");

// Funciones
function actualizarSaldo() {
    saldoDisplay.innerText = clienteActual.consultarSaldo()
        .map(cuenta => `${cuenta.tipo}: $${cuenta.saldo}`)
        .join("\n");
}

function realizarDeposito() {
    const monto = parseFloat(depositoInput.value);
    if (monto && monto > 0) {
        cuentaAhorros.realizarDeposito(monto);
        actualizarSaldo();
        mostrarMovimientos();
    }
    depositoInput.value = '';
}

function realizarRetiro() {
    const monto = parseFloat(retirarInput.value);
    if (monto && monto > 0) {
        cuentaCorriente.realizarRetiro(monto);
        actualizarSaldo();
    }
    retirarInput.value = '';
}

function mostrarMovimientos() {
    movimientosDisplay.innerHTML = cuentaAhorros.consultarMovimientos().join("<br>");
}

// Eventos
depositoBtn.addEventListener("click", realizarDeposito);
retirarBtn.addEventListener("click", realizarRetiro);


actualizarSaldo();
