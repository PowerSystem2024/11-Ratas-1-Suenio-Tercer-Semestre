package main.java.mundopc;

public class Teclado extends DispositivoEntrada {
  int idTeclado;
  static int contadorTeclado = 0;

  public Teclado(String tipoEntrada, String marca) {
    super(tipoEntrada, marca);
    this.idTeclado = ++Teclado.contadorTeclado;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("Teclado: ");
    sb.append("ID: ").append(idTeclado);
    sb.append(", ");
    sb.append(super.toString());
    return sb.toString();
  }
}
