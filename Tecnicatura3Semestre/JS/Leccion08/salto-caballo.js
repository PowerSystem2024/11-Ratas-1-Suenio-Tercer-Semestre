const canvas = document.getElementById("tablero");
const ctx = canvas.getContext("2d");
const N = 8;
const size = canvas.width / N;

const caballoImg = new Image();
caballoImg.src = "caballo.png";

const movimientos = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

let recorrido = Array(N * N).fill(null);

function dibujarTablero() {
  for (let fila = 0; fila < N; fila++) {
    for (let col = 0; col < N; col++) {
      ctx.fillStyle = (fila + col) % 2 === 0 ? "#fff" : "#999";
      ctx.fillRect(col * size, fila * size, size, size);
    }
  }
}

function dibujarCaballo(fila, col, paso) {
  dibujarTablero();
  for (let i = 0; i <= paso; i++) {
    const [r, c] = recorrido[i];
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(i + 1, c * size + size / 3, r * size + size / 1.5);
  }
  const [r, c] = recorrido[paso];
  ctx.drawImage(caballoImg, c * size, r * size, size, size);
}

function esValido(x, y, tablero) {
  return x >= 0 && y >= 0 && x < N && y < N && tablero[y][x] === -1;
}

function contarMovimientosDisponibles(x, y, tablero) {
  let count = 0;
  for (let [dx, dy] of movimientos) {
    const nx = x + dx;
    const ny = y + dy;
    if (esValido(nx, ny, tablero)) {
      count++;
    }
  }
  return count;
}

async function resolver(x, y, paso, tablero) {
  tablero[y][x] = paso;
  recorrido[paso] = [y, x];
  dibujarCaballo(y, x, paso);
  await esperar(400);

  if (paso === N * N - 1) return true;

  let opciones = [];
  for (let [dx, dy] of movimientos) {
    const nx = x + dx;
    const ny = y + dy;
    if (esValido(nx, ny, tablero)) {
      const grado = contarMovimientosDisponibles(nx, ny, tablero);
      opciones.push({ x: nx, y: ny, grado });
    }
  }

  opciones.sort((a, b) => a.grado - b.grado);

  for (let op of opciones) {
    if (await resolver(op.x, op.y, paso + 1, tablero)) return true;
  }

  tablero[y][x] = -1;
  recorrido[paso] = null;
  return false;
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function iniciar() {
  const tablero = Array.from({ length: N }, () => Array(N).fill(-1));
  recorrido = Array(N * N).fill(null);
  dibujarTablero();

  caballoImg.onload = async () => {
    const exito = await resolver(0, 0, 0, tablero);
    if (!exito) {
      alert("No se encontró solución");
    }
  };

  if (caballoImg.complete) {
    caballoImg.onload();
  }
}
