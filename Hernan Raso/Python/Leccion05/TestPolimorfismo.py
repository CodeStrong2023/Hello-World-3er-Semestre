from Empleado import Empleado
from Gerente import Gerente


def imprimir_detalles(objeto):
    # print(objeto)  # De esta manera indirecta llama al str de la clase empleado o gerente
    print(type(objeto))  #  saber el tipo de dato que recibe
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)


empleado = Empleado("Hernan", 100000)
imprimir_detalles(empleado)

gerente = Gerente("Zoe", 70000, "Sistemas")
imprimir_detalles(gerente)
