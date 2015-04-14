# css-minifiers [![Build Status](https://travis-ci.org/ben-eb/css-minifiers.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/css-minifiers.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/css-minifiers.svg)][deps]

> (almost) all CSS minifiers available for node.js

## Why?

This module provides a convenient list of the CSS minifiers that are out there
for the Node ecosystem, should you need to compare minification results across
engines. It has mostly been inspired from [the minification benchmark][1], and
provides a simple, normalised API for all available tools.

## Why *almost*?

The only minifier that this does not cover is [css-smasher][2]; this is because
this engine is too conservative about its parsing, leaving lots of whitespace in
& not covering basic optimisations.

## Which engines *are* covered?

* [clean-css](https://github.com/jakubpawlowicz/clean-css)
* [crass](https://github.com/mattbasta/crass)
* [css-condense](https://github.com/rstacruz/css-condense)
* [cssnano](https://github.com/ben-eb/cssnano)
* [csso](https://github.com/css/csso)
* [cssshrink](https://github.com/stoyan/cssshrink)
* [csswring](https://github.com/hail2u/node-csswring)
* [more-css](https://github.com/army8735/more)
* [ncss](https://github.com/wasche/ncss)
* [sqwish](https://github.com/ded/sqwish)
* [ycssmin](https://github.com/yui/ycssmin)

If you've written a minifier that you'd like to add to this list, please send a
pull request!

## Usage

Load all of the minifiers, and then access their compression functions like so:

```js
var minifiers = require('css-minifiers');
var css = 'h1 { color: #880000; }';
var csso = minifiers.csso;

console.log(csso(css));
// => h1{color:#800}
```

Get a benchmark compression time:

```js
console.log(csso.bench(css));
// => 1.4 ms
console.log(csso.bench(css, true));
// => 1.399856 ms
```

The version number & homepage for the engine are also exposed:

```js
console.log(csso.version, csso.url);
// => 1.3.11 https://github.com/css/csso
```

## Install

With [npm](https://npmjs.com) do:

```
npm install css-minifiers
```

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © Ben Briggs

[1]: https://github.com/GoalSmashers/css-minification-benchmark
[2]: https://github.com/MarkBennett/css-smasher

[ci]:   https://travis-ci.org/ben-eb/css-minifiers
[deps]: https://gemnasium.com/ben-eb/css-minifiers
[npm]:  http://badge.fury.io/js/css-minifiers
