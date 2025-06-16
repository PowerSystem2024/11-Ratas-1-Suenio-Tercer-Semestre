const N = 8;
const tablero = Array.from({ length: N }, () => Array(N).fill(-1));

const movX = [2, 1, -1, -2, -2, -1, 1, 2];
const movY = [1, 2, 2, 1, -1, -2, -2, -1];

function esValido(x, y) {
  return (x >= 0 && x < N && y >= 0 && y < N && tablero[x][y] === -1);
}

function resolverKT(x, y, movei) {
  if (movei === N * N) return true;

  for (let k = 0; k < 8; k++) {
    const nextX = x + movX[k];
    const nextY = y + movY[k];

    if (esValido(nextX, nextY)) {
      tablero[nextX][nextY] = movei;

      if (resolverKT(nextX, nextY, movei + 1)) return true;

      tablero[nextX][nextY] = -1;
    }
  }

  return false;
}

function imprimirTablero() {
  return tablero.map(fila => fila.map(n => n.toString().padStart(2, '0')).join(" ")).join("\n");
}

function iniciarTourCaballo() {
  tablero[0][0] = 0;
  const exito = resolverKT(0, 0, 1);

  if (exito) {
    console.log("✔ Solución encontrada:");
    console.log(imprimirTablero());
  } else {
    console.log("✘ No se encontró solución.");
  }
}
iniciarTourCaballo();
