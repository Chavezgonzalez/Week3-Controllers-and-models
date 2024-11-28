import { ModeloReprobados } from "../models/reprobados.models.js";

ModeloReprobados.create({
    name: "Alan",
    appepat: "Chavez",
    matricula: "23090678"
})

export const test = ()=>{
    console.log("Llamando al controlador");
}