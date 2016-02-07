var express = require('express');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');

app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');



// app.get('/', function(req, res) {
// 	var name = 'Ian';
// 	res.json('My name is ' + name);
// });

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(3000, function(err) {
	if(err) throw err;
	console.log('Server running on port 3000');
});