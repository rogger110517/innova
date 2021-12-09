const btnEnviar = document.querySelector('.register_input_button')
const form = document.querySelector('.register_content')
const email = document.querySelector('#email')
const tel= document.querySelector('#tel')
const empresa = document.querySelector('#empresa')
const select = document.querySelector('#select')
const checked = document.querySelector('#checked')
const formularioEnviar = document.querySelector('#enviar-form');

const nombre = document.querySelector('#name')
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


eventListener();

function eventListener() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);
    //campos de formulario
    email.addEventListener('blur', validarFormulario);
    tel.addEventListener('blur', validarFormulario);
    empresa.addEventListener('blur', validarFormulario);
    nombre.addEventListener('blur', validarFormulario);
    select.addEventListener('blur', validarFormulario);
    checked.addEventListener('blur', validarFormulario);

    formularioEnviar.addEventListener('submit', enviarEmail);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('restingir');
}

function validarFormulario(e) {
    
    if(e.target.type === 'checkbox') {
        if(e.target.checked == true) {
            alert("Gracias por la confianza")
        } else {
            alert("Por favor acepte las condiciones")
        }
    }
    if(e.target.value.length > 0) {
        const  errorP = document.querySelector('p.send-error');
        if(errorP) {
            errorP.remove();
        }
        e.target.classList.remove('placeholder-active')
    } else {
        e.target.classList.add('placeholder-active')

        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
            const  errorP = document.querySelector('p.send-error');
            if(errorP) {
                errorP.remove();
            }
            e.target.classList.remove('placeholder-active')
        } else {
            e.target.classList.add('placeholder-active')
            mostrarError('El email no es valido');
        }
    }
    if(er.test(email.value) !== '' && tel.value !== '' && empresa.value !== '' && nombre.value !== '' && checked.checked == true && select.value !== "0"){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('restingir')
    }
}
function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('send-error');
    const errores = document.querySelectorAll('.send-error');

    if(errores.length === 0) {
        form.appendChild(mensajeError); 
    }
}
function enviarEmail(e) {
    e.preventDefault();
    window.location.href ='/innova/proyecto-agradecimiento.html';
}