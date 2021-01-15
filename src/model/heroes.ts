import {Schema, model } from 'mongoose'
// Definimos el type o interfase en este caso

export interface Hero {
    id: number;
    name: string;
    salary: number;
  }

// Definimos el Schema
const heroSchema = new Schema({
    id: {
        type: Number,
        unique: true  // useCreateIndex: true en la conexión para que se cree el índice único
    },
    name: String,
    salary: Number,
})

// La colección de la BD: vehiculos (Plural siempre)
export const Heroes = model('heroes', heroSchema)