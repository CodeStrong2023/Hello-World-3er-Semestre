package test;

import domain.Persona;

public class TestJavaBeans {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setNombre("Hernan");
        persona.setApellido("Raso");
        System.out.println("persona = " + persona);
        
        System.out.println("persona nombre = " + persona.getNombre());
        System.out.println("persona apellido = " + persona.getApellido());
        
        
    }
}
