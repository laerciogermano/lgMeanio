'use strict';
var express = require('express');

module.exports = function(app, db){

	// Set views path, template engine and default layout
	app.set('views', __dirname + '/server/views');

  	// Adding robots and humans txt
  	app.use(express.static(__dirname + '/public/assets'));

};

