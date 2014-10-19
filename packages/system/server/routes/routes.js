'use strict';

module.exports = function(app, io, db){
	
	app.get('/', function(req, res){
		res.render('index');
	});


	io.on('connection', function(socket){
		console.log('novo usuário conectado : routes');
	});

};
