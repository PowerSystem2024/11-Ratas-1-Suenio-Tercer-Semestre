public class Computadora {
  private final int idComputadora;
  private String nombre;
  private Monitor monitor;
  private Teclado teclado;
  private Raton raton;
  private static int contadorComputadora = 0;


  public Computadora() {
    this.idComputadora = ++Computadora.contadorComputadora;
  }

  public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton) {
    this();
    this.nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  public int getIdComputadora() {
    return idComputadora;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public Monitor getMonitor() {
    return monitor;
  }

  public void setMonitor(Monitor monitor) {
    this.monitor = monitor;
  }

  public Teclado getTeclado() {
    return teclado;
  }

  public void setTeclado(Teclado teclado) {
    this.teclado = teclado;
  }

  public Raton getRaton() {
    return raton;
  }

  public void setRaton(Raton raton) {
    this.raton = raton;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("Computadora{\n");
    sb.append("ID: ").append(idComputadora).append('\n');
    sb.append("Nombre: ").append(nombre).append('\n');
    sb.append(monitor).append('\n');
    sb.append(teclado).append('\n');
    sb.append(raton).append('\n');
    sb.append('}');
    return sb.toString();
  }
}
