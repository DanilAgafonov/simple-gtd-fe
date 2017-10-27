const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const addHash = (template, hash) => (NODE_ENV === 'production' ? template.replace(/\.[^.]+(\.map)?$/, `.[${hash}]$&`) : template);

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: (files => (NODE_ENV !== 'production' ? [
      'react-hot-loader/patch',
    ] : []).concat(files))(['./index']),
    vendor: ['babel-polyfill', './vendor'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: addHash('assets/js/[name].js', 'chunkhash'),
    sourceMapFilename: addHash('assets/js/[name].js.map', 'chunkhash'),
  },
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['./src', 'node_modules'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: 'index.pug',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(NODE_ENV !== 'production'),
    }),
    new CopyWebpackPlugin([
      {
        from: 'static',
      },
    ]),
    new webpack.EnvironmentPlugin([
      'API_URL',
    ]),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};

if (NODE_ENV !== 'production') {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
