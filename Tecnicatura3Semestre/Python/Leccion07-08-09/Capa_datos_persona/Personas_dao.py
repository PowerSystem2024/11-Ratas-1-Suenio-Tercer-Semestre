from asyncio import log
import conexion as Conexion
import Persona as Persona

class PersonaDAO:
    """
    DAO significa: Data access Object
    CRUD Significa:
                    Create -> Insertar
                    read   -> Seleccionar
                    Update -> Actualizar
                    Delete -> Eliminar
    """
    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"
    _INSERTAR = "INSERT INTO persona(nombre, aapellido,email) VALUES (%s, %s, %s)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"
    
    #Definimos los metodos de clase
    @classmethod
    def seleccionar(cls):
        # with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fechall()
                personas = []
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    personas.append(persona)
                return personas
            
    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email)
                cursor.execute(cls._INSERTAR, valores)
                log.debug(f"Persona insertada: {persona}")
                return cursor.rowcount
    
    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona.apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f"Persona actualizada: {persona}")
                return cursor.rowcount
    @classmethod
    def eliminar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.id_persona,)
                cursor.execute(cls._ELIMINAR, valores)
                log.debug(f"los objetos eliminados son: {persona}")
                return cursor.rowcount
                                
if __name__ == "__main__":
    #eliminar un registro
    #persona1 = Persona(id_persona=8)
    #personas_eliminadas = PersonaDAO.eliminar(persona1)
    #log.debug(f"Personas eliminadas: {personas_eliminadas}")
    
    
    #actualizar un registro
    #persona1 = Persona(1, "Juan Jose", "Pena", "jjpena@gmail.com")
    #personas_actualizadas = PersonaDAO.actualizar(persona1)
    #log.debug(f"Personas actualizadas: {personas_actualizadas}")
    
    #insertar un registro
    #persona1 = Persona(nombre="homero", apellido="ramos", email="omeroR@mail.com")
    #personas_insertadas = PersonaDAO.insertar(persona1)
    #log.debug(f"Persona insertadas: {personas_insertadas}")
    
    
    #seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)
        
    