import os

class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt'

    @staticmethod
    def agregar_pelicula(pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding='utf-8') as archivo:
            archivo.write(str(pelicula) + '\n')

    @staticmethod
    def listar_peliculas():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            with open(CatalogoPeliculas.ruta_archivo, 'r', encoding='utf-8') as archivo:
                print('Películas en el catálogo:')
                print(archivo.read())
        else:
            print('No existe el archivo del catálogo.')

    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print('Archivo eliminado.')
        else:
            print('No existe el archivo para eliminar.')