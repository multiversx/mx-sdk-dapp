const svg = require('rollup-plugin-svg-import');
const svgr = require('@svgr/rollup');
const postcssmodules = require('rollup-plugin-postcss-modules').default;
const autoprefixer = require('autoprefixer');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config) {
    config.input = {
      "apiCalls/index": "src/apiCalls/index.ts",
      "constants/index": "src/constants/index.ts",
      "hooks/index": "src/hooks/index.tsx",
      "models/index": "src/models/index.tsx",
      "providers/index": "src/providers/index.ts",
      "services/index": "src/services/index.tsx",
      "types/index": "src/types/index.ts",
      "UI/index": "src/UI/index.tsx",
      "wrappers/index": "src/wrappers/index.tsx",
    };

    config.output = {
      ...config.output,
      entryFileNames: "[name].esm.js",
      format: "esm",
      freeze: false,
      esModule: true,
      name: "hooks__index",
      sourcemap: true,
      globals: { react: "React", "react-native": "ReactNative" },
      exports: "named"
    };

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
