const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /¥.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        use: [
          'image-webpack-loader'
        ]
      },
      {
        test: /\.ejs$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            },
          },
          {
            loader: 'ejs-plain-loader'
          }
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/ejs/index.ejs',
    }),
    new MiniCssExtractPlugin({
      filename: './css/tailwind.css',
    }),
  ],
}