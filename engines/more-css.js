'use strict';

var Engine = require('../engine');
var more = require('more-css');

module.exports = new Engine('more-css', function (css) {
    return new Promise(function (resolve, reject) {
        try {
            var minified = more.compress(css, true);
            if (minified.indexOf('Error: ') === 0) {
                return reject(new Error(minified));
            }
            return resolve(minified);
        } catch (e) {
            reject(e);
        }
    });
});
