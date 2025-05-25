package domain;

import java.util.Objects;

public class Empleado {

    protected String nombre;
    protected double sueldo;

    public Empleado(String nombre, double sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    public String obtenerDetalles(){
        return "Nombre: " + this.nombre + ", Sueldo: $" + this.sueldo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getSueldo() {
        return sueldo;
    }

    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "nombre='" + nombre + '\'' +
                ", sueldo=" + sueldo +
                '}';
    }

    @Override
    public final boolean equals(Object o) {
       if(this == o){
           return true;
       }
       if (o == null){
           return false;
       }
       if (getClass() != o.getClass()){
           return false;
       }
       final Empleado other = (Empleado) o;
       if (Double.doubleToLongBits(this.sueldo) != Double.doubleToLongBits(other.sueldo)){
           return false;
       }
       if (!Objects.equals(this.nombre, other.nombre)){
           return false;
       }
       return true;
    }

    @Override
    public int hashCode() {
       int hash = 7;
       hash = 53 * hash + Objects.hashCode(this.nombre);
       hash = 53 * hash + (int)(Double.doubleToLongBits(this.sueldo) ^ (Double.doubleToLongBits(this.sueldo) >>> 32));
       return hash;
    }
}
