const { readdirSync } = require('fs');

const resolveAlias = readdirSync('./src', { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .reduce(
    (aliases, dir) => {
      aliases[dir.name] = './src/' + dir.name;
      return aliases;
    },
    { '*': ['src/*', 'node_modules/*'] }
  );

module.exports = function(api) {
  api.cache(true);

  return {
    plugins: [['module-resolver', { root: './', alias: resolveAlias }]]
  };
};
