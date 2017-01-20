const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  devtool: "inline-source-map",
  entry: __dirname + "/app/app.jsx",
  output: {
    filename: 'bundle.js',
    path: './public/build',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.sass', '.css'],
    root: __dirname + "/app"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap!sass?sourceMap'
        )
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style', // The backup style loader
          'css?sourceMap'
        )
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  sassLoader: {
    includePaths: ['app/styles']
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ comments: false }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  ];
};

module.exports = config;
