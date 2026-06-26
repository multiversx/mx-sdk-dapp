const esbuild = require('esbuild');
const glob = require('glob');
const fs = require('fs');
const { replaceTscAliasPaths } = require('tsc-alias');
const { replace } = require('esbuild-plugin-replace');
const plugin = require('node-stdlib-browser/helpers/esbuild/plugin');
const stdLibBrowser = require('node-stdlib-browser');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

// exclude tests, stories, and mocks from the output
const excludeFromBuild =
  /(\/tests\/|\/stories\/|\/__mocks__\/|\/__tests__\/|\.test\.|\.spec\.|\.bgTest\.|\.jest\.|\.playwright\.|\.puppeteer\.|-mock\.)/;

const files = glob
  .sync('./src/**/*.ts')
  .filter((file) => !excludeFromBuild.test(file));

const commonConfig = {
  entryPoints: files,
  platform: 'node',
  bundle: false,
  outbase: 'src',
  minify: true,
  sourcemap: true,
  target: ['es2021'],
  define: {
    global: 'global',
    process: 'process',
    Buffer: 'Buffer'
  }
};

const sharedPlugins = [
  plugin(stdLibBrowser),
  nodeExternalsPlugin(),
  replace({
    __sdkDappVersion: process.env.npm_package_version
  })
];

const targets = [
  {
    label: 'ESM',
    format: 'esm',
    outdir: 'out-esm',
    extension: '.mjs',
    tsconfig: './tsconfig.esm.json',
    aliasConfig: './tsconfig.alias-esm.json'
  },
  {
    label: 'CJS',
    format: 'cjs',
    outdir: 'out-cjs',
    extension: '.cjs',
    tsconfig: './tsconfig.cjs.json',
    aliasConfig: './tsconfig.alias-cjs.json'
  }
];

async function build() {
  try {
    for (const target of targets) {
      fs.rmSync(target.outdir, { recursive: true, force: true });

      await esbuild.build({
        ...commonConfig,
        format: target.format,
        outdir: target.outdir,
        outExtension: { '.js': target.extension },
        tsconfig: target.tsconfig,
        plugins: sharedPlugins
      });

      await replaceTscAliasPaths({
        configFile: target.aliasConfig,
        resolveFullPaths: true,
        resolveFullExtension: target.extension
      });

      fs.cpSync(target.outdir, 'out', { recursive: true });
      fs.rmSync(target.outdir, { recursive: true, force: true });

      console.log(`[Build] ✅ ${target.label} build completed`);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();
