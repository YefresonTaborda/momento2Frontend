// Saldo inicial
let currentBalance = 0;

// Mostrar u ocultar el campo de cuenta de destino si es una transferencia
document.getElementById('transactionType').addEventListener('change', function() {
    const targetAccountGroup = document.getElementById('targetAccountGroup');
    targetAccountGroup.style.display = (this.value === 'transferencia') ? 'block' : 'none';
});

// Lógica para manejar la transacción
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountType = document.getElementById('accountType').value;
    const transactionType = document.getElementById('transactionType').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const targetAccount = document.getElementById('targetAccount').value;

    if (isNaN(amount) || amount <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    let transactionResult = "";

    if (transactionType === 'deposito') {
        currentBalance += amount;
        transactionResult = `Depósito de $${amount.toFixed(2)} en cuenta ${accountType}`;
    } else if (transactionType === 'retiro') {
        if (amount <= currentBalance) {
            currentBalance -= amount;
            transactionResult = `Retiro de $${amount.toFixed(2)} de cuenta ${accountType}`;
        } else {
            alert("Saldo insuficiente para realizar el retiro.");
            return;
        }
    } else if (transactionType === 'transferencia') {
        if (amount <= currentBalance) {
            currentBalance -= amount;
            transactionResult = `Transferencia de $${amount.toFixed(2)} a cuenta ${targetAccount}`;
        } else {
            alert("Saldo insuficiente para realizar la transferencia.");
            return;
        }
    }

    // Actualizar el saldo y el historial
    updateBalanceAndHistory(transactionResult);
});

// Actualiza el saldo y el historial de transacciones
function updateBalanceAndHistory(transactionDetail) {
    // Actualizar saldo en la vista
    document.getElementById('currentBalance').textContent = `$${currentBalance.toFixed(2)}`;

    // Actualizar historial de transacciones
    const transactionHistory = document.getElementById('transactionHistory');
    const transactionItem = document.createElement('li');
    transactionItem.className = 'list-group-item';
    transactionItem.textContent = transactionDetail;
    transactionHistory.insertBefore(transactionItem, transactionHistory.firstChild);

    // Quitar el mensaje de "No hay transacciones realizadas" si es necesario
    if (transactionHistory.children.length === 1) {
        transactionHistory.children[0].remove();
    }
}
