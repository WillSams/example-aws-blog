const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.SITE_PORT || 3000;

module.exports = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/img/favicon.ico'
    }),
    // We are only using Webpack for local development, so we need to inject the
    // environment variables since we aren't using Serverless framework to do it
    new webpack.DefinePlugin({
      'process.env': {
        'REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
        'REACT_APP_TOKEN_SECRET': JSON.stringify(process.env.REACT_APP_TOKEN_SECRET),
      },
    }),
  ];

  const rules = [
    // transpile vanilla js
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    // create source maps
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader',]
    },

    {
      test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: ['file-loader'],
    },
    {
      test: /\.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
      use: ['url-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: ['url-loader',],
    },
  ];

  return {
    mode: process.env.NODE_ENV,
    module: { rules, },
    plugins,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',   // make direct links work
      filename: '[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
    }
  };
};