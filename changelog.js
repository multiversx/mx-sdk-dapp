var packageJson = require('./package.json');
var fs = require('fs');

const date = new Date();

const file = './CHANGELOG.md';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const [latestPr] = data
    .split('/pull/')
    .map((el) => parseInt(el.split(')\n')[0]))
    .filter((el) => el)
    .sort()
    .reverse();

  const replacement = `## [Unreleased]
## [[${packageJson.version}](https://github.com/ElrondNetwork/dapp-core/pull/${
    latestPr + 1
  })] - ${date.toISOString().split('T')[0]}
  `;

  var result = data.replace('## [Unreleased]', replacement);

  fs.writeFileSync(file, result, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
