let nombre = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let error = document.getElementById("error")
error.style.margin = '20px';
error.style.color = '#343840'
function enviar() {
    let msjError = [];
    if (nombre.value === null || nombre.value === '') {
        msjError.push('falta tu nombre');
    }
    if (email.value === null || email.value === '') {
         msjError.push('falta tu direccion de email');
    }
    if (subject.value === null || subject.value === '') {
         msjError.push('falta tu asunto');
    }
    error.innerHTML = msjError.join(',')
    return false;
}