# cv-curve

[![NPM version][npm-image]][npm-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

## Installation

`$ npm install --save cv-curve`

## Usage

```js
import CVCurve from 'cv-curve';

let analysis = CVCurve.fromJcamp(jcamp);
```

When loading an CVCurve from Jcamp we will systematically add 2 new variables:

- a: containing the absorbance
- t: containing the percent transmittance

In order to calculate those 2 variables we will check the Y label. If it contains
transmittance we calculate absorbance, if it contains absorbance we calculate transmittance.
For transmittance we also check for the presence of a '%' sign.:w

## [API Documentation](https://cheminfo.github.io/cv-curve/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/cv-curve.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cv-curve
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/cv-curve.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/cv-curve
[download-image]: https://img.shields.io/npm/dm/cv-curve.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/cv-curve
