'use strict';

var pretty = require('pretty-hrtime');

function Engine (name, fn) {
    if (!(this instanceof Engine)) {
        return new Engine();
    }
    this.name = name;
    this.func = fn || require(this.name);

    var exports = this.func;
    exports.version = this._getKey('version');
    exports.url = this._getKey('homepage');
    exports.toString = this.toString.bind(this);
    exports.bench = this.measure.bind(this);

    return exports;
}

Engine.prototype.measure = function (css, precise) {
    var start = process.hrtime();
    this.func(css);
    return pretty(process.hrtime(start), { precise: precise });
}

Engine.prototype._getKey = function (key) {
    return require(this.name + '/package.json')[key];
}

Engine.prototype.toString = function () {
    return this.name;
}

module.exports = Engine;
