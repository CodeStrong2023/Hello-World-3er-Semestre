import psycopg2 # Esto es para poder conectarnos a Postgre

conexion = psycopg2.connect(user = 'postgres', password = 'admin', host = '127.0.0.1', port = '5432', database = 'test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "DELETE FROM persona WHERE id_persona=%s"
            entrada = input("Digite el número de registro a eliminar (separados por coma): ")
            valores = (entrada,) # es una tupla de valores
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentencia
            registros_eliminados = cursor.rowcount
            print(f"Los registros eliminados son: {registros_eliminados}")

except Exception as e:
    print(f"Ocurrió un error: {e}")
finally:
    conexion.close()