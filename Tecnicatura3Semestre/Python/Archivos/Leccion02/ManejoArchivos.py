class ManejoArchivos:
    def __init__(self, nombre_archivo):
        self.nombre_archivo = nombre_archivo
    def __enter__(self):
        print(f"Abriendo el archivo".center(50, "-"))
        self.nombre_archivo = open(self.nombre_archivo, 'r', encoding='utf-8')
        return self
    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Cerrando el archivo".center(50, "-"))
        self.nombre_archivo.close()