const executeBuildCommand = require('./executeBuildCommand');

const cjsBuild = executeBuildCommand('cjs');
const esmBuild = executeBuildCommand('esm');

cjsBuild();
esmBuild();
