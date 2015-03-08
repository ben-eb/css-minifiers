'use strict';

var Engine = require('../engine');
module.exports = new Engine('css-condense', require('css-condense').compress);
