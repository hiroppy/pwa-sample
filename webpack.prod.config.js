'use strict';

const webpack       = require('webpack');
const BabiliPlugin  = require('babili-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  output: {
    filename     : '[name].[hash:8].js',
    chunkFilename: '[name].bundle.[hash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({

      // names: ['vendor', 'manifest'],

      names    : ['vendor'],
      filename : '[name].[hash:8].js',
      minChunks: Infinity
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug   : false
    }),
    new BabiliPlugin(),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,
      caches                 : {
        main: [
          'index.html',
          'bundle*.js',
          '*.bundle*.js', // for ensure
          'vendor*.js' // if you want to debug as development env, don't include vendor.js because memory is exceeded
        ],
        additional: [ // Assets in this section are loaded after main section is successfully loaded
          '*.png'

          // '*.woff',
          // '*.woff2'
        ],
        optional: [
          ':rest:'
        ]
      },
      ServiceWorker: { events: true },
      AppCache     : {
        events: true
      }
    })
  ]
};
