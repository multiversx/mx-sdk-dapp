const executeBuildCommand = require('./executeBuildCommand');

executeBuildCommand();
executeBuildCommand({ splitting: false, format: 'cjs', outdir: 'dist/cjs' });
