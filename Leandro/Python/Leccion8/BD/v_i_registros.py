import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user = 'postgres', password = 'admin', host = '127.0.0.1', port = '5432', database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)"
            valores = (
                ("Carlos", "Lara", "carlolara@gmail.com"),
                ("Marcos", "Canto", "mcanto@gmail.com"),
                ("Marcelo", "Cuenca", "cuenca@gmail.com")
            ) # es una tupla de tuplas
            cursor.executemany(sentencia, valores) # de esta manera ejecutamos la sentencia
            # conexion.commit() esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f"Los registros insertados son: {registros_insertados}")


except Exception as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()