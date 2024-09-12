package mundopc;

import ar.com.system2023.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorSamsung = new Monitor("Samsung", 22);//Importar la clase
        Teclado tecladoSamsung = new Teclado("Bluetooth", "XSOUL");
        Raton ratonSamsung = new Raton("Bluetooth", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
        
        //Creamos otros obj de diff marca
        Monitor monitorGamer = new Monitor("Gamer", 32);//Importar la clase
        Teclado tecladoGamer = new Teclado("Gamer", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
                Orden orden1 = new Orden(); //Inicializamos el arreglo vacio
                Orden orden2 = new Orden(); //Nueva lista para obj orden 2
                orden1.agregarComputadora(computadoraSamsung);
                orden1.agregarComputadora(computadoraGamer);
                Computadora computadoraVarias = new Computadora("Computadora de diferentes marcas", monitorSamsung, tecladoGamer, ratonSamsung);
                orden2.agregarComputadora(computadoraVarias);
                orden1.mostrarOrden();
                orden2.mostrarOrden();
    }
    
}
