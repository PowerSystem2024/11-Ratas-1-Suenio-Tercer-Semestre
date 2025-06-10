let ataqueJugador
let ataqueEnemigo
let vidaEne
let vidaJug
let segJugando

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

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

function seleccionarPersonajeJugador() {
    const zuko = document.getElementById("zuko");
    const katara = document.getElementById("katara");
    const aang = document.getElementById("aang");
    const toph = document.getElementById("toph");
    const spanPersonajeJugador = document.getElementById('personaje-jugador');

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
    //alert("SELECCIONASTE A: '" + personajeSeleccionado + "'");
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
    alert("El enemigo es: " + spanPersonajeEnemigo.innerHTML);
}

function ataquePunio(){
    ataqueJugador = 'Punio'
    alert("Atacaste con " + ataqueJugador)
    ataqueAleatorioEnemigo()
    pelea();
}

function ataquePatada(){
    ataqueJugador = 'Patada'
    alert("Atacaste con " + ataqueJugador)
    ataqueAleatorioEnemigo()
    pelea();
}

function ataqueBarrida(){
    ataqueJugador = 'Barrida'
    alert("Atacaste con " + ataqueJugador)
    ataqueAleatorioEnemigo()
    pelea();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio (1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
        alert("El enemigo atacó con " + ataqueEnemigo)
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
        alert("El enemigo atacó con " + ataqueEnemigo)
    } else {
        ataqueEnemigo = 'Barrida'
        alert("El enemigo atacó con " + ataqueEnemigo)
    }
}

function pelea() {
    const vidaJugadorSpan = document.getElementById("vida-jugador");
    const vidaEnemigoSpan = document.getElementById("vida-enemigo");

    if(ataqueJugador == ataqueEnemigo){
        alert("Empataron!!");
    } else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida'){
        alert("Le hiciste daño al enemigo, pierde una vida!!");
        vidaEne -= 1;
    } else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Punio'){
        alert("El enemigo te hizo daño, pierdes una vida!!");
        vidaJug -= 1;
    } else if(ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        alert("Le hiciste daño al enemigo, pierde una vida!!");
        vidaEne -= 1;
    } else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Patada'){
        alert("El enemigo te hizo daño, pierdes una vida!!");
        vidaJug -= 1;
    } else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada'){
        alert("Le hiciste daño al enemigo, pierde una vida!!");
        vidaEne -= 1;
    } else {
        alert("El enemigo te hizo daño, pierdes una vida!!");
        vidaJug -= 1;
    }

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

window.addEventListener('load', iniciarJuego);