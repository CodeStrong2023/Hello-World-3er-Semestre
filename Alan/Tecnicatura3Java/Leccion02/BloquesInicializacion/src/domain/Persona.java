
package domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{ //bloque de inicializacion estatico
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona = 10, no es un atributo estatico por eso tenemos un error
    }
    
    { //bloque de inicializacion no estatico(contenido dinamico)
        System.out.println("Ejecucion de bloque no estatico");
        this.idPersona = Persona.contadorPersonas++; //incrementamos el atributo
    }
    
    //los bloques de inicializacion se ejecutan antes del contructor
    
    public Persona (){
        System.out.println("Esta es la ejecucion del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
