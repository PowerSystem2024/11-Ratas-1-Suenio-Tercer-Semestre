let ataqueJugador
let ataqueEnemigo
let vidaEne
let vidaJug
let segJugando

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);

    document.getElementById("reglas-del-juego").style.display = "none";

    document.getElementById("boton-reglas").addEventListener("click", mostrarReglas)
    document.getElementById("boton-jugar").addEventListener("click", selecionarPersonajeJugador)
    
    const vidaJugador = document.getElementById("vida-jugador");
    const vidaEnemigo = document.getElementById("vida-enemigo");
    vidaEne = 3;
    vidaJug = 3;

    vidaJugador.innerHTML = vidaJug;
    vidaEnemigo.innerHTML = vidaEne;

    let botonPunio = document.getElementById('boton-punio')
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)
}

function mostrarReglas() {
    document.getElementById("reglas-del-juego").style.display = "block";
}

function seleccionarPersonajeJugador() {
    const zuko = document.getElementById("zuko");
    const katara = document.getElementById("katara");
    const aang = document.getElementById("aang");
    const toph = document.getElementById("toph");
    const spanPersonajeJugador = document.getElementById('personaje-jugador');

    document.getElementById("reglas-del-juego").style.display = "none";

    if (zuko.checked) {
        personajeSeleccionado = "Zuko";
    } else if (katara.checked) {
        personajeSeleccionado = "Katara";
    } else if (aang.checked) {
        personajeSeleccionado = "Aang";
    } else if (toph.checked) {
        personajeSeleccionado = "Toph";
    } else {
        alert("Por favor seleccioná un personaje");
        return;
    }

    spanPersonajeJugador.innerHTML = personajeSeleccionado;
    seleccionarPersonajeEnemigo();
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1, 4);
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    if (personajeAleatorio == 1) {
        spanPersonajeEnemigo.innerHTML = "Zuko";
    } else if (personajeAleatorio == 2) {
        spanPersonajeEnemigo.innerHTML = "Katara";
    } else if (personajeAleatorio == 3) {
        spanPersonajeEnemigo.innerHTML = "Aang";
    } else {
        spanPersonajeEnemigo.innerHTML = "Toph";
    }
}

function ataquePunio(){
    ataqueJugador = 'Punio'
    ataqueAleatorioEnemigo()
    pelea();
}

function ataquePatada(){
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
    pelea();
}

function ataqueBarrida(){
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
    pelea();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio (1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }

    combate();

}

function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE");
    }else if(ataqueEnemigo == 'Punio' && ataqueJugador == 'Barrida'){
        vidaEne -= 1;
        crearMensaje("GANASTE");
    }else if(ataqueEnemigo == 'Patada' && ataqueJugador == 'Punio'){
        vidaEne -= 1;
        crearMensaje("GANASTE");
    }else if(ataqueEnemigo == 'Barrida' && ataqueJugador == 'Patada'){
        vidaEne -= 1;
        crearMensaje("GANASTE");
    }else {
        vidaJug -= 1;
        crearMensaje("PERDISTE");
    };
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes');
    let parrafo = document.createElement('p');

    parrafo.innerHTML = 'Tu personaje atacó con ' + ataqueJugador + ', el personaje del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado;
    sectionMensaje.appendChild(parrafo);
}

function pelea() {
    const vidaJugadorSpan = document.getElementById("vida-jugador");
    const vidaEnemigoSpan = document.getElementById("vida-enemigo");

    vidaJugadorSpan.innerHTML = vidaJug;
    vidaEnemigoSpan.innerHTML = vidaEne;

    if (vidaJug == 0) {
        alert("Ganó el enemigo!!");
    } else if (vidaEne == 0) {
        alert("El juego terminó, ganaste!!");
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
    location.reload();
}

window.addEventListener('load', iniciarJuego);