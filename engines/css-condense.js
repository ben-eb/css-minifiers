'use strict';

var Engine = require('../engine');

module.exports = new Engine('css-condense', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('css-condense').compress(css));
    });
});
