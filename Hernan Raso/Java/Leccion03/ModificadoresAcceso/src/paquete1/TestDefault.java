
package paquete1;

import paquete2.Clase4;


public class TestDefault {
    public static void main(String[] args) {
        Clase2 clase2 = new Clase2();
        
        Clase4 clase4 = new Clase4("Publico");
        System.err.println(clase4.getAtributoPrivate());
        clase4.setAtributoPrivate("Cambio");
        System.out.println("Clase4 = " + clase4.getAtributoPrivate());
    }
    
}
