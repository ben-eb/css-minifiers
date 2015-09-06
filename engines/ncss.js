'use strict';

var Engine = require('../engine');

module.exports = new Engine('ncss', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('ncss')(css));
    });
});
