from Orden import Orden
from Producto import Producto

producto1 = Producto("Camiseta", 7000)
producto2 = Producto("Pantalon", 9000)
producto3 = Producto("Camisa", 20000)
producto4 = Producto("Remera", 8000)
producto5 = Producto("Bermuda", 13000)
producto6 = Producto("Medias", 2000)


productos1 = [producto1, producto2] # Lista de productos
orden1 = Orden(productos1) # Primer objeto orden pasando la lista de productos
orden1.agregar_producto(producto5)
orden1.agregar_producto(producto3)
print(orden1)
print(f"Total de la orden1: {orden1.calcular_total()}")
productos2 = [producto3, producto4]
orden2 = Orden(productos2)
orden2.agregar_producto(producto6)
orden2.agregar_producto(producto2)
print(orden2)
print(f"Total de la orden2: {orden2.calcular_total()}")