
archivo = open("Archivos/Leccion02/prueba.txt", "r", encoding="utf-8")
archivo.read()
# open es el método que abre un archivo
# r es el modo de apertura, en este caso lectura, osea que no se puede escribir en el archivo ni se crea si no existe
# read es un método que lee el archivo completo

# los otros métodos aparte de read son:
# T: para abrir el archivo en modo texto, pero sin codificación
# A: para abrir el archivo en modo escritura, pero sin borrar el contenido existente
# W+: para abrir el archivo en modo escritura y lectura
# A+: para abrir el archivo en modo escritura y lectura, pero sin borrar el contenido existente
# R+: para abrir el archivo en modo lectura y escritura, pero sin borrar el contenido existente
# X: para abrir el archivo en modo escritura, pero solo si no existe
# B: para abrir el archivo en modo binario
# U: para abrir el archivo en modo universal, osea que se puede leer y escribir en cualquier formato
# readline: para leer una línea del archivo
# readlines: para leer todas las líneas del archivo y guardarlas en una lista

# Si queremos iterar sobre el archivo, podemos usar un bucle for
for linea in archivo:
    print(linea)
# También podemos usar el método readlines() para leer todas las líneas del archivo. Se imprime una lista con todas las líneas del archivo
# Al ser una lista, podemos acceder a cada línea por su índice
# archivo.readlines()[0] imprime la primera línea del archivo