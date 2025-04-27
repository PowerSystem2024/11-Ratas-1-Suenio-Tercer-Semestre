from ManejoArchivos import ManejoArchivos
#manejo de contecto with: sintaxis simplificada, abre y cierrael archivo
#with open("prueba.txt", "r", encoding="utf8") as archivo:
    #print(archivo.real ())
    
#no hace falta ni el try, ni el finally
#en el contexto de with lo que se ejecuta de manera automatica 
#utiliza diferentes metodos __enter__ este es ek qye abre
#ahora el siguiente metodo es el que cierra: __exit__

with ManejoArchivos ("prueba.txt") as archivo:
    print(archivo.read())
