const request = require('request');
const env = require('./env');


function get(movieTitle) {
	var searchRequest = request('https://www.googleapis.com/customsearch/v1?key=' + env.apiKey + '&cx=' + env.apiId +'&q=' + movieTitle, function(error, response, body){
		//console.log('error:', error);
		//console.log('statusCode:', response & response.statusCode);
		var bodyParsed = JSON.parse(body);
		console.log(bodyParsed.items[0].title);
	});
}
//get();

module.exports = get;