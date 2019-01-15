# prom-race

[![Build status](https://img.shields.io/travis/imcuttle/prom-race/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/prom-race)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/prom-race.svg?style=flat-square)](https://codecov.io/github/imcuttle/prom-race?branch=master)
[![NPM version](https://img.shields.io/npm/v/prom-race.svg?style=flat-square)](https://www.npmjs.com/package/prom-race)
[![NPM Downloads](https://img.shields.io/npm/dm/prom-race.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/prom-race)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> A better `Promise.race`

## Why use It?

1.  `Promise.race()` returning a forever pending promise when supplied an empty iterable, but `prom-race` will NOT!
2.  `prom-race` will call the others promises' `cancel` method if possible.

## Installation

```bash
npm install prom-race
# or use yarn
yarn add prom-race
```

## Usage

```javascript
const promRace = require('prom-race')
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### race

[index.js:14-58](https://github.com/imcuttle/prom-race/blob/afe739cf5ae833b7a169ca57bcb4c14b63ed20fd/index.js#L14-L58 'Source code on GitHub')

#### Parameters

- `iterable` {Iterable}
  An iterable object, such as an Array.
- `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** {{}}
  - `options.cancelWhenFinished` {boolean} - Whether call the others promises' `cancel` method. (optional, default `true`)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any>**

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
