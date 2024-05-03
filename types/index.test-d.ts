'use strict';

import markdownit from 'markdown-it';
import markdownitTableWrap from './index';

const testString = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
`;

const md = new markdownit();

md.use(markdownitTableWrap);
md.render(testString);
