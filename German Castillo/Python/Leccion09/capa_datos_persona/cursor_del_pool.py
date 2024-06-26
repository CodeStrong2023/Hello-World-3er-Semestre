from logger_base import log
from Conexion import Conexion

class CursorDelPool:
    def __init__(self):
        self._Conexion = None
        self._cursor = None

    def __enter__(self):
        log.debug('Inicio del métodos with y __enter__')
        self._Conexion = Conexion.obtenerConexion()
        self._cursor = self._Conexion.cursor()
        return self._cursor

    def __exit__(self, tipo_exception, valor_exception, detalle_exception):
        log.debug('Se ejecuta el método exit')
        if valor_exception:
            self._Conexion.rollback()
            log.debug(f'Ocurrió una excepción: {valor_exception}')
        else:
            self._Conexion.commit()
            log.debug('Commit de la transacción')
        self._cursor.close()
        Conexion.liberarConexion(self._Conexion)

if __name__ == '__main__':
    with CursorDelPool() as cursor:
        log.debug('Dentro del bloque with')
        cursor.execute('SELECT * FROM persona')
        log.debug(cursor.fetchall())