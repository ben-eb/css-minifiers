'use strict';

var Engine = require('../engine');

module.exports = new Engine('ycssmin', function (css) {
    return new Promise(function (resolve, reject) {
        resolve(require('ycssmin').cssmin(css));
    });
});
