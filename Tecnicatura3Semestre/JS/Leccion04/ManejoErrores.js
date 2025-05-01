"use Strict";

try{
    let x = 10;
    //miFuncion();
    throw "mi error";
}catch(error){
    console.log(typeof(error));
}finally{
    console.log("termina la revision de errores");
}

console.log("continuamos...");

let resultado = 5;

try{
    if(isNaN(resultado)) throw "no es un numero";
    else if(resultado == "") throw "es una cadena vacia";
    else if(resultado >= 0)throw "Valor positivo";
    else if(resultado <= 0)throw "Valor negativo"
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("terminala revision de errores 2");
}
