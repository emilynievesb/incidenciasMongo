# API con Endpoints

Este es un repositorio de una API utilizando Node.js, Express, MongoDB, dotenv y YUP. También se utiliza nodemon para facilitar el reinicio automático del servidor durante el desarrollo.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- Node.js: https://nodejs.org
- MongoDB: https://mongodb.org

## Configuración

1.  Clona este repositorio en tu máquina local.
1.  Abre una terminal en la carpeta raíz del proyecto.
1.  Ejecuta el siguiente comando para instalar las dependencias necesarias:

        npm install

1.  Crea un archivo .env en la carpeta raíz del proyecto y agrega las siguientes variables de entorno:

        MY_CONFIG={"user":"admin","password":"admin123","database": "db_incidencias_campus"}
        MY_SERVER={"hostname":"127.20.30.1", "port":5005}
        JWT_PRIVATE_KEY="claves3cret4"

    ###### Asegurate de cambiar NOMBRE_DB y demás configuraciones según tus necesidades

## Ejecución

Para ejecutar correctamente el servidor debes asegurarte de tener `nodemon`, ya teniendo esta dependencia, solo escribes en la consola:

        npm run dev

## Autorización

Para ejecutar correctamente los endpoints, debes obtener el token de cada tabla antes de hacer la consulta, por lo que en el apartado de los endpoints dejaremos escrita la url a ejecutar antes, y debes copiar el token en el header de autorización.

## Endpoints

Para este proyecto se desarrollaron los siguiente endpoints diseñados para manipular la base de datos esperando los parametros por el body de la petición.

RECUERDA QUE LA IP DEL SERVIDOR SERÁ LA CORRESPONDIENTE EN EL ARCHIVO `.env` descrita en el `hostname`.

Los datos acontinuación son netamente ejemplos de lo que podrían contener los datos de entrada.

1.  Agregar incidencias

    - Authorization: `http://127.20.20.1:5000/api/token/incidencia`
    - URL: `http://127.20.30.1:5005/api/post/agregarInsidencia`
    - Método: `POST`
    - Datos de entrada (body):
      ```
      {
            "trainer":3,
            "idEquipo":30,
            "idCategoriaIncidencia":1,
            "idTipoInsidencia":3,
            "descripcion":"Equipo dañado",
            "fechaIncidencia":"2023-06-10"
      }
      ```
    - Datos de salida:

            "Incidencia agregada con éxito"

1.  Agregar equipos

    - Authorization: `http://127.20.20.1:5000/api/token/equipo`
    - URL: `http://127.20.30.1:5005/api/post/agregarEquipo`
    - Método: `POST`
    - Datos de entrada (body):
      ```
      {
          "idTipoEquipo":3,
          "serialEquipo":"TCCO22",
          "idSala":4
      }
      ```
    - Datos de salida:

            "Equipo agregado con éxito"

1.  Agregar trainers

    - Authorization: `http://127.20.20.1:5000/api/token/trainer`
    - URL: `http://127.20.30.1:5005/api/post/agregarEquipo`
    - Método: `POST`
    - Datos de entrada (body):

      ```
        {
            "nombre":"Juan",
            "emailPersonal":"juan@gmail.com",
            "emailCorporativo":"juan1@gmail.com",
            "telefonoMovil":3164444666,
            "telfonoResidencia":6076666655,
            "telefonoEmpresa":6077766655,
            "telefonoMovilEmpresa":3164444555
        }
      ```

    - Datos de salida:

            "Trainer agregado con éxito"

1.  Obtener trainer

    - Authorization: `http://127.20.20.1:5000/api/token/trainer`
    - URL: `http://127.20.30.1:5005/api/get/obtenerTrainer?id=1`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        {
            "_id": "64eaa664ae4d54e776491a39",
            "id_trainer": 1,
            "nombre_trainer": "Miguel",
            "email_personal": "miguel@gmail.com",
            "email_corporativo": "miguel2@gmail.com",
            "telefono_movil": "3111111100",
            "telefono_residencia": "3111111100",
            "telefono_empresa": "3111111100",
            "telefono_movil_empresarial": "3111111100"
        }
      ```

1.  Obtener trainers

    - Authorization: `http://127.20.20.1:5000/api/token/trainer`
    - URL: `http://127.20.30.1:5005/api/get/obtenerTrainers`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        [
            {
                "_id": "64eaa664ae4d54e776491a39",
                "id_trainer": 1,
                "nombre_trainer": "Miguel",
                "email_personal": "miguel@gmail.com",
                "email_corporativo": "miguel2@gmail.com",
                "telefono_movil": "3111111100",
                "telefono_residencia": "3111111100",
                "telefono_empresa": "3111111100",
                "telefono_movil_empresarial": "3111111100"
            },
            {
                "_id": "64eaa664ae4d54e776491a3a",
                "id_trainer": 2,
                "nombre_trainer": "Jholver",
                "email_personal": "jholver@gmail.com",
                "email_corporativo": "jholver2@gmail.com",
                "telefono_movil": "3111111100",
                "telefono_residencia": "3111111100",
                "telefono_empresa": "3111111100",
                "telefono_movil_empresarial": "3111111100"
            },
            {
                "_id": "64eaa664ae4d54e776491a3b",
                "id_trainer": 3,
                "nombre_trainer": "Vermen",
                "email_personal": "vermen@gmail.com",
                "email_corporativo": "vermen2@gmail.com",
                "telefono_movil": "3111111100",
                "telefono_residencia": "3111111100",
                "telefono_empresa": "3111111100",
                "telefono_movil_empresarial": "3111111100"
            },
            {
                "_id": "64eaa664ae4d54e776491a3d",
                "id_trainer": 5,
                "nombre_trainer": "Carlos",
                "email_personal": "carlos@gmail.com",
                "email_corporativo": "carlos2@gmail.com",
                "telefono_movil": "3111111100",
                "telefono_residencia": "3111111100",
                "telefono_empresa": "3111111100",
                "telefono_movil_empresarial": "3111111100"
            },
            {
                "_id": "64eaa664ae4d54e776491a3c",
                "id_trainer": 4,
                "nombre_trainer": "Roy",
                "email_personal": "roy@gmail.com",
                "email_corporativo": "roy2@gmail.com",
                "telefono_movil": "3111111100",
                "telefono_residencia": "3111111100",
                "telefono_empresa": "3111111100",
                "telefono_movil_empresarial": "3111111100"
            }
        ]
      ```

1.  Obtener equipo

    - Authorization: `http://127.20.20.1:5000/api/token/equipo`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEquipo?id=1`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        [
            {
                "id_equipo": 1,
                "serial_equipo": "CPSP001",
                "tipo_equipo": "Computador",
                "sala": "Sputnik"
            }
        ]
      ```

1.  Obtener equipos

    - Authorization: `http://127.20.20.1:5000/api/token/equipo`
    - URL: `http://127.20.30.1:5005/api/get/obtenerEquipos`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        [
            {
                "id_equipo": 5,
                "serial_equipo": "CPSP005",
                "tipo_equipo": "Computador",
                "sala": "Sputnik"
            },
            {
                "id_equipo": 2,
                "serial_equipo": "CPSP002",
                "tipo_equipo": "Computador",
                "sala": "Sputnik"
            },
            {
                "id_equipo": 26,
                "serial_equipo": "CPAP006",
                "tipo_equipo": "Computador",
                "sala": "Apolo"
            },
            {
                "id_equipo": 10,
                "serial_equipo": "CPSP010",
                "tipo_equipo": "Computador",
                "sala": "Sputnik"
            }
        ]
      ```

1.  Obtener incidencia

    - Authorization: `http://127.20.20.1:5000/api/token/incidencia`
    - URL: `http://127.20.30.1:5005/api/get/obtenerIncidencia?id=1`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        {
            "id_incidencia": 1,
            "descripcion": "Incidencia prueba",
            "fecha_incidencia": "2023-07-10T00:00:00.000Z",
            "trainer": "Miguel",
            "equipo": "CPSP001",
            "categoria_incidencia": "Hardware",
            "tipo_incidencia": "Leve"
        }
      ```

1.  Obtener incidencias

    - Authorization: `http://127.20.20.1:5000/api/token/incidencia`
    - URL: `http://127.20.30.1:5005/api/get/obtenerIncidencias`
    - Método: `GET`
    - Datos de entrada (body): Ninguno
    - Datos de salida:

      ```
        [
            {
                "id_incidencia": 6,
                "descripcion": "Incidencia prueba",
                "fecha_incidencia": "2023-07-10T00:00:00.000Z",
                "trainer": "Jholver",
                "equipo": "CPSP006",
                "categoria_incidencia": "Hardware",
                "tipo_incidencia": "Leve"
            },
            {
                "id_incidencia": 1,
                "descripcion": "Incidencia prueba",
                "fecha_incidencia": "2023-07-10T00:00:00.000Z",
                "trainer": "Miguel",
                "equipo": "CPSP001",
                "categoria_incidencia": "Hardware",
                "tipo_incidencia": "Leve"
            },
            {
                "id_incidencia": 2,
                "descripcion": "Incidencia prueba",
                "fecha_incidencia": "2023-07-10T00:00:00.000Z",
                "trainer": "Miguel",
                "equipo": "CPSP002",
                "categoria_incidencia": "Hardware",
                "tipo_incidencia": "Leve"
            },
            {
                "id_incidencia": 3,
                "descripcion": "Incidencia prueba",
                "fecha_incidencia": "2023-07-10T00:00:00.000Z",
                "trainer": "Miguel",
                "equipo": "CPSP003",
                "categoria_incidencia": "Software",
                "tipo_incidencia": "Moderada"
            }
        ]
      ```

## Validación de datos (DTO)

- Se realizó la validación de datos a través de la librería `YUP`. La librería Yup permite definir un esquema que describe la forma en que los datos deben ser validados.

- Al utilizar Yup para los DTO, puedes definir un esquema que especifique las reglas de validación que se deben aplicar a cada campo del DTO. Estas reglas pueden incluir validaciones como requerido, tipo de dato, longitud mínima o máxima, formato específico, entre otros.

- Un ejemplo de uno de los esquemas que se pueden crear es este:

  ```
  const addProductValidator = async (req, res, next) => {
    try {
      const productSchema = object({
        nombre: string()
          .strict()
          .matches(/^[a-z A-Z]+$/, "Is not in correct format")
          .required(),
        descripcion: string().optional(),
        estado: number().max(1).required(),
        created_by: number().nullable().optional(),
        update_by: number().nullable().optional(),
        created_at: date().nullable().optional(),
        updated_at: date().nullable().optional(),
        deleted_at: date().nullable().optional(),
      });
      await productSchema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ status: "fail", message: error.errors });
    }
  };
  ```

- Se creó un middleware, donde se valida la composición de los datos dentro de la request. Se instancia un objeto que describe el esquema de la request y se valida el body según lo escrito en el esquema. El `validate()` es una promesa que generas una excepción en caso de no pasar la validación, y dentro del catch se hace la validación de excepciones, respondiendo un status `400` y un mensaje de error. Si la request sale OK, se ejecuta un `next`, que le avisa a express de debe ejecutar el siguiente middleware (en este caso, el endpoint o servicio que genera y responde a una consulta).

#### Autora: Emily Nieves
