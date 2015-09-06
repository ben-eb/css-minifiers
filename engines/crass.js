'use strict';

var Engine = require('../engine');
var crass = require('crass');

module.exports = new Engine('crass', function (css) {
    return new Promise(function (resolve, reject) {
        resolve('' + crass.parse(css).optimize({o1: true}));
    });
});
