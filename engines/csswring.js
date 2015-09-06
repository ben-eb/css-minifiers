'use strict';

var Engine = require('../engine');
var csswring = require('csswring');

module.exports = new Engine('csswring', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(csswring.wring(css).css);
    });
});
