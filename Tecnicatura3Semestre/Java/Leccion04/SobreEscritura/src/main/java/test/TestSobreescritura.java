package test;

import domain.Empleado;
import domain.Gerente;

public class TestSobreescritura {

    public static void main(String[] args){

        Empleado empleado = new Empleado("Juan", 10000);
        imprimir(empleado);
        //System.out.println("empleado = " + empleado.obtenerDetalles());
        empleado = new Gerente("Jose", 5000, "Sistemas");
        imprimir(empleado);
        //System.out.println("gerente = " + gerente.obtenerDetalles());
    }

    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("empleado = " + detalles);
    }
}
