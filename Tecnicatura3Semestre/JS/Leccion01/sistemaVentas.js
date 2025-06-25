class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        this._marca = marca;
    }

    conectar() {
        console.log(`Se ha conectado el dispositivo: ${this._marca}`);
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `Raton [Id: ${this.idRaton}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
    conectar() {
        console.log(`Se ha conectado el ratón: ${this._marca}`);
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }

    toString(){
        return `Teclado [Id: ${this.idTeclado}, Tipo Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
    conectar() {
        console.log(`Se ha conectado el teclado: ${this._marca}`);
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor [Id: ${this.idMonitor}, Tamaño: ${this.tamano}, Marca: ${this.marca}]`;
    }
    conectar() {
        console.log(`Se ha conectado el monitor: ${this._marca}`);
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    toString() {
        return `
Computadora [Id: ${this.idComputadora}, Nombre: ${this.nombre}]
  ${this.monitor.toString()}
  ${this.teclado.toString()}
  ${this.raton.toString()}`;
    }
    
    conectarDispositivos() {
        console.log(`Se han conectados todos los dispositivos de ${this.nombre}:`);
        this.monitor.conectar();    
        this.teclado.conectar();
        this.raton.conectar();
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        console.log(`Orden Id: ${this._idOrden}`);
        this._computadoras.forEach(comp => console.log(comp.toString())) 
    }
}

const monitor1 = new Monitor("LG", "22 pulgadas");
const teclado1 = new Teclado("USB", "Logitech");
const raton1 = new Raton("USB", "Genius");

const compu1 = new Computadora("PC Gamer", monitor1, teclado1, raton1);

const orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.mostrarOrden();
console.log(compu1);
console.log(orden1);
compu1.conectarDispositivos();

//Para aplicar polimorfismo, se creó el método conectar() en DispositivoEntrada, y la misma se utiliza en las diferentes clases-hija, y en Monitor. En la clase Computadora se aprovechó que interactua con estas otras clases para poder crear un nuevo método que aproveche conectar().
//Respecto a la clase Orden, aunque no comparte conectar(), si mantiene esta interacción con los objetos de Computadora, que a su vez sí comparten distintos métodos, como conectar y toString.





