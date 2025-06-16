package ModificadoresAcceso.test;
import ModificadoresAcceso.Paquete1.Clase1;
import ModificadoresAcceso.Paquete2.Clase3;

public class testModificadoresAcceso {
    public static void main(String[] args) {
        Clase1 clase1 = new Clase1();
        System.out.println("clase1 = " + clase1.atributoPublic);
        clase1.metodoPublic();
        Clase3 claseHija = new Clase3();
        System.out.println("claseHija = " + claseHija);
    }
}
