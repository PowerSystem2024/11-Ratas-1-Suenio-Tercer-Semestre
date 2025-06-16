let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver("resolvio correctamente");
    }else{
        rechazar("se produjo un error");
    }
});
//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//    .then(valor=>console.log(valor))
//    .catch(error=>console.log(error));

let promesa = new Promise((resolver)=>{
    //console.log("Inicio promesa")
    setTimeout( () => resolver("saludos desde promesa, callback, funcion flecha y setTimeout"), 3000);
    //console.log("final promesa")
})

//El llamado a la promesa 
//promesa.then(valor => console.log(valor));

//async indica que una funcon regresa una promesa
async function miFuncionConPromesa(){
    return "saludos con promesas y asinc";
}

//miFuncionConPromesa().then(valor=>console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}
//funcionConPromesaYAwait();

//promesa, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver =>{
        console.log("inicio funcion")
        setTimeout(()=> resolver("promesa con await y timeout"),3000);
        console.log("final funcion")
    });
    console.log(await miPromesa);
}
//llamamos la funcion
funcionConPromesaAwaitTimeout();