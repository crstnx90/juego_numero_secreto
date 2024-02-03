let intentos = 1;
let numerosRifados =[];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p', `Acertaste el número secreto: ${numeroSecreto} en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroSecreto>numeroDeUsuario) {
            asignarTextoElemento('p','El número secreto es mayor');
        } else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(numerosRifados);

    if (numerosRifados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosRifados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto.");
    asignarTextoElemento('p', "Indica un número del 1 al 10.");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales(); 


