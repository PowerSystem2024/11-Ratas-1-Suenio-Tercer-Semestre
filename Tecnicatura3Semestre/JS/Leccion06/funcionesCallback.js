miFuncion1()
miFuncion2()

function miFuncion1(){
    console.log("funcion 1")
}
function miFuncion2(){
    console.log("funcion 2")
}

//funcion tipo callback
function imp ( mensaje ){
    console.log( mensaje );
}
function sumar(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
}
sumar (5, 3, imp);

//llamadas asincronicas con uso setTimeout
function miFuncionCallback(){
    console.log("saludo asincrono despues de 3 segundos")
}
setTimeout(miFuncionCallback, 3000);
setTimeout(function() { console.log("saludo asincrono 2")}, 4000);
setTimeout( () => console.log("saludos asincrono 3"), 5000);

let reloj = () =>{
    let flecha = new Date();
    console.log(`${flecha.getHours()}:${flecha.getMinutes()}:${flecha.getSeconds()}`);
}
setInterval(reloj, 1000)
