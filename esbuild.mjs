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

<<<<<<< HEAD
=======

>>>>>>> c346938a305847fbe1f3a60833c632852c94596c

esbuild.build({
  entryPoints: entryPoints,
  outdir: "dist",
  bundle: true,
  sourcemap: true,
  minify: true,
  splitting: false,
  format: "esm",
  target: ['chrome58', 'chrome79','firefox57'],
  plugins: [nodeExternalsPlugin(), svgrPlugin()],
}).catch(() => process.exit(1));

