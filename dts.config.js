const svg = require('rollup-plugin-svg-import');
const svgr = require('@svgr/rollup');
const postcssmodules = require('rollup-plugin-postcss-modules').default;
const autoprefixer = require('autoprefixer');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(peerDepsExternal());
    config.plugins.push(
      postcssmodules({
        extract: false,
        plugins: [autoprefixer()],
        writeDefinitions: true,
        modules: true,
        use: ['sass']
      })
    );
    config.plugins.push(svg());
    config.plugins.push(svgr());
    return config;
  }
};
