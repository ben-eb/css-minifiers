'use strict';

var Engine = require('../engine');

module.exports = new Engine('csso', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('csso').justDoIt(css));
    });
});
