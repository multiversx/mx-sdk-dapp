const scss = require('rollup-plugin-scss');
const svg = require('rollup-plugin-svg-import');
const svgr = require('@svgr/rollup');
module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      scss({
        output: './dist/index.css',
        failOnError: true,
        runtime: require('sass')
      })
    );
    config.plugins.push(svg());
    config.plugins.push(svgr());
    return config;
  }
};
