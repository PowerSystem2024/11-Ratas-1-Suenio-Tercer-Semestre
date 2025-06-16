function esSeguro(tablero, fila, col) {
    for (let i = 0; i < fila; i++) {
        if (
            tablero[i] === col ||
            tablero[i] - i === col - fila ||
            tablero[i] + i === col + fila
        ) {
            return false;
        }
    }
    return true;
}

function resolverNReinas(tablero, fila, N) {
    if (fila === N) return true;

    for (let col = 0; col < N; col++) {
        if (esSeguro(tablero, fila, col)) {
            tablero[fila] = col;
            if (resolverNReinas(tablero, fila + 1, N)) return true;
        }
    }

    return false;
}

function mostrarTablero(tablero) {
    const N = tablero.length;
    console.log("Tablero con las reinas ubicadas:\n");
    for (let fila = 0; fila < N; fila++) {
        let linea = "";
        for (let col = 0; col < N; col++) {
            linea += (tablero[fila] === col ? " Q " : " . ");
        }
        console.log(linea);
    }
    console.log("\nArreglo de índices de cada reina:\n", tablero);
}

const N = 8; // valor de reynas
const tablero = new Array(N).fill(-1);

if (resolverNReinas(tablero, 0, N)) {
    mostrarTablero(tablero);
} else {
    console.log("No hay solución para N =", N);
}
