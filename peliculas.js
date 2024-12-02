/*Este archivo sera un modulo que contendra una lista con algunas de mis 
peliculas favoritas*/
// Array de objetos literales que contiene la información de nuestras películas favoritas
const peliculas = [
    {
        titulo:'El robo del siglo',
        id: "Pelicula 1", 
        rating: 8.5, 
        awards: 3, 
        length: 120, 
        price: 20000, 
        genre: 'Acción' 
    },
    {
        titulo:'Un novio para mi mujer',
        id: "Pelicula 2",
        rating: 7,
        awards: 2,
        length: 95,
        price: 15000,
        genre: 'Comedia'
    },
    {
        titulo:'El secreto de sus ojos',
        id: "Pelicula 3",
        rating: 9.0,
        awards: 5,
        length: 180,
        price: 25000,
        genre: 'Aventuras'
    },
    {
        titulo:'Nueve reinas',
        id: "Pelicula 4",
        rating: 8.0,
        awards: 4,
        length: 130,
        price: 12000,
        genre: 'Suspenso'
    },
    {
        titulo:'Metegol',
        id: "Pelicula 5",
        rating: 10,
        awards: 1,
        length: 115,
        price: 9000,
        genre: 'Animación'
    }
];
//Uso un module exports para exportar este archivo y poder usarlo en app.js
module.exports = peliculas;
