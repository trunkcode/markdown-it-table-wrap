'use strict';

const assert = require('assert');
const markdownit = require('markdown-it');
const markdownitTableWrap = require('../dist/cjs/index').default;

const testString = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
`;

describe('Test table to wrap with div', () => {
  it('single domain', () => {
    const expectedOutput = '<div class="table-responsive"><table class="table table-striped"><thead>\n<tr>\n<th>Syntax</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Header</td>\n<td>Title</td>\n</tr>\n<tr>\n<td>Paragraph</td>\n<td>Text</td>\n</tr>\n</tbody>\n</table></div>';
    const md = markdownit();

    md.use(markdownitTableWrap);

    assert.strictEqual(md.render(testString), expectedOutput);
  });
});
