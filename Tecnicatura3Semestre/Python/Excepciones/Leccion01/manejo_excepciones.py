from NumerosIgualesException import NumerosIgualesException

#El manejo de excepciones es una parte importante de la programación en Python. Permite manejar errores de manera controlada y evitar que el programa se detenga inesperadamente.

try:
  10/0
except Exception as e:
  print(f'El error es de tipo: {e}')
print('----------------------') 
#El bloque try-except contiene una división por cero, lo que generará una excepción (error). El bloque except captura la excepción y muestra un mensaje indicando el tipo de error.

#10/0

#Si ejecutamos la división sin el bloque try-except, el programa se detendrá y mostrará un mensaje de error. Esto es lo que queremos evitar con el manejo de excepciones.
#El bloque try-except permite manejar errores de manera controlada y evitar que el programa se detenga inesperadamente.
#Por lo general usamos Exception como tipo de error (por ser la clase padre, solo por debajo de BaseException), pero podemos usar tipos de errores específicos como ZeroDivisionError, ValueError, TypeError, etc.

resultado = None
a = 10
b = 10

try:
  if 10 == 10:
    raise NumerosIgualesException('Los números son iguales')
  #Raise se utiliza para lanzar una excepción de forma manual. En este caso, estamos lanzando una excepción personalizada llamada NumerosIgualesException si los números son iguales.
  resultado = a / b
except ZeroDivisionError as e:
  print(f'Error: No se puede dividir por cero. Detalles del error: {type(e)}')
except Exception as e:
  print(f'Error: {type (e)}')
else:
  print('La división se realizó correctamente.')
finally:
  print('Fin del bloque try-except.')

print(f'El resultado es: {resultado}')
#En este caso, estamos capturando específicamente el error de división por cero (ZeroDivisionError) y mostrando un mensaje personalizado. Esto es útil para proporcionar información más clara al usuario o para realizar acciones específicas en función del tipo de error.

#La variable resultado se inicializa como None antes del bloque try-except. Si ocurre un error, la variable resultado no se asignará y mostrará su valor inicial (None) en el bloque except. Esto es útil para evitar que el programa se detenga y para manejar el error de manera controlada.

#Las excepciones pueden tener varias excepciones, y podemos capturarlas de manera específica o general. También podemos usar la cláusula else para ejecutar código si no se produce ninguna excepción en el bloque try.

#El bloque else se ejecuta si no se produce ninguna excepción en el bloque try. Esto es útil para realizar acciones que solo deben ejecutarse si no hay errores.

#El bloque finally se ejecuta siempre, independientemente de si se produjo una excepción o no. Esto es útil para realizar tareas de limpieza o liberar recursos.