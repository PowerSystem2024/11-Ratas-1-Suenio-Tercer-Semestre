public class mundoPC {
  public static void main(String[] args) {
    Monitor monitor1 = new Monitor("HP", 21);
    Teclado teclado1 = new Teclado("USB", "HP");
    Raton raton1 = new Raton("USB", "Logitech");
    Computadora computadora1 = new Computadora("Ryzen", monitor1, teclado1, raton1);

    Orden orden1 = new Orden();
    orden1.agregarComputadora(computadora1);
    orden1.mostrarOrden();
  }
}
