'use strict';

var Engine = require('../engine');
var crass = require('crass');

module.exports = new Engine('crass', function (css) {
    return '' + crass.parse(css).optimize({ o1: true });
});
