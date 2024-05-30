
package Test;

import domain.Empleado;
import domain.Gerente;

public class TestInstanceOff {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan",10000);
        DeterminarTipo(empleado1);
        empleado1= new Gerente("Jose",5000,"Sistemas");
        DeterminarTipo(empleado1);
 
    }
    
    public static void DeterminarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            ((Gerente) empleado).getDepartamento();
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
    
    
}
