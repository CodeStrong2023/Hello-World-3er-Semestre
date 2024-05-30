
package test;
import domain.*;
public class TestClseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 5000);
        Empleado empleado2 = new Empleado("Juan", 5000);
        
        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referemcia enmemoria");
        }else{
            System.out.println("Tienen diferente referecnia en memoria");
        }
        
        if(empleado1.equals(empleado2)){
            System.out.println("los objetos tienen el mismo contenido");
        }else{
            System.out.println("los objetos tienen diferente contenido");
        }
        
                
    }
}
