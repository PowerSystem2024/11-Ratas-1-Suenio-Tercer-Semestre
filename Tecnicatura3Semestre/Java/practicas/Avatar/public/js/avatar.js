function seleccionarPersonajeJugador() {
    const zuko = document.getElementById("zuko");
    const katara = document.getElementById("katara");
    const aang = document.getElementById("aang");
    const toph = document.getElementById("toph");

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

    alert("SELECCIONASTE A: '" + personajeSeleccionado + "'");
}

let botonPersonajeJugador = document.getElementById("boton-personaje");
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);