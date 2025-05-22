import psycopg2 # esto es para poder conectar a Postgre

conexion = psycopg2.connect(user="postgres", password="admin", host="127.0.0.1", port="5432", database="test_bd")
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)"
            valores = (
                ("Carlos", "Lara", "Clara@gmail.com"),
                ("Marcos", "Canto", "mcanto@gmail.com"),
                ("Marcelo", "Cuenca", "cuencaM@gmail.com")
            ) #tupla
            cursor.executemany(sentencia, valores) # de set ejecutamos la sentencia
            registros_insertados = cursor.rowcount #recuperamos todos los registros que seran una lista 
            print(f"los registros insertados son: {registros_insertados}")
except Exception as e:
    print(f"Ocurrio un error{e}")
finally:        
    conexion.close()
