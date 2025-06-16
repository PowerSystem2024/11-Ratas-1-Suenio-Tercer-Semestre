package AutoboxingUnboxing;

public class test_AutoboxingUnboxing {
    public static void main(String[] args) {
        /*  Clases envolventes o Wrapper

            Clases envolventes de tipos primitivos
            int = la clase envolvente es integer
            long = la clase envolvente es long
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            Boolean = la clase envolvente es Boolean
            Byte = la clase envolvente es Byte
            char = la clase envolvente es Character
            Short = la clase envolvente es short
        */

        int enteroPrim = 10;//Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo object con la clase integer
        System.out.println("entero = " + entero.toString());

        int entero2 = entero;//Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
