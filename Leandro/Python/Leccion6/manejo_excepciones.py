from numerosIgualesExcepcion import NumeroIgualesException
resultado = None

try:
    a = int(input('Digite el numero: '))
    b = int(input('Digite el segundo numero: '))
    if a == b:
        raise NumeroIgualesException('son numeros iguales')
except TypeError as e:
    print(f'TypeError - ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'Ocurrio un error: {type(e)}')
except Exception as e:
    print(f'Ocurrio un error: {type(e)}')
else: 
    print('No se arrojo ninguna excepcion')
finally: #Siempre se ejecuta
    print("Ejecucion de este bloque finally")
    

    
print(f'El resultado es: {resultado}')
print('seguimos...')