document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // datos inicio sesión
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

   
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

   
    if (usuarioGuardado && usuarioGuardado.email === email && usuarioGuardado.password === password) {
        alert('Inicio de sesión exitoso. Serás redirigido a la página de transacciones.');
        window.location.href = '../html/transactions.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.');
    }
});
