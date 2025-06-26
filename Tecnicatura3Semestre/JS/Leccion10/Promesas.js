let MiPromesa = new Promise( (resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvió correctamente');
    } else {
        rechazar('Se produjo un error');
    }
})

MiPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

MiPromesa
.then( valor => console.log(valor))
.catch( error=> console.log(error));

let promesa = new Promise ( (resolver) => {
    //console.log('Inicio promesa');
    setTimeout (()=> resolver('Saludos desde promesa, callback, función flecha y setTimeout'),3000);
    //console.log('Final promesa');
});

//El llamado a la promesa utilizando setTimeout
promesa.then (valor => console.log(valor));

//async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'Saludos con promesa asinc';
}

miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait() {
    let MiPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await MiPromesa);
}

funcionConPromesaYAwait();

//Promesa, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log('Inicio funcion');
        setTimeout (()=> resolver('Promesa con await y Timeout'),3000);
        console.log('Final funcion');
    });
    console.log(await miPromesa)
}

//Llamamos la función
funcionConPromesaAwaitTimeout();