const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prod = process.argv.indexOf('-p') !== -1;
const extractCSS = new ExtractTextPlugin('../css/[name].css');
const config = {
  entry: {
    app: './step1/app.js'
  },
  output: {
    path: __dirname + '/step1/public/js',
    publicPath: '/public/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          presets: [['es2015', {"modules": false}]],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }],
            "transform-async-to-generator",
          ],
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'postcss-loader']
        }),
      },
      ]
  },
  plugins: [
      extractCSS,
  ]
};

module.exports = config;