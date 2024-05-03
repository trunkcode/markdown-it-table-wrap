const markdownit = require('markdown-it');
const markdownitTableWrap = require('markdown-it-table-wrap').default;

const md = markdownit();

{
  const expectedOutput = '<div class="table-responsive"><table class="table table-striped"><thead>\n<tr>\n<th>Syntax</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Header</td>\n<td>Title</td>\n</tr>\n<tr>\n<td>Paragraph</td>\n<td>Text</td>\n</tr>\n</tbody>\n</table></div>';
  const matchString = new RegExp(expectedOutput, 'u');
  const testString = `
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
`;

  md.use(markdownitTableWrap);

  const output = md.render(testString);
  if (output.match(matchString)) {
    console.log('Table wrapped with div test Passed.');
  } else {
    console.error('Table wrapped with div test Failed.');
  }
}
