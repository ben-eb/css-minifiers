'use strict';

var pretty = require('pretty-hrtime');

function Engine (name, fn) {
    if (!(this instanceof Engine)) {
        return new Engine();
    }
    this.name = name;
    this.func = fn;

    var exports = this.func;
    exports.version = this._getKey('version');
    exports.url = this._getKey('homepage');
    exports.toString = this.toString.bind(this);

    exports.bench = function (css, precise) {
        var start = process.hrtime();
        return new Promise(function (resolve) {
            return Promise.resolve(fn(css)).then(function () {
                resolve(pretty(process.hrtime(start), {precise: precise}));
            });
        });
    };

    return exports;
}

Engine.prototype._getKey = function (key) {
    return require(this.name + '/package.json')[key];
}

Engine.prototype.toString = function () {
    return this.name;
}

module.exports = Engine;
