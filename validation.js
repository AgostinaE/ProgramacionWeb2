let nombre = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let error = document.getElementById("error")
error.style.margin = '20px';
error.style.color = '#343840'
function enviar() {
    let msjError = [];
    if (nombre.value === null || nombre.value === '') {
        msjError.push('Falta tu nombre');
    }else{
        msjError.push('Su nombre es '+ nombre);
    }
    if (email.value === null || email.value === '') {
         msjError.push('Falta tu direccion de email');
    }else{
        msjError.push('Su email es '+ email);
    }
    if (subject.value === null || subject.value === '') {
         msjError.push('Falta tu asunto');
    }else{
        msjError.push('Su mensaje es '+ subject);
    }
    error.innerHTML = msjError.join(',')
    return false;
}
