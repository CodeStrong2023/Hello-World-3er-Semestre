import psycopg2 as bd # esto es para poder conectarnos a Postgre

conexion = bd.connect(user="postgres", password="admin", host="127.0.0.1", database="test_bd")
try:
    # conexion.autocommit = False # esto directamente no deberia estar
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("Maria", "Esparza", "mesparza@gmail.com")
    cursor.execute(sentencia, valores)
    conexion.commit() # hacemos el commit manualmente
    print("Termina la transacción")
except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo rollback: {e}")
finally:
    conexion.close()