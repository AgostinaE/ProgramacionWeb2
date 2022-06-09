let nombre = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let error = document.getElementById("error")
error.style.margin = '20px';
error.style.color = '#343840'
let correctEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
function enviar() {
    let msjError = [];
    let contador=0;
    if (nombre.value === null || nombre.value === '') {
        msjError.push('Falta tu nombre ');
    } else{
        contador++;
    }
    if(email.value === null || email.value === ''|| !correctEmail.test(email.value)) {
         msjError.push('falta tu direccion de email o está escrito de manera erronea');
    }else{
        contador++;
    }
    if (subject.value === null || subject.value === '') {
         msjError.push('falta tu asunto');
    }else{
        contador++;
    }
    if(contador === 3){
        msjError.push('El usuario de nombre '+ nombre.value);
        msjError.push(' de correo '+ email.value);
        msjError.push(' envió un mensaje correctamente '+ subject.value);
    }
    error.innerHTML = msjError.join(',')
    return false;
}