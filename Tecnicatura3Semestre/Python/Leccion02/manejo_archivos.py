#Declaramos una variable
try:
    archivo = open("prueba.txt", "w", encoding="utf8") #La w es de write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt. \n")
    archivo.write("Los acentos son importantes para las palabras\n")
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write("las letras son:\nr read, \na append anexa, \nw write escribe, \nx crea un archivo")
    archivo.write("\nt esta es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n")
    archivo.write("saludos a todos los alumnos de la tecnicatura\n")
    archivo.write("con esto terminamos")
except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() # con esto se deve cerrar el archivo
#archivo.write("Todo quedo perfecto") <--(este es un error)
