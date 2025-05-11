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
  //Sobreescrimos un mismo método pero con un comportamiento distinto, aprovechando la herencia de una clase padre a una clase hija
  obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()}, Depto: ${this._departamento}`
  }
}

//Nos muestra por consola los detalles según el objeto que le pasemos.
function imprimir(tipo){ 
  console.log(tipo.obtenerDetalles());
  if (tipo instanceof Gerente){
    console.log("Es un objeto de tipo Gerente");
  } else if (tipo instanceof Empleado){
    console.log("Es un objeto de tipo de Empleado");
  } else if (tipo instanceof Object) { //El orden siempre es jerárquico
    console.log("Es de tipo Object");
    
  }
}


let gerente1 = new Gerente("Roberto", 1000, "Sistemas");
console.log(gerente1);

let empleado1 = new Empleado("Fernando", 2000);
console.log(empleado1);

imprimir(gerente1)
