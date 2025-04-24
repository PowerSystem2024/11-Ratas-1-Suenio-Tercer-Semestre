"use strict"; 
// El modo estricto es una directiva que propone una mayor rigurosidad en la semántica de JavaScript. Es decir, cuestiones como asignar un valor a una variable no declarada no se podrían hacer. La intención es mejorar la seguridad, legibilidad y la detección de errores durante el desarrollo.
//Se puede aplicar dentro de una función y lo que tenga anidado.

x = 10;
console.log(x);

function prueba(){
  // "use strict"
  y = 20
  console.log(y);
}

prueba()


