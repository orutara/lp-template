const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const path = require('path')

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  // watch: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*'],
  },
})