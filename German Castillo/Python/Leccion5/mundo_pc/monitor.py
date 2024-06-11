class Monitor:
    
    contador_monitores = 0
    
    def __init__(self,marca, tamanio):
        
        Monitor.contador_monitores += 0
        self._id_monitor = Monitor.contador_monitores
        self._marca = marca 
        self._tamanio = tamanio
        
    def __str__(self):
        return f'Id: {self._id_monitor}, Marca: {self._marca}, Tamaño: {self._tamanio}'
    
if __name__ == '__main__':
    monitor1 = Monitor('HP','15 Pulgadas')
    print(monitor1)
        
    