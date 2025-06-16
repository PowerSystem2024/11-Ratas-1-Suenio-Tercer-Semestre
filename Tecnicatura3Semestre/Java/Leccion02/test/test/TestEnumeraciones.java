package test;
import enumeraciones.Continentes;
import enumeraciones.Dias;

public class TestEnumeraciones {
    public static void main(String[] args) {
        //System.out.println("Dia1: "+Dias.LUNES);
        //indicarDiaSemana(Dias.MARTES);

        System.out.println("Contienente No. 4: " + Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. contienente: "+Continentes.AMERICA.getHabitantes());
    }

    public static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("primer dia de la semana");
                break;
                case MARTES:
                    System.out.println("segundo dia de la semana");
                    break;
                    case MIERCOLES:
                        System.out.println("tercer dia de la semana");
                        break;
                        case JUEVES:
                            System.out.println("quarto dia de la semana");
                            break;
                            case VIERNES:
                                System.out.println("quinto dia de la semana");
                                break;
                                case SABADO:
                                    System.out.println("quatro dia de la semana");
                                    break;
                                    case DOMINGO:
                                        System.out.println("quinto dia de la semana");
                                        break;
                                        default:
                                            break;
        }

    }
}
