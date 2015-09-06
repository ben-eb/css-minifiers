'use strict';

var Engine = require('../engine');
var CleanCSS = require('clean-css');

module.exports = new Engine('clean-css', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(new CleanCSS({processImport: false}).minify(css).styles);
    });
});
