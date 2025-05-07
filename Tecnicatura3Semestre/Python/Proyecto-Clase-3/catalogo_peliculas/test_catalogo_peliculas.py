from dominio.pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas

def mostrar_menu():
    print('''
======= CATÁLOGO DE PELÍCULAS =======
1. Agregar película
2. Listar películas
3. Eliminar archivo de películas
4. Salir
''')

while True:
    mostrar_menu()
    opcion = input('Elige una opción (1-4): ')

    if opcion == '1':
        nombre = input('Ingrese el nombre de la película: ')
        pelicula = Pelicula(nombre)
        CatalogoPeliculas.agregar_pelicula(pelicula)
        print(f'Película "{nombre}" agregada correctamente.\n')

    elif opcion == '2':
        CatalogoPeliculas.listar_peliculas()

    elif opcion == '3':
        confirmacion = input('¿Estás seguro que quieres eliminar el archivo? (s/n): ')
        if confirmacion.lower() == 's':
            CatalogoPeliculas.eliminar()

    elif opcion == '4':
        print('¡Hasta luego!')
        break

    else:
        print('Opción inválida. Intenta de nuevo.\n')
