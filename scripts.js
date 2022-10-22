const nombreOrador = document.getElementById("nombre");

const apellidoOrador = document.getElementById("apellido");

const inputCategoria = document.getElementById("inputCategoria");

const cantidadCompra = document.getElementById("cantidadCompra");

const mensajeNombre = document.getElementById("mensajeNombre");

const botonBorrar = document.getElementById("botonBorrar")

const totalValorh5 = document.getElementById("totalValor");

const botonOrador = document.getElementById("botonOrador");

const botonResumen = document.getElementById("botonResumen");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


function validarNombre() {
    if (nombreOrador.value.length < 3) {
        mensajeNombre.innerHTML = "Ingrese un nombre válido.";
        
    } else {
        mensajeNombre.innerHTML = "Nombre correcto!";
    }
} 

function validarEmail() {
    if(!expRegular.test(email.value)) {
        mensajeEmail.innerHTML = "El email no es válido."
    } else {
        mensajeEmail.innerHTML = "Email correcto!"
    }
}

function totalPagar() {
    let precio = 200;
    if(inputCategoria.value == 1) {
        totalValorh5.innerHTML = "Total a pagar: $ "+ (precio*cantidadCompra.value)*80/100;
    } else if (inputCategoria.value == 2) {
        totalValorh5.innerHTML = "Total a pagar: $ "+ (precio*cantidadCompra.value)*50/100;
    } else if (inputCategoria.value == 3) {
        totalValorh5.innerHTML = "Total a pagar: $ "+ precio - (precio*cantidadCompra.value)*15/100;
    }
}

function borrarValor() {
    totalValorh5.innerHTML = "Total a pagar: $ ";
}


botonOrador.addEventListener("click", validarNombre);

botonResumen.addEventListener("click", totalPagar);
botonBorrar.addEventListener("click", borrarValor);