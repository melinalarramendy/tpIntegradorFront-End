const nombreOrador = document.getElementById("nombre");
const nombreCompra = document.getElementById("nombreCompra");
const apellidoOrador = document.getElementById("apellido");
const apellidoCompra = document.getElementById("apellidoCompra");
const inputCategoria = document.getElementById("inputCategoria");
const emailCompra = document.getElementById("emailCompra");

const cantidadCompra = document.getElementById("cantidadCompra");
const formulario = document.getElementById("formulario");
const mensajeNombreOrador = document.getElementById("mensajeNombreOrador");
const mensajeApellidoOrador = document.getElementById("mensajeApellidoOrador");


const botonBorrar = document.getElementById("botonBorrar")

const totalValorh5 = document.getElementById("totalValor");

const botonOrador = document.getElementById("botonOrador");

const botonResumen = document.getElementById("botonResumen");

const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

var verificaNombre;
var verificaApellido;
var verificaMail;

function validarNombreOrador() {
    if (nombreOrador.value.length < 3) {
        mensajeNombreOrador.innerHTML = "Ingrese un nombre válido.";
        
    } 
} 

function validarApellidoOrador() {
    if (apellidoCompra.value.length < 4) {
        mensajeApellidoOrador.innerHTML = "Ingrese un apellido válido.";

    } 
}

function validarNombreCompra() {
    if (nombreCompra.value.length < 3) {
        nombreCompra.style.border ="1px solid red";
        nombreCompra.placeholder = "Nombre incorrecto!";
        verificaNombre = false;
    } else {
        nombreCompra.style.border ="1px solid green";
        verificaNombre = true;
    }
} 

function validarApellidoCompra() {
    if (apellidoCompra.value.length < 4) {
        apellidoCompra.style.border ="1px solid red";
        apellidoCompra.placeholder = "Apellido incorrecto!";
        verificaApellido = false;
    } else {
        apellidoCompra.style.border ="1px solid green";
        verificaApellido = true;
    }
} 

function validarEmail() {
    if(!expRegular.test(emailCompra.value)) {
        emailCompra.style.border ="1px solid red";
        emailCompra.placeholder = "Correo incorrecto!";
        verificaMail = false;
    } else {
        emailCompra.style.border ="1px solid green";
        verificaMail = true;
    }
}



function totalPagar() {

    let precio = 200;
    if (verificaNombre == true && verificaApellido == true && verificaMail == true) {
        if(inputCategoria.value == 1) {
            totalValorh5.innerHTML = "Total a pagar: $ "+ (precio*cantidadCompra.value)*80/100;
        } else if (inputCategoria.value == 2) {
            totalValorh5.innerHTML = "Total a pagar: $ "+ (precio*cantidadCompra.value)*50/100;
        } else if (inputCategoria.value == 3) {
            totalValorh5.innerHTML = "Total a pagar: $ "+ precio - (precio*cantidadCompra.value)*15/100;
        }
    }
    
}

function borrar() {
    totalValorh5.innerHTML = "Total a pagar: $ ";
    formulario.reset(); 
    nombreCompra.style.border ="1px solid grey";
    nombreCompra.placeholder = "Nombre";
    apellidoCompra.style.border ="1px solid grey";
    apellidoCompra.placeholder = "Apellido";
    emailCompra.style.border ="1px solid grey";
    emailCompra.placeholder = "Correo";

}


botonOrador.addEventListener("click", validarNombreOrador);
botonOrador.addEventListener("click", validarApellidoOrador);

botonResumen.addEventListener("click", totalPagar);
botonResumen.addEventListener("click", validarEmail);
botonResumen.addEventListener("click", validarNombreCompra);
botonResumen.addEventListener("click",validarApellidoCompra);

botonBorrar.addEventListener("click", borrar);