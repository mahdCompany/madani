var connect = require('connect'),
	http = require('http');

var config = require('./config')();

var app = connect()
	.use(function (req, res, next) {
		console.log("That's my first middleware");
		next();
	})
	.use(function (req, res, next) {
		console.log("That's my second middleware");
		next();
	})
	.use(function (req, res, next) {
		console.log("end");
		res.end("hello world");
	});

http.createServer(app).listen(config.port, function () {
	console.log('Express server listening on port ' + config.port);
});
