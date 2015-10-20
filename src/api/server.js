// Require our dependencies
var express = require('express');

// Create an express instance and set a port variable
var app = express();

app.use("/", express.static('../../public/'));

var server = app.listen(3000, function () {
	console.log('Application running');
});
