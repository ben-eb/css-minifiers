'use strict';

/**
 * Expose an object containing a normalised API for each of the minifier
 * engines. Each engine has a main exported function and a version key.
 */

module.exports = require('bulk-require')(__dirname + '/engines/', '*.js');
