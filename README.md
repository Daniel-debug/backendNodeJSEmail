# backendNodeJSEmail
Envio de correos NodeJs con nodemailer y Ejercicio ADN

## Iniciar el proyecto
Para iniciar el proyecto se puede hacer con el comando 
"node app.js" tambien es posible iniciarlo con 
"npm start" (el proyecto tiene la libreria nodemon)


# Instalacion Local

### 1.- Creacion de la base de datos
La api se conecta a una base de datos Mongo db en modo LOCAL

La base de datos necesaria para el proyecto es Mongo DB 
Solo instalando el motor de la bd es suficiente 
https://www.mongodb.com/try/download/community

Iniciando el proyecto se crea automaticamente la base de datos

### 2.- Cadenas de conexion archivo .env
Todas las variables de conexion estan en el archivo ".env",
El puerto donde se lanzara la aplicación nodeJS es el puerto "8080", 
si necesitan otro puerto como el "3000" favor de cambiarlo en este arhivo
de configuración. 

### 2.- Documentación apis en producción, la dirección apunta a una instancia EC2 en AWS
https://documenter.getpostman.com/view/2447599/SzzkbcJH?version=latest
