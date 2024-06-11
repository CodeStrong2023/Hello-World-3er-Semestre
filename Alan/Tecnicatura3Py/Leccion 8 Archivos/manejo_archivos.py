# declaramos una variable
try:
    archivo = open("prueba.txt", "w", encoding = "utf8") # w: write / escribir
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Los acentos son importantes para las palabras\n")
    archivo.write("Como por ejemplo: acción, ejecución y producción\n")
    archivo.write("Las letras son: \nr read, \na append anexa, \nw write, \nx crea un archivo")
    archivo.write("\nt esta es para texto o text, \nb archivos binarios, \nw+ leer y escribir, son iguales r+\n")
    archivo.write("Con esto terminamos\n")
    archivo.write("Saludamos a todos los alumnos de la tecnicatura\n")
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # con esto se debe cerrar el archivo
# archivo.write("Todo quedo perfecto"): este es un error