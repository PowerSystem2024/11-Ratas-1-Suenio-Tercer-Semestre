from numerosigualesException import NumerosigualesExcwption

resultado = None

try:
    a=int(input("Digite el primer numero: "))
    b=int(input("Digite el primer numero: "))
    if a == b:
        raise NumerosigualesExcwption("son números iguales")
    resultado = a/b  #modificamos(10/0)
except TypeError as e:
    print(f"TypeError - Ocurrió un error: {type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrió un error: {type(e)}") #no da informacion si ponemos un divisor que sea par
except Exception as e:
    print(f"Exception - Ocurrió un error: {type(e)}")
else:
    print(f"El resultado es : {resultado}")
finally: # Siempre se va a ejecutar
    print("ejecución de este bloque finally")
    
print(f"El resultado es: {resultado}")
print("seguimos...")
