'use strict';

var Engine = require('../engine');
var CleanCSS = require('clean-css');

module.exports = new Engine('clean-css', function (css) {
    return new CleanCSS({returnPromise: true})
        .minify(css)
        .then(function (result) {
            return result.styles;
        });
});
