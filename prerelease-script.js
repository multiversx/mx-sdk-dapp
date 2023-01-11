const { spawn } = require('child_process');
const fs = require('fs');
const { Octokit } = require('@octokit/rest');
require('dotenv').config();

const date = new Date();

const file = './CHANGELOG.md';

const createPullRequest = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  try {
    const { data } = await octokit.pulls.create({
      owner: 'multiversx',
      repo: 'mx-sdk-dapp',
      title: 'New version release',
      head: 'development',
      base: 'master',
      body: 'Update changelog, increment version, create PR',
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
    '--tag-version-prefix=v'
  ]);
};

const editChangeLog = async (pullRequestUrl) => {
  const packageJson = require('./package.json');
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
  await runInWorkspace('git', ['commit', '-a', '-m', 'update changelog']);
  await runInWorkspace('git', ['push']);
};

function runInWorkspace(command, args) {
  return new Promise((resolve, reject) => {
    console.log('runInWorkspace | command:', command, 'args:', args);
    const child = spawn(command, args, { cwd: undefined });
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
  let prUrl;
  try {
    prUrl = await createPullRequest();
    await incrementNpmversion();
    await editChangeLog(prUrl);
  } catch (error) {
    await runInWorkspace('git', ['checkout', 'package.json']);
    await runInWorkspace('git', ['checkout', 'CHANGELOG.md']);
    console.error(error);
    if (prUrl) {
      console.log(
        '\n\n Some error occured, please delete the PR manually: ',
        prUrl,
        '\n\n'
      );
    }

    return;
  }
  console.log('Pull request created:', prUrl);
  await pushChanges();
};

init();
