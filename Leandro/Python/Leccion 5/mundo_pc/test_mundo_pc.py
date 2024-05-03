from computadora import Computadora
from monitor import Monitor
from raton import Raton
from teclado import Teclado
from orden import Orden

teclado1 = Teclado('HP','USB')
monitor1 = Monitor('HP','15 pulgadas ')
raton1 = Raton('HP','USB')
computadora1 = Computadora('HP',monitor1,teclado1,raton1)

teclado2 = Teclado('Acer','blu')
monitor2 = Monitor('Acer','22 pulgadas ')
raton2 = Raton('Acer','blu')
computadora2 = Computadora('Acer',monitor2,teclado2,raton2)

teclado3 = Teclado('Gamer','blu')
monitor3 = Monitor('Gamer','22 pulgadas ')
raton3 = Raton('Gamer','blu')
computadora3 = Computadora('Gamer',monitor3,teclado3,raton3)

computadoras1 = [computadora1,computadora2,computadora3]
orden1 = Orden(computadoras1)
print(orden1)



