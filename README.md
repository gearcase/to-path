# to-path

> Converts string to a property path array.



[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/to-path/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/to-path/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/to-path)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/to-path/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/to-path)


## Install

```
$ npm install --save to-path 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/to-path/blob/master/test/spec/index.js)

```js
var toPath = require('to-path');

toPath('a');          // => ['a']
toPath('a.b.c');      // => ['a', 'b', 'c']
toPath('a[0].b.c');   // => ['a', '0', 'b', 'c']
toPath('a[x].b.c');   // => ['a', 'x', 'b', 'c']
toPath('a["x"].b.c'); // => ['a', 'x', 'b', 'c']
toPath(0);            // => ['0']
toPath([1, 2, 3]);    // => ['1', '2', '3']
```

## Related




## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/to-path/issues/new).
