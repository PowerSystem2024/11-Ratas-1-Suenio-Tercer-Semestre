function torresDeHanoi(n, origen, destino, auxiliar, movimientos) {
  if (n === 1) {
    movimientos.push(`Mover disco 1 de ${origen} a ${destino}`);
    return;
  }

  torresDeHanoi(n - 1, origen, auxiliar, destino, movimientos);
  movimientos.push(`Mover disco ${n} de ${origen} a ${destino}`);
  torresDeHanoi(n - 1, auxiliar, destino, origen, movimientos);
}

const discos = 3;
const movimientos = [];

torresDeHanoi(discos, 'A', 'C', 'B', movimientos);

console.log(`\nSolución para ${discos} discos:\n`);
movimientos.forEach((m, i) => console.log(`${i + 1}. ${m}`));
