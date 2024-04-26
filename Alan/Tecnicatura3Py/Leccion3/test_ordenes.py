from Orden import Orden
from Producto import Producto

producto1 = Producto("Camiseta ", 100.00)
producto2 = Producto("Pantalon ", 150.00)
producto3 = Producto("Medias ", 45.00)
producto4 = Producto("Campera ", 250.00)
producto5 = Producto("sweter ", 95.00)
producto6 = Producto("blusa ", 75.00)

productos1 = [producto1, producto2] #Lista de productos
orden1 = Orden(productos1) #Primer objeto orden pasando la lista de productos
orden1.agregar_productos(producto5)
orden1.agregar_productos(producto3)
print(orden1)
print(f"Total de la orden1: {orden1.calcular_total()}")

productos2 = [producto3, producto4]
orden2 = Orden(productos2)
orden2.agregar_productos(producto6)
orden2.agregar_productos(producto2)
print(orden2)
print(f"Total de la orden2: {orden2.calcular_total()}")

