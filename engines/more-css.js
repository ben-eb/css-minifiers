'use strict';

var Engine = require('../engine');
var more = require('more-css');

module.exports = new Engine('more-css', function (css) {
    var minified = more.compress(css, true);
    if (minified.indexOf('Error: ') === 0) {
        throw new Error(minified);
    }
    return minified;
});
