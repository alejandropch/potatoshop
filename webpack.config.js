const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotenvPlugin=require('dotenv-webpack')
const CopyPlugin=require('copy-webpack-plugin')

module.exports = {
  // donde empieza la ramificación

  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new DotenvPlugin(),
   
    new CopyPlugin({
      // this is adding 3 files to the dist archive
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ]
    })

  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    port: 8000,
    historyApiFallback: true,
  },
}
