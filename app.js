const movie = require("./movie");
var threeFavoriteMovies = ["Alien", "Logan", "Star Wars"];
threeFavoriteMovies.forEach(function(film){
  movie(film);
  
});