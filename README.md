MOVIES REST API WITH NODE AND EXPRESS
--------------------------------------------------------------------------------------------------------------------

API Rest desarrollada con Node y Express.

Se utilizan librerias node-postgres y knex para conectarse y almacenar datos en un servidor PostgreSQL.

También se utilizan las librerías cors, dotenv y nodemon.

Dependencias en archivo package.json:

```

  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^8.1.0",
    "express": "^4.17.1",
    "knex": "^0.19.5",
    "pg": "^7.12.1"
  },
  "devDependencies": {
    "nodemon": "^1.19.2"
  }

```

--------------------------------------------------------------------------------------------------------------------

Esta aplicación contiene servicios Rest que permiten manipular información de películas y que son utilizados
por la aplicación "IONIC MOVIES APP", desarrollada con Ionic 4.

**IONIC MOVIES APP**

https://github.com/edgar-code-repository/ionic-movies-app

--------------------------------------------------------------------------------------------------------------------

**Ejecución de API con Postman**

**Pantalla que muestra retorno de endpoint genres:**

![Screenshot Genres](screenshots/postman-node-rest-genres.png)

**Pantalla que muestra retorno de endpoint movies by genre con paginación y ordenamiento:**

![Screenshot MoviesByGenre](screenshots/postman-node-movies-pagination.png)

**Pantalla que muestra endpoint que permite recuperar movie by id:**

![Screenshot MovieById](screenshots/postman-node-movie-by-id.png)

**Pantalla que muestra endpoint que permite agregar movies by genre:**

![Screenshot PostMovie](screenshots/postman-node-movies-post.png)

--------------------------------------------------------------------------------------------------------------------