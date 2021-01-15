import { db } from "../src/database/database";

/*
Para hacer los insert en la base de datos test y colección heroes
*/
db.heroes.drop()
db.heroes.insertMany([
    {
        id: 1,
        name: "Pepe",
        salary: 3000
    },
    {
        id: 2,
        name: "José",
        salary: 2000
    },
    {
        id: 3,
        name: "Juan",
        salary: 1500
    }
])