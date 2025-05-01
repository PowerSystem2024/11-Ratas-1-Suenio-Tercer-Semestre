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

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1);

let empleado1 = new Empleado("juan", 3000);
console.log(empleado1)
