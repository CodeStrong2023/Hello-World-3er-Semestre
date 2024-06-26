import psycopg2 as bd # esto es para poder conectarnos a Postgre

conexion = bd.connect(user="postgres", password="admin", host="127.0.0.1", database="test_bd")
try:
    conexion.autocommit = False # esto directamente lo deberia estar, inicia la transaccion
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("Jorge", "Prol", "jorgeprol@gmail.com")
    cursor.execute(sentencia, valores)

    sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    valores = ("Juan Carlos", "Perez", 'jcperez@gmail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit() # hacemos el commit manualmente, se cierra la transaccion
    print("Termina la transacción")
except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo rollback: {e}")
finally:
    conexion.close()