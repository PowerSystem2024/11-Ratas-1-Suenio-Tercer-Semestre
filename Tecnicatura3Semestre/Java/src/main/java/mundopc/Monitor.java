package main.java.mundopc;

import java.lang.reflect.Constructor;

public class Monitor {
  private String marca;
  private double tamanio;
  private final int idMonitor;
  private static int contadorMonitor = 0;

  public int getIdMonitor() {
    return idMonitor;
  }

  public Monitor() {
    this.idMonitor = ++Monitor.contadorMonitor;
  }

  public Monitor(String marca, double tamanio) {
    this();
    this.marca = marca;
    this.tamanio = tamanio;
  }

  @Override
  public String toString() {
    final StringBuilder sb = new StringBuilder("Monitor: ");
    sb.append("Marca: '").append(marca).append('\'');
    sb.append(", Tamaño: ").append(tamanio);
    sb.append(", ID: ").append(idMonitor);
    return sb.toString();
  }
}
