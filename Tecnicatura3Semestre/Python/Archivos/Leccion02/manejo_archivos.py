try:
  # Para que funcione la ruta, debemos estar en la carpeta Python 
  archivo = open("Archivos/Leccion02/prueba.txt", "w", encoding="utf-8")
  # open es un método que abre un archivo
  # w es el modo de apertura, en este caso escritura
  # encoding es la codificación del archivo, para que no haya problemas con caracteres especiales
  # el archivo se crea si no existe
  # y se sobreescribe si ya existe
  archivo.write("Probamos manejo de archivos en Python\n") 
  archivo.write(":)\n") 
  archivo.write("Acción, Ejecución\n") 
  # write es un método que escribe en el archivo
except Exception as e:
  print(f"Error al abrir el archivo: {type (e)}")
finally:
  archivo.close()
  # close es un método que cierra el archivo

# Si quisieramos seguir escribiendo en el archivo, necesitamos volver a abrirlo. De lo contrario daría error.