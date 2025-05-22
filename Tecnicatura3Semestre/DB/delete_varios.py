import psycopg2 # esto es para poder conectar a Postgre

conexion = psycopg2.connect(user="postgres", password="admin", host="127.0.0.1", port="5432", database="test_bd")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "DELETE FROM persona WHERE id_persona=%s"
            entrada = input("Digite los numero de registro a eliminar(separados por coma): ")
            valores = (tuple(entrada.split(", ")),)
            cursor.execute(sentencia, valores)
            registros_eliminados = cursor.rowcount
            print(f"los registros eliminados son: {registros_eliminados}")
except Exception as e:
    print(f"Ocurrio un error{e}")
finally:        
    conexion.close()
