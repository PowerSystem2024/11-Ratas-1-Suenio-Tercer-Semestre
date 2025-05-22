class NumerosIgualesException (Exception):
    """
    Clase personalizada para manejar excepciones de números iguales.
    Hereda de la clase base Exception.
    """
    def __init__(self, mensaje):
        self.message = mensaje