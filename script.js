
 document.addEventListener('DOMContentLoaded', function() {
            
            var emailRegex = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            var passwordRegex = /^.{6,}$/;  // Al menos 6 caracteres

            
            function validarInicioSesion() {
                
                var correoElectronico = document.getElementById('correoElectronico').value;
                var contrasena = document.getElementById('contrasena').value;

                
                if (!emailRegex.test(correoElectronico)) {
                    alert('Email no válido');
                } else if (!passwordRegex.test(contrasena)) {
                    alert('Contraseña no válida (al menos 6 caracteres)');
                } else {
                    alert('Inicio de sesión exitoso');
                    
                }
            }

            
            document.getElementById('btnIniciarSesion').addEventListener('click', validarInicioSesion);
        });
