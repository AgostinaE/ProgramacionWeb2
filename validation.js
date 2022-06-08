let nombre = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let error = document.getElementById("error")
let correcto = document.getElementById("msjcorrecto")
error.style.margin = '20px';
error.style.color = '#343840';
correcto.style.margin = '20px';
correcto.style.color = '#343840';
function enviar() {
    let msjError = [];
    if (nombre.value === null || nombre.value === '') {
        msjError.push('Falta tu nombre');
    }
    if (email.value === null || email.value === '') {
         msjError.push('Falta tu direccion de email');
    }
    if (subject.value === null || subject.value === '') {
         msjError.push('Falta tu asunto');
    }
    error.innerHTML = msjError.join(',')
    return false;
}
function correcto(enviar()){
    let msjCorrecto = [];
    if (enviar === false)
        {
            msjCorrecto.push('El usuario de nombre '+ nombre + ' de correo '+ email + ' consulta sobre '+ subject);
        }
        correcto.innerHTML = msjCorrecto.join(',');
}
