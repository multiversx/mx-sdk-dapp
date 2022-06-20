const svgrPlugin = require('esbuild-plugin-svgr');
const path = require('path');
const esbuild = require('esbuild');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const fs = require('fs');
const alias = require('esbuild-plugin-alias');

const entryPoints = fs
  .readdirSync('src')
  .filter((files) => !files.includes('.'))
  .map((folder) => {
    const files = fs.readdirSync(`src/${folder}`);
    const index = files.findIndex(
      (file) => file.includes('index.ts') || file.includes('index.tsx')
    );

    if (index < 0) {
      return undefined;
    }

    return `src/${folder}/${files[index]}`;
  })
  .filter((folder) => folder != null);

esbuild
  .build({
    entryPoints: entryPoints,
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    // minify: true,
    splitting: false,
    format: 'esm',
    target: ['es2015'],
    tsconfig: './tsconfig.json',
    // platform: 'browser',
    inject: [require.resolve('node-stdlib-browser/helpers/esbuild/shim')],
    define: {
      global: 'global',
      process: 'process',
      Buffer: 'Buffer',
      'process.env.NODE_ENV': `"production"`
    },
    plugins: [
      svgrPlugin(),
      plugin(stdLibBrowser),
      alias({
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom')
      })
    ]
  })
  .catch(() => process.exit(1));
