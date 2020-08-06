const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'public/index.html', filename: 'index.html' });

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    host: '0.0.0.0',
    port: 3000,
    writeToDisk: true,
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    DefinePlugin,
    HTMLWebpackPluginConfig
  ]
};
