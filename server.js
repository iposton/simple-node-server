var express = require('express');

app = express();

app.listen(3000, function(err) {
	if(err) throw err;
	console.log('Server running on port 3000');
});