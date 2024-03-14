# 2º Proyecto de Red Social: Backend y FrontEnd

El presente repositorio quiere mostrar el aspecto que tendría una red social básica, presentando la opción de registrarse a los nuevos usuarios, conectarse y desconectarse a los ya registrados, escribir temas nuevos y contestar a los temas existentes. Asimismo, existen guardas, que evitan la entrada de uauarios no autorizados, como por ejemplo, personas sin registrar o usuarios sin el rango de administrador.
Por otra parte, la web redirecciona al usuario al inicio tanto después del registro como del logueo.

## Recursos utilizados

Para el backend se ha dispuesto MongoDB, de manera que los datos (usuarios, contraseñas, cuentas de correo, comentarios...) se almacenan allí. Para proteger esos datos, existe un secreto, guardado en un archivo .env. Por otra parte, hay elementos en el frontend que limitan el acceso a datos sensibles, como el grado de administrador o las guardass, que disponen de código propio.
Asimismo, se has usado diversos paquetes para la elaboración del back, como nodemon, sequelize, mysql2, express, mongoose, bcryptjs, jsonwebtoken, dotenv y CORS.
Respecto al frontend, se ha utiliazdo redux y react, principalmente. Dentro de estos, se han instalado diversos paquetes, como react-router-dom, axios o @reduxjs/toolkit react-redux
Finalmente, también se utilizado el software Postman par hacer pruebas con el backend (como el registro de usuarios) antes de conectar back y front.

## Funcionalidades

La aplicación generada debería mostrar de inicio al arrancar, mostrando la posibilidad de hacer login y de resgitsrarse. Al pinchar en cualquiera de ambos, se deben pedir credenciales, como dirección de correo válida y password, mostradndo para ello cuadros para escribir y un botón. Tras completarlo con éxito, se redireccionará al comienzo. En caso de no rellenar adecuadamente los citados cuadros de diálogo, se mostrará un mensaje y se impedirá el acceso. Para ello, se escribe un código ad hoc.

Una vez logueado el usuario, debe poder escribir nuevos posts o mensajes en su perfil, ási como acceder a los datos del mismo. Por otra parte, dicho usuario deebería tener la capacidad de ver los posts que hayan escrito otros usuarios, así como interactuar con ellos (por ejemplo, contestando). Todo ello tiene su código relacionado, tanto en redux como en react y la parte correspondiente de backend.

Finalmente, existe una parte llamada NotFound, para cuando no es posible encontrar aquello que se busca.
