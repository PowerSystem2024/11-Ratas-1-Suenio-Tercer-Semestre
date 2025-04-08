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
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor [Id: ${this.idMonitor}, Tamaño: ${this.tamano}, Marca: ${this.marca}]`;
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


