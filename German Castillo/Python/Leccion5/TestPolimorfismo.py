from Empleado import Empleado
from Gerente import Gerente


def imprimir_detalles(objeto):
    # print(objeto)  # De esta manera indirecta llama al str de la clase empleado o gerente
    print(type(objeto))  # esto es para saber el tipo de dato que recibe
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)


empleado = Empleado("Flor", 100000)
imprimir_detalles(empleado)

gerente = Gerente("Rufina", 70000, "Sistemas")
imprimir_detalles(gerente)
