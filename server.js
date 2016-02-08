var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
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