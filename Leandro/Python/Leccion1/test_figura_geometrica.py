from Cuadrado import Cuadrado
from Rectangulo import Rectangulo


print('creacion del objeto clase cuadradro'.center(50,'_'))
cuadrado1 = Cuadrado(5, "Azul")
cuadrado1.alto = -10
print(cuadrado1.ancho)
print(cuadrado1.alto)
print(f"Cálculo del área del cuadrado: {cuadrado1.calcular_area()}")

# MRO = Method Resolution Order
print(Cuadrado.mro())
print(cuadrado1)
print('creacion del objeto clase cuadradro'.center(50,'_'))
rectangulo1 = Rectangulo(3,8, 'verde')
rectangulo1.alto = 15
print(f'Calculo del area del rectangulo: {rectangulo1.calcular_area()}')
