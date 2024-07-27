let cs = 0, seg = 0, min = 0, hr = 0, vuelta=0, id


//obtener todos los botones
const btnIniciar = document.getElementById("btnIniciar")
const btnParar = document.getElementById("btnParar")
const btnContinuar = document.getElementById("btnContinuar")
const btnVuelta = document.getElementById("btnVuelta")
const btnReset = document.getElementById("btnReset")
const tablaVueltas = document.querySelector("#tablaVueltas tbody");



btnIniciar.addEventListener("click", iniciarCronometro)
btnParar.addEventListener("click", pararCronometro)
btnContinuar.addEventListener("click", continuarCronometro)
btnVuelta.addEventListener("click", vueltaCronometro)
btnReset.addEventListener("click", reiniciarCronometro)



window.onload = function() {
    console.log("La página ha cargado completamente.");
    btnIniciar.disabled = false;
    btnParar.disabled = true;
    btnContinuar.disabled= true;
    btnVuelta.disabled = true;
    btnReset.disabled = true;
};

function iniciarCronometro(){
    id=setInterval(cronometrar, 10);
    btnIniciar.disabled = true
    btnParar.disabled = false;
    btnVuelta.disabled = false;
    btnReset.disabled = false;
}
function pararCronometro(){
    clearInterval(id)
    btnParar.disabled = true;
    btnContinuar.disabled= false;
    btnVuelta.disabled = true;
}
function continuarCronometro () {
    id=setInterval(cronometrar, 10);
    btnContinuar.disabled = true;
    btnParar.disabled = false;
    btnVuelta.disabled = false;
}
function reiniciarCronometro(){
    clearInterval(id)
    cs = 0;
    seg = 0;
    min = 0;
    hr = 0;
    actualizaTiempo();
    vueltaCount = 0;

    while (tablaVueltas.firstChild) {
        tablaVueltas.removeChild(tablaVueltas.firstChild);
    }

    btnIniciar.disabled = false;
    btnParar.disabled = true;
    btnContinuar.disabled= true;
    btnVuelta.disabled = true;
    btnReset.disabled = true;
}
function vueltaCronometro(){
    vuelta++;
    const nuevaFila = tablaVueltas.insertRow(0); 
    const celdaVuelta = nuevaFila.insertCell(0);
    const celdaTiempo = nuevaFila.insertCell(1);
    celdaVuelta.innerHTML = vuelta;
    celdaTiempo.innerHTML = `${(hr < 10 ? "0" : "") + hr}:${(min < 10 ? "0" : "") + min}:${(seg < 10 ? "0" : "") + seg}:${(cs < 10 ? "0" : "") + cs}`;
}

function cronometrar(){
    cs++;
    if (cs>99){seg++;cs=0;}
    if (seg > 59){min++;seg =0;}
    if(min>59){hr++;min=0;}

    actualizaTiempo()
    
}


function actualizaTiempo(){
    Centesimas.innerHTML = (cs<10?"0":"")+ cs;
    Segundos.innerHTML = (seg<10?"0":"")+ seg;
    Minutos.innerHTML = (min<10?"0":"")+ min;
    Horas.innerHTML = (hr<10?"0":"")+ hr;

}