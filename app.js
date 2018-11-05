var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('<h3>Hello world !!!</h3>');
});

app.get('/say/:msg', (req, res) => {
	
	res.send('<h3>' + req.params.msg + '</h3>')
	
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000');
});