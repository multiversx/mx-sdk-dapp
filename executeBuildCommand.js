const svgrPlugin = require('esbuild-plugin-svgr');
const esbuild = require('esbuild');
const glob = require('glob');
const { replace } = require('esbuild-plugin-replace');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin');

const basedir = 'src';

const buildTypes = {
  cjs: {
    splitting: false,
    format: 'cjs',
    tsconfig: './tsconfig.cjs.json',
    destination: '/__commonjs',
    replacements: {
      __sdkWalletconnectProvider: '__mocks__/sdkWalletconnectProvider',
      __sdkDappVersion: process.env.npm_package_version
    }
  },
  esm: {
    splitting: true,
    format: 'esm',
    tsconfig: './tsconfig.json',
    destination: '',
    replacements: {
      __sdkDappVersion: process.env.npm_package_version
    }
  }
};

module.exports = function esbuildWrapper(
  buildType = 'esm',
  options = {
    outDir: 'dist'
  }
) {
  const { format, splitting, tsconfig, destination, replacements } =
    buildTypes[buildType];

  return function executeBuildCommand(customOptions = {}) {
    glob(
      '{./src/**/*.tsx,./src/**/*.ts,./src/**/*.scss}',
      function (err, allFiles) {
        if (err) {
          console.log('error reading files', err);
        }

        const files = allFiles.filter((file) => {
          const hasTestFiles =
            file.includes('/tests/') || file.includes('/stories/');
          return !hasTestFiles;
        });

        esbuild
          .build({
            entryPoints: files,
            splitting,
            format,
            outdir: `${options.outDir}${destination}`,
            treeShaking: true,
            minify: true,
            bundle: true,
            sourcemap: true,
            chunkNames: '__chunks__/[name]-[hash]',
            target: ['es2015'],
            tsconfig,
            platform: 'node',
            inject: [
              require.resolve('node-stdlib-browser/helpers/esbuild/shim')
            ],
            define: {
              global: 'global',
              process: 'process',
              Buffer: 'Buffer',
              'process.env.NODE_ENV': `"production"`
            },
            plugins: [
              svgrPlugin(),
              plugin(stdLibBrowser),
              nodeExternalsPlugin(),
              sassPlugin({
                loadPaths: [`./${basedir}`, 'node_modules'],
                basedir,
                transform: postcssModules({
                  basedir,
                  localsConvention: 'dashes',
                  generateScopedName: 'dapp-core-component__[name]__[local]'
                })
              }),
              replace(replacements)
            ],
            ...customOptions
          })
          .then(() => {
            console.log(
              '\x1b[36m%s\x1b[0m',
              `[${new Date().toLocaleTimeString()}] sdk-dapp build succeeded for ${format} types`
            );
          })
          .catch(() => process.exit(1));
      }
    );
  };
};
