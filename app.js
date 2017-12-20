//link to movie file to use 'get function'
const movie = require("./movie");
//Array of movies to search for
var threeFavoriteMovies = ["Alien", "Logan", "Star Wars"];
//runs through threeFavoriteMovies array
//calls the get function in the 'movie.js' file 
//for each element(film) in the array
threeFavoriteMovies.forEach(function(film){
	movie(film);

});