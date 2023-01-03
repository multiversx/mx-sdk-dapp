const { spawn } = require('child_process');

var packageJson = require('./package.json');
var fs = require('fs');
const workspace = process.env.GITHUB_WORKSPACE;
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
  pushChanges();
});

const pushChanges = async () => {
  await runInWorkspace('git', [
    'config',
    'user.name',
    `"${process.env.GITHUB_USER || 'Automated Changelog'}"`
  ]);
  await runInWorkspace('git', [
    'config',
    'user.email',
    `"${
      process.env.GITHUB_EMAIL ||
      'gh-action-changelog-edit@users.noreply.github.com'
    }"`
  ]);

  const remoteRepo = `https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`;
  await runInWorkspace('git', ['commit', '-a', '-m', 'update changelog']);
  await runInWorkspace('git', ['push', remoteRepo, '--follow-tags']);
  await runInWorkspace('git', ['push', remoteRepo, '--tags']);
};

function runInWorkspace(command, args) {
  return new Promise((resolve, reject) => {
    console.log('runInWorkspace | command:', command, 'args:', args);
    const child = spawn(command, args, { cwd: workspace });
    let isDone = false;
    const errorMessages = [];
    child.on('error', (error) => {
      if (!isDone) {
        isDone = true;
        reject(error);
      }
    });
    child.stderr.on('data', (chunk) => errorMessages.push(chunk));
    child.on('exit', (code) => {
      if (!isDone) {
        if (code === 0) {
          resolve();
        } else {
          reject(
            `${errorMessages.join('')}${EOL}${command} exited with code ${code}`
          );
        }
      }
    });
  });
}
