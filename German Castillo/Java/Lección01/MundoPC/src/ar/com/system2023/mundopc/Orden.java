package ar.com.system2023.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[]; //Arreglo de objetos
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10;
    private int contadorComputadoras; 
    
    //Constructor vacío
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    //Método para agregar una nueva computadora al arreglo
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadoras < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadoras++] = computadora;
        }
        else{
            System.out.println("Has superado el límite: "+Orden.MAX_COMPUTADORAS);
        }
    }
    
    //Mostrar orden
    public void mostrarOrden(){
        System.out.println("Orden #: "+idOrden);
        System.out.println("Computadoras de la orden #: "+this.idOrden);
        for(int i = 0; 1 < this.contadorComputadoras; i++){
            System.out.println(this.computadora[i]);
        }
    }
}