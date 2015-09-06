'use strict';

var Engine = require('../engine');

module.exports = new Engine('cssshrink', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('cssshrink').shrink(css));
    });
});
