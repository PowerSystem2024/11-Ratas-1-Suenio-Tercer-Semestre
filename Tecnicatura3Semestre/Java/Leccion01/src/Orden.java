public class Orden {
  private final int idOrden;
  private Computadora computadora[];
  private static int contadorOrdenes;
  private static final int max_computadoras = 10;
  private int contadorComputadoras;


  public Orden() {
    this.idOrden = ++Orden.contadorOrdenes;
    this.computadora = new Computadora[Orden.max_computadoras];
  }

  public void agregarComputadora(Computadora computadora){
    if(this.contadorComputadoras < Orden.max_computadoras){
      this.computadora[this.contadorComputadoras++] = computadora;
    }else {
      System.out.println("Has superado el l�mite");
    }
  }

  public void mostrarOrden(){
    System.out.println("Orden " + this.idOrden);
    System.out.println("Computadoras de la orden: "+ this.idOrden);
    for (int i = 0; i < this.contadorComputadoras; i++) {
      System.out.println(this.computadora[i]);
    }
  }
}
