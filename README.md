# Convert to Linux directory style #

[![Build Status](https://img.shields.io/travis/autn/to-linux-dir/master.svg)](https://travis-ci.org/autn/to-linux-dir)
[![Stable Version](https://img.shields.io/npm/v/to-linux-dir.svg)](https://www.npmjs.com/package/to-linux-dir)
[![Download Status](https://img.shields.io/npm/dt/to-linux-dir.svg)](https://www.npmjs.com/package/to-linux-dir)
[![Coverage Status](https://coveralls.io/repos/github/autn/to-linux-dir/badge.svg)](https://coveralls.io/github/autn/to-linux-dir)
[![License](https://img.shields.io/github/license/autn/to-linux-dir.svg)](https://github.com/autn/to-linux-dir/master/LICENSE)

A small library providing utility methods `toLinuxDir` to convert the directory path to Linux style

## Installation

```js
  npm install to-linux-dir --save
```

## Usage

```js
  var dLinux = require('to-linux-dir');

  var ouput = dLinux.toLinuxDir('to\path\file.js'); // return 'to/path/file.js'
```

## Tests

```js
  npm test
```

## Contributing

AuTN

## Release History

```sh
  * 1.0.0 Initial release

  * 1.0.4 Publish package

  * 1.0.5 Update readme

  * 1.1.0 Coverage status
```
