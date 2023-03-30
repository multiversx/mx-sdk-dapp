const executeBuildCommand = require('./executeBuildCommand');

executeBuildCommand('esm')({
  watch: {
    onRebuild(error, result) {
      if (error) {
        console.error('Watch build failed:', error);
      } else {
        console.log(
          '\x1b[36m%s\x1b[0m',
          `[${new Date().toLocaleTimeString()}] sdk-dapp rebuild succeeded`
        );
      }
    }
  }
});
executeBuildCommand('cjs')({
  watch: {
    onRebuild(error, result) {
      if (error) {
        console.error('Watch build failed:', error);
      } else {
        console.log(
          '\x1b[36m%s\x1b[0m',
          `[${new Date().toLocaleTimeString()}] sdk-dapp rebuild succeeded`
        );
      }
    }
  }
});
