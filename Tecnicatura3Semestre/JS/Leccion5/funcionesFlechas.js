function miFuncion(){
}

miFuncion();

let myFuncion = function () {
    console.log("saludos desde la funcion anonima");
}

//ahora vamos a crear una funcion flecha
let miFuncionFlecha = () => {
    console.log("saludos desde mi funcion flecha");
}
//hay mas variantes para funciones flecha que vamos a ir viendo 
miFuncionFlecha();

//lo hacemos en una linea
const saludar = () => console.log("saludar a todos desde esta funcion flecha");

console.log(saludar());

//otro ejemplo
const saludar2 = () => {
    return "Saludos desde la funcion flecha dos"
}

console.log(saludar2());

//simplificamos la funcion anterior
const saludar3 = () => "saludos desde la funcion"

console.log(saludar3());

//continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: "juan", apellido: "Lara"})

console.log(regresaObjeto());

//funciones que reciben parametros
const funcionParametros = ( mensaje ) => console.log( mensaje );

funcionParametros("saludos desde esta funcion con parametros");

//una funcion clasica 
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}
funcionParametrosClasica("Saludos desde la funcion clasica")

//se puede omitir los parentesis en la funcion flecha de la siguiente manera
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros("otra forma de trabajar con funcion flecha");

//ahora vemos funciones flecha con varios parametros
const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}
    console.log(funcionConParametros2(3, 5));