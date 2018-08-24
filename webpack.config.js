const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const config = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  externals: [nodeExternals()],
  resolve: {
    alias: {
      react: path.join(__dirname, '/node_modules/react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,    // load javascript files
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.js$/,   // load javascript files
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,         // load styles
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[local]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,         // load styles
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]',
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
            },
          },
        ],
      },
      {
        test: /\.svg?$/,
        loader: 'svg-url-loader',
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,  // load images
        loader: 'url-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        progress: true,
      },
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    pathinfo: true,
    library: '@8x8/components',
    libraryTarget: 'umd',
  },
  target: 'node',
};

module.exports = config;
