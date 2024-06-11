from Producto import Producto
class Orden:
    contador_ordenes = 0
    
    def __init__(self, productos) :
        Orden.contador_ordenes += 1
        self._id_orden = Orden.contador_ordenes
        self._productos = list(productos)
        
    def agregar_producto(self, producto):
        self._productos.append(producto) #esto es para agregar un nuevo producto
    
    
    def calcular_total(self):
        total = 0 #variable temporal para almacenar el total temporal
        for producto in self._productos:
            total += producto.precio
        return total
    
    def __str__(self):
        productos_str = ''
        for producto in self._productos:
            productos_str += producto.__str__()+'|'
        return f'Orden: {self._id_orden}, \nProducto: {productos_str}'
        

if __name__ == '__main__':
    producto1 = Producto('Camiseta', 100.00)
    print(producto1)
    producto2 = Producto('Pantalon', 150.00)
    print(producto2)
    productos1 = [producto1,producto2] #Lista de Productos
    orden1 = Orden(productos1)
    print(orden1)
    orden2 = Orden(productos1)
    print(orden2)
    
#tarea: Modificar la orden2 ingresando nuevos productos con sus nombres y precios
#crear una nueva lista de productos y agregarla a la orden2
if __name__ == '__main__':
    producto3 = Producto('Remera', 75.00)
    print(producto1)
    producto4 = Producto('buzo', 150.00)
    print(producto2)
    productos1 = [producto3,producto4] #Lista de Productos
    orden3 = Orden(productos1)
    print(orden2)
    