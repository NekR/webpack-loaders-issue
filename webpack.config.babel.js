const { resolve } = require('path');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  context: resolve('./scripts'),
  entry: './main.js',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: './scripts/bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test:/\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new OfflinePlugin({
      externals: [
        '/images/bgz.jpg',
        '/images/hamburger.svg',
        '/images/logo_grey.svg',
      ],
    })
  ]
};