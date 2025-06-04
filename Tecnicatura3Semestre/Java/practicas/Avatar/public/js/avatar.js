function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
}

function seleccionarPersonajeEnemigo() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"];
    const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    const spanPersonajeEnemigo = document.getElementById("personaje-enemigo");
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
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

window.addEventListener('load', iniciarJuego);