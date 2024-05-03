

class Orden:
    
    contador_ordenes = 0
    
    def __init__(self,computadoras):
        Orden.contador_ordenes += 1
        self._idOrden = Orden.contador_ordenes
        self._computadoras = computadoras
        
    
    def agregar_computadoras(self,computadoras):
        self._computadoras.append(computadoras)
    
    def __str__(self):
        computadoras_srt = ''
        for computadora in self._computadoras:
            computadoras_srt += computadora.__str__()
            
        return f'''
            Orden: {self._idOrden}
            Computadoras: {computadoras_srt}
        '''
        
