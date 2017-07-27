'use strict';

const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry  : {
    hot: 'react-hot-loader/patch'
  },
  output: {
    filename     : '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({

      // names: ['vendor', 'manifest'],
      names    : ['vendor'],
      filename : '[name].js',
      minChunks: Infinity
    })
  ],
  devServer: {
    hot               : true,
    port              : 8080,
    inline            : true,
    contentBase       : '.',
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
