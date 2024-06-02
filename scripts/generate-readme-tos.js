const fs = require('fs');
const toc = require('markdown-toc');

fs.readFile('README.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const startPlaceholder = '<!-- TOS:START - Do not remove or modify this section -->';
  const endPlaceholder = '<!-- TOS:END -->';

  // Remove existing ToC
  const tocStartIndex = data.indexOf(startPlaceholder) + startPlaceholder.length;
  const tocEndIndex = data.indexOf(endPlaceholder);
  const existingToc = data.slice(tocStartIndex, tocEndIndex);
  data = data.replace(existingToc, '\n\n');

  // Generate new ToC
  const tocContent = toc(data).content;
  const updatedData = data.replace(
    `${startPlaceholder}\n\n${endPlaceholder}`,
    `${startPlaceholder}\n\n${tocContent}\n\n${endPlaceholder}`,
  );

  fs.writeFile('README.md', updatedData, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
