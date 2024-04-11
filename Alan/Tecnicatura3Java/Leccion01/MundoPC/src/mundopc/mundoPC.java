
package mundopc;

import ar.com.system2023.mundopc.Computadora;
import ar.com.system2023.mundopc.Monitor;
import ar.com.system2023.mundopc.Orden;
import ar.com.system2023.mundopc.Raton;
import ar.com.system2023.mundopc.Teclado;


public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP= new Monitor("HP", 13);
        Teclado tecladoHP= new Teclado("Bluetooth", "HP");
        Raton ratonHP= new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Otros objetos de diferente marca
        Monitor monitorGamer= new Monitor("Gamer", 32);
        Teclado tecladoGamer= new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer= new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        
        Orden orden1 = new Orden();//iniciamos el arreglo vacio
        Orden orden2 = new Orden();//iniciamos una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.mostrarOrden();
        
        Computadora computadorasVarias= new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadorasVarias);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
        //crear mas objetos de tipo computadora con todos sus elementos
        //completar una lista de objeto orden1 que llegue a los 10 elementos
        //probar de esta manera los elementos a maximo rendimiento
    }
}
