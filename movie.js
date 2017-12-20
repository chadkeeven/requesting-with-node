//link outside files to movie.js
const request = require('request');
const env = require('./env');

//function that takes in one argument 'movieTitle'
//makes a api request to a custom google search 
//returns a title for each argument passed 
function get(movieTitle) {
	var searchRequest = request('https://www.googleapis.com/customsearch/v1?key=' + env.apiKey + '&cx=' + env.apiId + '&q=' + movieTitle, function(error, response, body) {
		var bodyParsed = JSON.parse(body); //parse body HTML into JSON
		console.log(bodyParsed.items[0].title); //display results to console
	});
}
//allows the get function to be used in other files
module.exports = get;