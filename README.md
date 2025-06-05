📦 Week 3 – Controllers and Models

Este proyecto es una práctica básica que demuestra cómo conectar un backend con MongoDB usando el patrón de diseño Model-View-Controller (MVC). Se enfoca en el almacenamiento de datos en Mongo de manera organizada y estructurada.

🧠 Descripción

La finalidad del proyecto es implementar modelos y controladores para guardar información en una base de datos MongoDB. Está hecho con fines educativos como parte de la tercera semana del curso/práctica de desarrollo backend.

🛠️ Tecnologías Usadas

Node.js

Express.js

MongoDB

Mongoose

JavaScript (ES6)

🗃️ Estructura del Proyecto

Week3-Controllers-and-models/
├── controllers/
│   └── exampleController.js
├── models/
│   └── exampleModel.js
├── routes/
│   └── exampleRoutes.js
├── server.js
├── .env
└── package.json

⚙️ Instrucciones de Instalación y Ejecución

Clona este repositorio:

git clone https://github.com/TU_USUARIO/Week3-Controllers-and-models.git

Entra al proyecto:

cd Week3-Controllers-and-models

Instala las dependencias:

npm install

Crea un archivo .env con tu URI de MongoDB:

MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/db

Inicia el servidor:

node server.js

📸 Capturas (si se desea agregar)

Puedes subir capturas de Postman, consola o el response del servidor al hacer peticiones POST/GET.

🤓 Estado del Proyecto

✅ Funcional – Conecta correctamente a MongoDB y permite operaciones básicas desde los controladores.

📌 Limitado – No incluye validación compleja, autenticación ni frontend.

✍️ Autor

Alan Jesús Chávez González – Práctica educativa como parte del aprendizaje de controladores y modelos en Node.js + Mongo.
