# markdown-it-table-wrap

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]

[markdown-it](https://www.npmjs.com/package/markdown-it) plugin which wraps table into div and add class for custom styling.

## Install

Via `npm`

```bash
npm install markdown-it-table-wrap
```

Via Yarn

```bash
yarn add markdown-it-table-wrap
```

## Usage

```javascript
const markdownit = require('markdown-it');
const markdownitTableWrap = require('markdown-it-table-wrap').default;
const md = markdownit();

const testString = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
`;

md.use(markdownitTableWrap);

console.log(md.render(testString));
```

[npm-image]: https://img.shields.io/npm/v/markdown-it-table-wrap.svg
[npm-url]: https://www.npmjs.com/package/markdown-it-table-wrap
[downloads-image]: https://img.shields.io/npm/dm/markdown-it-table-wrap.svg

[appveyor-url]: https://ci.appveyor.com/project/trunkcode/markdown-it-table-wrap
[appveyor-image]: https://img.shields.io/appveyor/ci/trunkcode/markdown-it-table-wrap.svg?label=appveyor
