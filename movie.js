const request = require('request');
const env = require('./env');
//console.log(env.apiKey);
//console.log(env.apiId);






function get(movieTitle) {
	var searchRequest = request('https://www.googleapis.com/customsearch/v1?key=' + env.apiKey + '&cx=' + env.apiId +'&q=turtle', function(error, response, body){
		console.log('error:', error);
		console.log('statusCode:', response & response.statusCode);
		console.log('body:', JSON.parse(body));
	});
}
get();

module.exports = get;