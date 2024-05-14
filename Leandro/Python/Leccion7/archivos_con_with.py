from manejoDeArchivos import ManejoArchivos


#MANEJO DE CONTEXTO WITH: Sintaxis simplificada, abre y cierra el archivo

#with open('prueba.txt','r', encoding='utf8') as archivo:
 #   print(archivo.read())
    
#No hace faltra ni el try ni el finally
#en el contexto de with lo que se ejecuta de marena automaticas
#Utiliza diferentes metods: __enter__ este es el que se abre
#Ahora el siguiente metodo es el que se cierra: __exit__
    
with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())   
