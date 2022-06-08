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
    let msjCorrecto = [];
    if (nombre.value === null || nombre.value === '') {
        msjError.push('Falta tu nombre');
    }
    if (email.value === null || email.value === '') {
         msjError.push('Falta tu direccion de email');
    }
    if (subject.value === null || subject.value === '') {
         msjError.push('Falta tu asunto');
    }
    if (msjError.value === null
        {
            msjCorrecto.push('El usuario de nombre '+ nombre + ' de correo '+ email + ' consulta sobre '+ subject);
        })
    error.innerHTML = msjError.join(',')
    correcto.innerHTML = msjCorrecto.join(',')
    return false;
}
