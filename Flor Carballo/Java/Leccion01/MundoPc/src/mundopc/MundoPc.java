package mundopc;

import ar.com.system2023.mundopc.*;

public class MundoPc {
    public static void main(String[] args) {
    Monitor monitorHP = new Monitor("HP", 13); //importar la clase
    Teclado tecladoHP = new Teclado("Bluetooth", "HP");
    Raton ratonHP = new Raton("Bluetooth", "HP");
    Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
    
    //Creamos otros objetos de diferentes marcas
    Monitor monitorGamer = new Monitor("Gamer", 32);
    Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
    Raton ratonGamer = new Raton("Bluetooth", "Gamer");
    Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
    
    Monitor monitorLenovo = new Monitor("Lenovo", 24);
    Teclado tecladoLenovo = new Teclado("Bluetooth", "Lenovo");
    Raton ratonLenovo = new Raton("Bluetooth", "Lenovo");
    Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
    
     Monitor monitorSamsung = new Monitor("Samsung", 36);
    Teclado tecladoSamsung = new Teclado("Bluetooth", "Samsung");
    Raton ratonSamsung = new Raton("Bluetooth", "Samsung");
    Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
    
    Monitor monitorMac = new Monitor("Mac", 128);
    Teclado tecladoMac = new Teclado("Bluetooth", "Mac");
    Raton ratonMac = new Raton("Bluetooth", "Mac");
    Computadora computadoraMac = new Computadora("Computadora Mac", monitorMac, tecladoMac, ratonMac);
    
    Monitor monitorToshiba = new Monitor("Toshiba", 33);
    Teclado tecladoToshiba = new Teclado("Bluetooth", "Toshiba");
    Raton ratonToshiba = new Raton("Bluetooth", "Toshiba");
    Computadora computadoraToshiba = new Computadora("Computadora Toshiba", monitorToshiba, tecladoToshiba, ratonToshiba);
    
    Monitor monitorAcer = new Monitor("Acer", 10);
    Teclado tecladoAcer = new Teclado("Bluetooth", "Acer");
    Raton ratonAcer = new Raton("Bluetooth", "Acer");
    Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);
    
    Monitor monitorSony = new Monitor("Sony", 10);
    Teclado tecladoSony = new Teclado("Bluetooth", "Sony");
    Raton ratonSony = new Raton("Bluetooth", "Sony");
    Computadora computadoraSony = new Computadora("Computadora Sony", monitorSony, tecladoSony, ratonSony);
    
    Monitor monitorAsus = new Monitor("Asus", 10);
    Teclado tecladoAsus = new Teclado("Bluetooth", "Asus");
    Raton ratonAsus = new Raton("Bluetooth", "Asus");
    Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);
    
    Monitor monitorBangho = new Monitor("Bangho", 10);
    Teclado tecladoBangho = new Teclado("Bluetooth", "Bangho");
    Raton ratonBangho = new Raton("Bluetooth", "Bangho");
    Computadora computadoraBangho = new Computadora("Computadora Bangho", monitorBangho, tecladoBangho, ratonBangho);
    
    Orden orden1 = new Orden(); //inicializamos el arreglo vacío
    Orden orden2 = new Orden(); //Una nueva lista para el objeto orden 2
    orden1.agregarComputadora(computadoraHP);
    orden1.agregarComputadora(computadoraGamer);
    orden1.agregarComputadora(computadoraLenovo);
    orden1.agregarComputadora(computadoraSamsung);
    orden1.agregarComputadora(computadoraMac);
    orden1.agregarComputadora(computadoraToshiba);
    orden1.agregarComputadora(computadoraAcer);
    orden1.agregarComputadora(computadoraSony);
    orden1.agregarComputadora(computadoraAsus);
    orden1.agregarComputadora(computadoraBangho);
    
    Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
    orden2.agregarComputadora(computadorasVarias);
    
    orden1.mostrarOrden();
    orden2.mostrarOrden();
    
    
    }
 }  
