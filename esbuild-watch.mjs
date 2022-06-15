import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import svgrPlugin from "esbuild-plugin-svgr";
import fs from "fs";

const entryPoints = fs.readdirSync("src").filter(files => !files.includes(".")).map(folder => {
  const files = fs.readdirSync(`src/${folder}`);
  const index = files.findIndex(file => file.includes('index.ts') || file.includes('index.tsx'));

  if(index < 0) {
    return undefined;
  }

  return `src/${folder}/${files[index]}`
}).filter(folder => folder != null);


esbuild.build({
  entryPoints: entryPoints,
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: false,
  format: "esm",
  target: "esnext",
  plugins: [nodeExternalsPlugin(), svgrPlugin()],
  watch: true
}).then(result => {
  console.log('watching...')
})

