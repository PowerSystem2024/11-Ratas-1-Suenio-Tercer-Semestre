import psycopg2 # esto es para poder conectar a Postgre

conexion = psycopg2.connect(user="postgres", password="admin", host="127.0.0.1", port="5432", database="test_bd")
try:
    with conexion:
        with conexion.cursor() as cursor:
            cursor = conexion.cursor()
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s"
            entrada = input("Digite los id_persona a buscar (separado por coma): ")
            llaves_primarias = (tuple(entrada.split(", ")),)
            cursor.execute(sentencia, llaves_primarias) # de set ejecutamos la sentencia
            registros = cursor.fetchall() #recuperamos todos los registros que seran una lista 
            for registro in registros:
                print(registros)
                
except Exception as e:
    print(f"Ocurrio un error{e}")
finally:        
    conexion.close()
