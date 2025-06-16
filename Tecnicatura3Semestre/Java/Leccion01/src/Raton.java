public class Raton extends DispositivoEntrada{
  private int idRaton;
  private static int contadorRatones = 0;

  public Raton(String tipoEntrada, String marca) {
    super(tipoEntrada, marca);
    this.idRaton = ++Raton.contadorRatones;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("Raton: ");
    sb.append("ID: ").append(idRaton);
    sb.append(", ");
    sb.append(super.toString());
    return sb.toString();
  }
}
