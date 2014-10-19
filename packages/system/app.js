'use strict';
var express = require('express');

module.exports = function(app, db){

	app.set('views', __dirname + '/server/views');
  	app.use(express.static(__dirname + '/public/assets'));

};

