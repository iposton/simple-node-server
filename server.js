var express = require('express');

app = express();

app.get('/', function(req, res) {
	var name = 'Ian';
	res.json('My name is ' + name);
});

app.listen(3000, function(err) {
	if(err) throw err;
	console.log('Server running on port 3000');
});