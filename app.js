// AQUI GUARDAMOS LIBRERIAS (imports) - SERVIDOR LOCAL 4000 - 5000 - CONEXION A DB Mongo DB 

// NPM proviene de node que sirve para javaScrip
// 1) npm init -y para que se creen  - "package.json"
// 2) npm i es para instalar las dependencias - "package-lock.json"
// 3) npm i mongoose express cors dotenv para instalar mongoose 
// 4) npm i dontenv : para mandar a llamar el archivo .env

// expres hace el servidor
//     las de abajo son solo el nombre de la variable -- INSTANCIAMOS guardamos la libreria en una variable 
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/reprobados.controllers.js";

// Conectar la base de datos
dotenv.config() //Trae la configuracio de .env
mongoose.connect(process.env.url_db) // Has el proceso de traer el archivo .env y la variable url_db

//Promesa
.then(()=> {
    console.log("Funciono la base")
}) //Se cumple

//Atrapar
.catch((error)=>{
    console.log("No funciono la base", error)
}) // Atrapa el error, no se cumple

// Servidor local 
const app = express();
app.use(cors()) // Da seguridad al servidor 
app.listen(4000, ()=>{
    console.log("Escucha bien, no escucha borroso")
}) // Los servidores se escuchan 

// Una libreria debe ser descargada, importada y llamada

test();
