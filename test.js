'use strict';

var test = require('tape');
var minifiers = require('./');

var css = 'h1 { color: #880000; }';
var expected = 'h1{color:#800}';

test('integration tests', function (t) {
    t.plan(Object.keys(minifiers).length);

    Object.keys(minifiers).forEach(function (minifier) {
        t.equal(
            minifiers[minifier](css),
            expected,
            'should minify css with ' + minifier
        );
    });
});

test('benchmark tests', function (t) {
    t.plan(Object.keys(minifiers).length);

    Object.keys(minifiers).forEach(function (m) {
        var minifier = minifiers[m];
        var benchmark = minifier.bench(css);
        t.ok(benchmark, minifier + ' took ' + benchmark);
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
