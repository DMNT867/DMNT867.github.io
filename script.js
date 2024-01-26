function validarInicioSesion() {
    console.log('Función validarInicioSesion llamada');  // Agrega esta línea
    var correoElectronico = document.getElementById('correoElectronico').value;
    var contrasena = document.getElementById('contrasena').value;

    if (!emailRegex.test(correoElectronico)) {
        alert('Email no válido');
    } else if (!passwordRegex.test(contrasena)) {
        alert('Contraseña no válida (al menos 6 caracteres)');
    } else {
        alert('Inicio de sesión exitoso');
        // Puedes agregar aquí código adicional, como enviar el formulario.
    }
}
