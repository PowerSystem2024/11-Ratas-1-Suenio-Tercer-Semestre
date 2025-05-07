class Empleado {
  constructor(nombre, sueldo){
    this._nombre = nombre;
    this._sueldo = sueldo; 
  }
  
  obtenerDetalles(){
    return `Empleado: nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento){
    super(nombre, sueldo);
    this._departamento = departamento;
  }
  //Sobreescritura
  obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()}, Depto: ${this._departamento}`
  }
}

let gerente1 = new Gerente("Roberto", 1000, "Sistemas");
console.log(gerente1);

let empleado1 = new Empleado("Fernando", 2000);
console.log(empleado1);
