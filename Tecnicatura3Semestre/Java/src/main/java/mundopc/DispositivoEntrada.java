package main.java.mundopc;

public class DispositivoEntrada {
  private String tipoEntrada;
  private String marca;

  public DispositivoEntrada(String tipoEntrada, String marca) {
    this.tipoEntrada = tipoEntrada;
    this.marca = marca;
  }

  public String getTipoEntrada() {
    return tipoEntrada;
  }

  public void setTipoEntrada(String tipoEntrada) {
    this.tipoEntrada = tipoEntrada;
  }

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder();
    sb.append("Entrada: '").append(tipoEntrada).append('\'');
    sb.append(", Marca: '").append(marca).append('\'');
    return sb.toString();
  }
}
