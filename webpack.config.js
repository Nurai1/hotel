const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './source/layout.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js'
  },
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
	{
      test: /\.pug$/,
      loader: 'pug-loader',
	  options: {
		  pretty: true
	  }
    }
  ]
},
plugins: [
 new ExtractTextPlugin('style.css'),
 new HtmlWebpackPlugin({
	 filename: 'index.html',
	 template: './source/layout.pug'
 })
]
};
