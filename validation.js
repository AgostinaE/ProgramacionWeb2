var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var asunto = document.getElementById("asunto");
var errorMensaje = document.getElementsByClassName("error");
var correctoIco = document.getElementsByClassName("success-icon");
var incorrectoIco = document.getElementsByClassName("failure-icon");
var bolsita = [];
var regularMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var resultado = document.getElementById("resultado");

//Funciones
formulario.onsubmit = () => onSubmit()

function onSubmit() {

    datos = {
        nombre: nombre.value,
        correo: correo.value,
        asunto: asunto.value,
    }
    if (validar()) {
        bolsita.push(datos)
        console.log(bolsita)
        verDatos()
        formulario.reset()
    }
    return false;
}

function validar() {
    let cont = 0;
    
    if ((datos.nombre != "") && (datos.nombre.length < 21)) {
        console.log(datos.nombre.length)
        correcto(nombre, 0);
        cont++;
    } else {
        error(nombre, 0);
        nombre.focus();
    }
    if (datos.asunto != "") {
        if ((datos.asunto != "") && (datos.asunto.length < 201)) {
            console.log(datos.asunto.length)
            correcto(nombre, 0);
            cont++;
        } else {
            error(nombre, 0);
            nombre.focus();
        }
    } else {
        error(asunto, 1);
        asunto.focus();
    }
    if (regularMail.test(datos.correo)) {
        correcto(correo, 2);
        cont++;
    } else {
        error(correo, 2);
        correo.focus();
    }
    //contador de Validacion
    if (cont == 3) {
        return true;
    } else {
        return false;
    }
}

function correcto(elemento, posicion) {
    elemento.classList.remove("bordeRojo")
    incorrectoIco[posicion].classList.remove("mostrarIco");
    elemento.classList.add("bordeVerde");
    correctoIco[posicion].classList.add("mostrarIco")
    errorMensaje[posicion].innerHTML = "";

}

function error(elemento, posicion) {
    elemento.classList.add("bordeRojo");
    incorrectoIco[posicion].classList.add("mostrarIco");
    correctoIco[posicion].classList.remove("mostrarIco")
    if (posicion == 0) {
        errorMensaje[posicion].innerHTML = "Error. Debe ingresar un nombre menor a 20 caracteres";
    } else if (posicion == 2) {
        errorMensaje[posicion].innerHTML = "Error. Falta el Asunto";
    } else {
        errorMensaje[posicion].innerHTML = "Error. Debe ingresar una correo válido"
    }
}
function verDatos() {
    //limpia el appendChild
    resultado.innerHTML = ""
    let dat;
    bolsita.forEach(aux => {
        dat = document.createElement("div")
        dat.className = "resultado1"
        dat.innerHTML = "<p>" + aux.nombre+" de " +aux.correo +" envió el siguiente mensaje : " + aux.asunto + "</p>"
        resultado.appendChild(dat)
    })
}
