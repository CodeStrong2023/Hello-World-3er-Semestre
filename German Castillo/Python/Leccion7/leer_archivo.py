
archivo = open('prueba.txt', 'r', encoding= 'utf8') #las letras son: 'r', 'a','w','x'

#print(archivo.read())

print(archivo.read(15))
print(archivo.read(5)) #continuamos desde la linea anterior
print(archivo.readline()) # solo la primer linea
print(archivo.readline()) #la siguiente linea

#Vamos a iterar el archivo
#for linea in archivo:
    #print(linea)
    #print(archivo.readlines()[11])
#Anexamos informacion, copiamos a otro

archivo2 = open('copia.txt', 'a', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo 

print('Se a terminado el porceso de leer y de copair archivo ')