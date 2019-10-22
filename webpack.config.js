const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      // Rules to load scss
      {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                  name: 'css/[name].css'
              }
            },
            {
              loader: 'extract-loader',
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        {
            context: './public/',
            from: '**/*',
            to: './public'
        }
    ], { /* options */ }),

    new ExtractTextPlugin("public/css/vendor-bundle.css"),
  ],
  externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }
}