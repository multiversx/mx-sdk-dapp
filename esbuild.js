const esbuild = require('esbuild');
const glob = require('glob');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

/*
  The reason why we use esbuild instead of tsc is because esbuild can output .mjs files
*/

const filesToInclude = ['./src/**/*.ts'].join(',');

const allFiles = glob.sync(filesToInclude);

const files = allFiles.filter((file) => {
  const hasTestFiles = file.includes('/tests/') || file.includes('/stories/');
  return !hasTestFiles;
});

const executeBuild = () =>
  esbuild
    .build({
      entryPoints: files,
      splitting: true,
      format: 'esm',
      outdir: 'out',
      treeShaking: true,
      minify: true,
      bundle: true,
      sourcemap: true,
      chunkNames: '__chunks__/[name]-[hash]',
      target: ['es2021'],
      outExtension: { '.js': '.mjs' },
      tsconfig: './tsconfig.json',
      platform: 'node',
      define: {
        global: 'global',
        process: 'process',
        Buffer: 'Buffer'
      },
      plugins: [plugin(stdLibBrowser), nodeExternalsPlugin()]
    })
    .then(() => {
      console.log(
        '\x1b[36m%s\x1b[0m',
        `[${new Date().toLocaleTimeString()}] sdk-dapp-core build succeeded for esm types`
      );
    })
    .catch((err) => {
      console.log(11, err);
      process.exit(1);
    });

executeBuild();
