import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) {//ciclo infinito

            System.out.println("******* Aplicaicon Calculadora ******");
            try {

                mostrarMenu();
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                } else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break; //Rompe el ciclo y sale
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                //Imprimir un salto de linea antes de repetir el menu
                System.out.println("--------------------------------------------------");
            } catch (Exception e) {//fin del try, comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());
            }

        }
    }

    private static void mostrarMenu() {
        //mostramsoe el menu
        System.out.println("""
                1. Suma 
                2. Resta
                3. Multiplicaccion
                4. Division
                5 Salir
                """);
        System.out.println("Operacion a Realizar");
    }

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        Double resultado;
        System.out.println("DIGITE EL VALOIR DEL OPERANDO 1");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.println("DIGITE EL VALOIR DEL OPERANDO 1");
        var operando2 = Double.parseDouble(entrada.nextLine());
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion: " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division: " + resultado);
            }
            default -> System.out.println("Operacion erronea" + operacion);
        }
    }
}
