
const canvas = document.getElementById("tablero");
const btn = document.getElementById("btn");
const div = document.getElementById("contenedorIndices");
const ctx = canvas.getContext("2d"); 
const N = 8; 
const tamanioCelda = canvas.width / N; 

function dibujarTablero() {
  for (let fila = 0; fila < N; fila++) {
    for (let col = 0; col < N; col++) {
      ctx.fillStyle = (fila + col) % 2 === 0 ? "#fff" : "#999";
      ctx.fillRect(col * tamanioCelda, fila * tamanioCelda, tamanioCelda, tamanioCelda);
    }
  }
}

dibujarTablero();

function dibujarReina(fila, col) {
  const reinaImg = new Image();           
  reinaImg.src = "reina.png";             

  reinaImg.onload = () => {              
    ctx.drawImage(                        
      reinaImg,                           
      col * tamanioCelda,                  
      fila * tamanioCelda,                 
      tamanioCelda,                        
      tamanioCelda                         
    );
  };
}


//Arreglo para guardar los índices de cada reina
const indices = new Array(N).fill(-1); 

//Esta función revisa cada si es seguro colocar una reina verificando la misma columna y diagonales
function esPosicionSegura(fila, col, indices) {
  for (let i = 0; i < fila; i++) {
    const otraCol = indices[i];

    // Misma columna
    if (col === otraCol) return false;

    // Misma diagonal
    if (Math.abs(col - otraCol) === Math.abs(fila - i)) return false;
  }

  return true; 
}

//C
function colocarReinas(fila = 0) {
  if (fila === N) return true;

  for (let col = 0; col < N; col++) {
    if (esPosicionSegura(fila, col, indices)) {
      indices[fila] = col;
      if (colocarReinas(fila + 1)) return true;

      indices[fila] = -1;
    }
  }

  return false; 
}
colocarReinas();  

function dibujarSolucion() {
  for (let fila = 0; fila < N; fila++) {
    const col = indices[fila];
    dibujarReina(fila, col);
  }
  div.innerHTML = indices.join(',  ')
}





