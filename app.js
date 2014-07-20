// Variables
var express = require('express');
var app = express();

// Port
app.listen(3200);

// Run NodeJS app
app.get('/', function(req, res) {

	res.end('Servidor ON!!!');
});