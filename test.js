'use strict';

var test = require('tape');
var minifiers = require('./');

var css = 'h1 { color: #880000; }';
var expected = 'h1{color:#800}';

test('integration tests', function (t) {
    t.plan(Object.keys(minifiers).length);

    Object.keys(minifiers).forEach(function (minifier) {
        Promise.resolve(minifiers[minifier](css)).then(function (css) {
            t.equal(css, expected, 'should minify css with ' + minifier);
        });
    });
});

test('benchmark tests', function (t) {
    t.plan(Object.keys(minifiers).length);

    Object.keys(minifiers).forEach(function (m) {
        var minifier = minifiers[m];
        Promise.resolve(minifier.bench(css)).then(function (time) {
            t.ok(time, minifier + ' took ' + time);
        });
    });
});

test('metadata tests', function (t) {
    t.plan(Object.keys(minifiers).length * 2);

    Object.keys(minifiers).forEach(function (m) {
        var minifier = minifiers[m];
        t.ok(minifier.version, minifier + ' version ' + minifier.version);
        t.ok('' + minifier, minifier + ' should be cast to string');
    });
});
