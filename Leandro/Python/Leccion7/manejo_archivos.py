#Declaramos una variable
try:
    archivo = open('prueba.txt', 'w' , encoding='utf8') #la w es de write(escribir)
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son imporrtantes para las palabras\n')
    archivo.write('como por ejemplo: acción,ejecución y producción\n')
    archivo.write('Las letras osn : \n r read, \n append anexa, \n w write escribe,\n x crea un archivo')
    archivo.write('\nt esta es para texto o text, \n b archivos binarios, \n w+ lee y escribe, \n r+')
    archivo.write('Saluod a todos los alumnos de la tecnicatura\n')
    archivo.write('\nCon esto terminamos')
except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() #es para cerrar
    
#archivo.write('Todo quedo perfecto'): este es un error