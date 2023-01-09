const { spawn } = require('child_process');
var fs = require('fs');
const { Octokit } = require('@octokit/rest');

var packageJson = require('./package.json');
const workspace = process.env.GITHUB_WORKSPACE;
const date = new Date();

const file = './CHANGELOG.md';

const createPullRequest = async () => {
  const octokit = new Octokit({
    auth: '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'
  });

  try {
    const { data } = await octokit.pulls.create({
      owner: 'multiversx',
      repo: 'mx-sdk-dapp',
      title: 'testPR',
      head: 'ag-auto-pr',
      base: 'master',
      body: 'Update changelog',
      maintainer_can_modify: true
    });
    return data.url;
  } catch (error) {
    throw new Error(error);
  }
};

const incrementNpmversion = async () => {
  await runInWorkspace('npm', [
    'version',
    'patch',
    '--force',
    '--no-git-tag-version'
  ]);
};

const editChangeLog = async (pullRequestUrl) => {
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
  ## [[${packageJson.version}](${pullRequestUrl})] - ${
      date.toISOString().split('T')[0]
    }
    `;

    var result = data.replace('## [Unreleased]', replacement);

    fs.writeFileSync(file, result, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
};

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
            `${errorMessages.join('')}${command} exited with code ${code}`
          );
        }
      }
    });
  });
}

const init = async () => {
  // await incrementNpmversion();
  // const prUrl = await createPullRequest();
  // await editChangeLog(prUrl);
  await pushChanges();
  // console.log(`PR created: ${prUrl}`);
};

init();
