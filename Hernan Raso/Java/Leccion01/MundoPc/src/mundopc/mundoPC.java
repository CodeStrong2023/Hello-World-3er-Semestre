package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Importar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32); 
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); //Inicializamos el arrelgo vacio
        Orden orden2 = new Orden(); //Una nueva lista para el objeto orden 2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadorasVarias);
        
        Monitor monitorSamsung = new Monitor("Samsung", 19); 
        Teclado tecladoSamsung = new Teclado("Usb", "Samsung");
        Raton ratonSamsung = new Raton("Usb", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
        Orden orden3 = new Orden(); //Inicializamos el arrelgo vacio
        
        
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden3.agregarComputadora(computadoraSamsung);
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        orden3.mostrarOrden();
    }
}
//Crear mas objetos de tipo computadora con todos sus elementos
//Completar una lista en el objeto orden1 que llegue a los 10 elementos
//Probar de esta manera los metodos al maximo rendimiento

