'use strict';

var Engine = require('../engine');
module.exports = new Engine('csso', require('csso').justDoIt);
