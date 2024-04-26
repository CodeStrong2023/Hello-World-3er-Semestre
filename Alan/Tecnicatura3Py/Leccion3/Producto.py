class Producto:
    contador_productos = 0 #variable de clase


    def __init__(self, nombre, precio):
        Producto.contador_productos +=1 #aumento para la variable clase
        self._id_producto = Producto.contador_productos #asignacion desde variable clase
        self._nombre = nombre
        self._precio = precio

    #metodo getters and setters
    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def precio(self):
        return self._precio

    @precio.setter
    def precio(self, precio):
        self._precio = precio

    #sobre escribimos el metodo str
    def __str__(self):
        return f"Id Producto: {self._id_producto}, nombre: {self._nombre}, precio: {self._precio}"

#solo sera visible si la prueba se ejecuta desde aqui
if __name__ == "__main__":
    producto1 = Producto("Camiseta", 100.00)
    producto2 = Producto("Pantalon", 150.00)