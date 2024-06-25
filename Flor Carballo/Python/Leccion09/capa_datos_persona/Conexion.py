import sys
from psycopg2 import pool
from logger_base import log


class Conexion:
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST = '127.0.0.1'
    _MIN_CON = 1
    _MAX_CON = 5
    _pool = None


    @classmethod
    def obtenerConexion(cls):
        Conexion = cls.obtenerPool().getconn()
        log.debug(f'Conexion obtenida del pool: {Conexion}')
        return Conexion



    @classmethod
    def obtenerCursor(cls):
        pass

    @classmethod
    def obtenerPool(cls):
        if cls._pool is None:
            try:
                cls._pool = pool.SimpleConnectionPool(cls._MIN_CON,
                                                      cls._MAX_CON,
                                                      host=cls._HOST,
                                                      user=cls._USERNAME,
                                                      password=cls._PASSWORD,
                                                      port=cls._DB_PORT,
                                                      database=cls._DATABASE)
                log.debug(f'Creación del pool exitosa: {cls._pool}')
                return cls._pool
            except Exception as e:
                log.error(f'Ocurrió un error al obtener el pool: {e}')
                sys.exit()
        else:
            return cls._pool

if __name__ == '__main__':
    Conexion1 = Conexion.obtenerConexion()
    Conexion2 = Conexion.obtenerConexion()
    Conexion3 = Conexion.obtenerConexion()
    Conexion4 = Conexion.obtenerConexion()
    Conexion5 = Conexion.obtenerConexion()

