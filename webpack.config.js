const path = require('path');
const {
  NODE_ENV = 'production',
} = process.env;
const nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './main/main.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ]
  }
}