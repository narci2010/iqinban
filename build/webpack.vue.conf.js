/**
 * Created by caiyuhao on 2017/5/7.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    common: ['mockjs', 'vue', 'vuex', 'vue-router', 'axios']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'       // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
}
