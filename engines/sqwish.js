'use strict';

var Engine = require('../engine');

module.exports = new Engine('sqwish', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('sqwish').minify(css, true));
    });
});
