const esbuild = require('esbuild');
const glob = require('glob');
const { replace } = require('esbuild-plugin-replace');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

const files = glob
  .sync('./src/**/*.ts')
  .filter((file) => !file.includes('/tests/') && !file.includes('/stories/'));

const commonConfig = {
  entryPoints: files,
  platform: 'node',
  define: {
    global: 'global',
    process: 'process',
    Buffer: 'Buffer'
  },
  plugins: [
    plugin(stdLibBrowser),
    nodeExternalsPlugin(),
    replace({
      __sdkDappVersion: process.env.npm_package_version
    })
  ]
};

async function build() {
  try {
    // ESM build
    await esbuild.build({
      ...commonConfig,
      splitting: true,
      format: 'esm',
      outdir: 'out',
      bundle: true,
      minify: true,
      sourcemap: true,
      chunkNames: '__chunks__/[name]-[hash]',
      target: ['es2021'],
      outExtension: { '.js': '.mjs' },
      tsconfig: './tsconfig.esm.json'
    });
    console.log('[Build] ✅ ESM build completed');

    // CJS build
    await esbuild.build({
      ...commonConfig,
      format: 'cjs',
      outdir: 'out',
      minify: true,
      sourcemap: true,
      target: ['es2021'],
      outExtension: { '.js': '.cjs' },
      tsconfig: './tsconfig.cjs.json'
    });
    console.log('[Build] ✅ CJS build completed');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();
