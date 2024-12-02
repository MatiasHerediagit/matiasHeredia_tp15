const peliculas = require('./peliculas')//Importo el array de peliculas con un require

peliculas.forEach(pelicula => { //utilizo un for each para mostrar el contenido del array a traves de la terminal
console.log(`Titulo: ${pelicula.titulo}`); 
console.log(`ID: ${pelicula.id}`); 
console.log(`Rating: ${pelicula.rating}`);  
console.log(`Premios: ${pelicula.awards}`);
console.log(`Duración: ${pelicula.length} minutos`); 
console.log(`Precio: $${pelicula.price}`); 
console.log(`Género: ${pelicula.genre}`); 
console.log('______________');  // Con esto separo cada una de las peliculas en la terminal
});