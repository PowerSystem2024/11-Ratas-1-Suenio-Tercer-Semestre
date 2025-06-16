package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;

    static{
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersonas;
    }

    {
        System.out.println("Ejecucion del bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++;
    }

    public Persona() {
        System.out.println("Ejecucion del constructo");
    }
    public int getIdPersona() {
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
}
