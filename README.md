# 2º Proyecto de Red Social: Backend y FrontEnd

El presente repositorio quiere mostrar el aspecto que tendría una red social básica, presentando la opción de registrarse a los nuevos usuarios, conectarse y desconectarse a los ya registrados, escribir temas nuevos y contestar a los temas existentes.

## Recursos utilizados

Para el backend se ha dispuesto MongoDB, de manera que los datos (usuarios, contraseñas, cuentas de correo, comentarios...) se alamcenan allí. Para proteger esos datos, existe un secreto, guardado en un archivo .env.
Asimismo, se has usado diversos paquetes para la elaboración del back, como nodemon, sequelize, mysql2, express, mongoose, bcryptjs, jsonwebtoken, dotenv y CORS.

Respecto al frontend, se ha utiliazdo redux y react, principalmente. Dentro de estos, se han instalado diversos paquetes, como react-router-dom, axios o @reduxjs/toolkit react-redux

Finalmente, también se utilizado el software Postman par hacer pruebas con el backend (como el registro de usuarios) antes de conectar back y front.
