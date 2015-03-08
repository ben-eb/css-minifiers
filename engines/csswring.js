'use strict';

var Engine = require('../engine');
var csswring = require('csswring');

module.exports = new Engine('csswring', function (css) {
    return csswring().wring(css).css;
});
