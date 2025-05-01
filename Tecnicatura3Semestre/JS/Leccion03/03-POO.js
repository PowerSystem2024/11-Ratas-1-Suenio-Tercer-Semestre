class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre ${this._nombre},
        sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Generate: ${super.obtenerDetalles()} depto: ${this._departamento}`
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
        console.log(tipo._departamento); //no existe en la clase padre
    }else if(tipo instanceof Empleado){
        console.log("Es de tipo Empleado");
    }else if(tipo instanceof Object){ // el orden es siempre jerariquico
        console.log("Es de tipo Object");
    }
}

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1);
let empleado1 = new Empleado("juan", 3000);
console.log(empleado1)

imprimir(gerente1);
imprimir(empleado1);