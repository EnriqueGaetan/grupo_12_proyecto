window.addEventListener("load", function () {
    let formulario = document.querySelector('form.reservation');

    formulario.addEventListener('submit', function (e) {

        let errores = [];

        //Validación Login

        let campoEmail = document.querySelector('input.email');
        if (campoEmail.value == "") {
            errores.push('El campo email debe estar completo');
            // VALIDAR EMAIL
            //} else if (campoNombre.value.length < 3) {
            //   errores.push('El email debe ser valido');
        }

        let campoPassword = document.querySelector('input.contraseña');
        if (campoPassword.value == "") {
            errores.push('El campo de la contraseña debe estar completo');
        }

        //Validación Register

        let campoNombre = document.querySelector('input.nombre');
        if (campoNombre.value == "") {
            errores.push('El campo nombre debe estar completo');
        } else if (campoNombre.value.length < 2) {
            errores.push('El campo nombre debe tener al menos 2 caracteres');
        }

        let campoApellido = document.querySelector('input.apellido');
        if (campoApellido.value == "") {
            errores.push('El campo apellido debe estar completo');
        } else if (campoApellido.value.length < 2) {
            errores.push('El campo apellido debe tener al menos 2 caracteres');
        }

        let campoContraseña = document.querySelector('input.tel');
        if (campoContraseña.value == "") {
            errores.push('El campo contraseña debe estar completo');
        } else if (campoApellido.value.length < 8) {
            errores.push('El campo contraseña debe tener al menos 8 caracteres');
        }

        let campoEmailReg = document.querySelector('input.emailReg');
        if (campoEmailReg.value == "") {
            errores.push('El campo email debe estar completo');
            //VALIDAR EMAIL
            // } else if (campoApellido.value.length < 8) {
            //errores.push('El campo email debe tener al menos 8 caracteres');
        }

        let campoImage = document.querySelector('input.image');
        if (campoImage.value == "") {
            errores.push('El campo de imagen debe estar completo');
        } else if (campoApellido.value.length < 8) {
            errores.push('El campo de imagen debe tener al menos 8 caracteres');
        }



        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    })


})
