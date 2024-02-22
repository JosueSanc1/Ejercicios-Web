document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí puedes agregar la lógica de autenticación. Por ejemplo:
        if (username === 'usuario' && password === 'contraseña') {
            // Autenticación exitosa, redirigir a otra página o mostrar un mensaje de bienvenida.
            errorMessage.textContent= 'Bienvenido a la pagina de Alex.';
        } else {
            // Mostrar mensaje de error.
            errorMessage.textContent = 'Credenciales incorrectas. Inténtalo de nuevo.';
        }
    });
});
