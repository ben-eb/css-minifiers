'use strict';

var Engine = require('../engine');
var uglify = require('uglifycss');

module.exports = new Engine('uglifycss', function (css) {
    return new Promise(function (resolve, reject) {
        resolve('' + uglify.processString(css, []));
    });
});
