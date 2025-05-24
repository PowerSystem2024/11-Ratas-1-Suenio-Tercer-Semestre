package test;

import domain.Empleado;
import domain.Gerente;

public class TestInstanceOf {

    public static void main(String[] args){

        Empleado empleado = new Empleado("Juan", 10000);
        determinarTipo(empleado);
        empleado = new Gerente("Jose", 5000, "Sistemas");
        determinarTipo(empleado);
    }

    public static void determinarTipo(Empleado empleado){
       if(empleado instanceof Gerente){
           System.out.println("Es de tipo Gerente");
           Gerente gerente = (Gerente) empleado;
           //((Gerente) empleado).getDepartamento();
           System.out.println("Gerente = " + gerente.getDepartamento());
       }else if(empleado instanceof Empleado){
           System.out.println("Es de tipo Empleado");
       }else if (empleado instanceof Object) {
           System.out.println("Es de tipo Object");
       }
    }
}
