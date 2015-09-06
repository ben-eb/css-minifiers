'use strict';

var Engine = require('../engine');
var nano = require('cssnano');

module.exports = new Engine('cssnano', function (css) {
    return new Promise(function (resolve, reject) {
        return nano.process(css).then(function (result) {
            resolve(result.css);
        });
    });
});
