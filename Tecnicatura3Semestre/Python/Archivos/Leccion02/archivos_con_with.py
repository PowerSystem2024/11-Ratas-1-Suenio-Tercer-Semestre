from ManejoArchivos import ManejoArchivos

with open("Archivos/Leccion02/prueba.txt", "r", encoding="utf-8") as archivo:
    # lo que hace with es abrir el archivo y cerrarlo automáticamente al finalizar el bloque
    # read() lee el archivo completo
    contenido = archivo.read()
    print(contenido) 
    # with también permite abrir el archivo en modo escritura, pero sin borrar el contenido existente
    # los métodos son __enter__ y __exit__

with ManejoArchivos("Archivos/Leccion02/prueba.txt") as archivo2:
    contenido = archivo2.nombre_archivo.read()
    print(contenido) 