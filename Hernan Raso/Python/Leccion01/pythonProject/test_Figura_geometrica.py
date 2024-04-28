from Cuadrado import Cuadrado
from Rectangulo import Rectangulo
from pythonProject.figuraGeometrica import figuraGeometrica

print('Creacion de objetos clase Cuadrado' .center(50, '_'))
cuadrado1 = Cuadrado(5, 'Azul')
cuadrado1.alto = 7
cuadrado1.ancho = 7
# print(cuadrado1.ancho)
# print(cuadrado1.alto)
print(f'Calculo del area del cuadrdado: {cuadrado1.calcular_area()}')

# MRO = Method Resolution Order
# print(Cuadrado.mro())


print(cuadrado1)
print('Creacion de objetos clase Rectangulo' .center(50, '_'))
rectangulo1 = Rectangulo(3, 8, 'verde')
rectangulo1.ancho = 8
print(f'Calculo del area del rectangulo: {rectangulo1.calcular_area()}')
print(rectangulo1)

# figura1 = figuraGeometrica() No se puede instanciar, es abstracta

print(Cuadrado.mro())