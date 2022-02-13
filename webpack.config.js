const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: './public/assets/js/script.js',
    events: './public/assets/js/events.js',
    schedule: './public/assets/js/schedule.js',
    tickets: './public/assets/js/tickets.js'
  },
  output: {
    path: path.resolve(__dirname, '/public/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disable", // the report outputs to an HTML file in the dist directory
    })
  ],
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name (file) {
                return '[path][name].[ext]'
              },
              publicPath: function(url) {
                return url.replace('../', '/assets/')
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  mode: 'development'
};
