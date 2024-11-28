import {Schema, model} from "mongoose"; //Varias funciones por eso las llaves

const EsquemaReprobados = new Schema ({
    name: String,
    appepat: String,
    matricula: String,
})

export const ModeloReprobados = new model ("Tabla de reprobados", EsquemaReprobados)

