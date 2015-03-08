'use strict';

var Engine = require('../engine');
var sqwish = require('sqwish');

module.exports = new Engine('sqwish', function (css) {
    return sqwish.minify(css, true);
});
