const svgrPlugin = require('esbuild-plugin-svgr');
const esbuild = require('esbuild');
const glob = require('glob');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

glob('{./src/**/*.tsx,./src/**/*.ts}', function(err, files) {
  if (err) {
    console.log('error reading files', err);
  }

  esbuild
    .build({
      entryPoints: files,
      outdir: 'dist',
      bundle: true,
      treeShaking: true,
      minify: true,
      sourcemap: true,
      format: 'esm',
      target: ['es2015'],
      tsconfig: './tsconfig.json',
      platform: 'node',
      inject: [require.resolve('node-stdlib-browser/helpers/esbuild/shim')],
      define: {
        global: 'global',
        process: 'process',
        Buffer: 'Buffer',
        'process.env.NODE_ENV': `"production"`
      },
      plugins: [svgrPlugin(), plugin(stdLibBrowser), nodeExternalsPlugin()]
    })
    .catch(() => process.exit(1));
});
