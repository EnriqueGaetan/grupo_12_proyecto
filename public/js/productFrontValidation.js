window.addEventListener("load", function () {
    let formulario = document.querySelector('form.reservation');

    formulario.addEventListener('submit', function (e) {

        let errores = [];

        //Validación Creación y modificación de productos

        let campoNombre = document.querySelector('input.nameP');
        if (campoNombre.value == "") {
            errores.push('El campo nombre debe estar completo');
        } else if (campoNombre.value.length < 5) {
            errores.push('El campo nombre debe tener al menos 5 caracteres');
        }

        let campoDescripcion = document.querySelector('input.descripcionProducto');
        if (campoDescripcion.value.length < 20) {
            errores.push('El campo descripción debe tener al menos 20 caracteres');
        }

        let campoImgProduct = document.querySelector('input.input-file');
        if (campoImgProduct.value == "") {
            errores.push(' Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).');
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
