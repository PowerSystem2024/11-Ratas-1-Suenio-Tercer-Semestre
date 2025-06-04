const hanoi = (n, origen, destino, auxiliar) => {
  //Caso base: si hay un solo disco, simplemente se mueve de origen a destino.  
  if (n === 1) {
    console.log(`Mover disco 1 de ${origen} a ${destino}`);
    return;
  }
  //La clave es entender que para mover n discos de origen a destino, primero hay que mover n-1 discos a auxiliar, luego mover el disco n a destino, y finalmente mover los n-1 discos de auxiliar a destino.
  //Para eso se usa la recursividad.
  hanoi(n - 1, origen, auxiliar, destino);
  console.log(`Mover disco ${n} de ${origen} a ${destino}`);
  hanoi(n - 1, auxiliar, destino, origen);
}

const numDiscos = 3; 
hanoi(numDiscos, 'A', 'C', 'B');