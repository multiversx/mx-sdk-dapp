const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

    return `${folder}/${files[index]}`;
  })
  .filter((folder) => folder != null)
  .reduce((acc, cv) => {
    const withoutExtension = cv.substring(0, cv.indexOf('.'));
    acc[withoutExtension] = `./src/${cv}`;
    return acc;
  }, {});

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      // react: 'React',
      // 'react-native': 'ReactNative',
      process: 'process/browser'
    },
    fallback: {
      stream: require.resolve('stream-browserify')
      // react: require.resolve('react')
    }
  }
};
