'use strict';

var appPath = process.cwd();
var util = require(appPath+'/lib/util');


module.exports = function(app, db) {

    //Express settings
    require(appPath + '/config/express')(app, db);

    function bootstrapPackages() {
        // Bootstrap models
        util.walk(appPath + '/packages', '*', ['public', 'controllers', 'models', 'tests'], function(path) {
            require(path)(app, db);
        });
    }

    bootstrapPackages();


};
