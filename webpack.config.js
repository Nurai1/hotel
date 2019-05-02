var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
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
  },
     {
        test: /\.css$/,
         use: [ 'style-loader', 'css-loader' ]
       }
  ]
},
plugins: [
 new ExtractTextPlugin('style.css'),
 new HtmlWebpackPlugin({
	 filename: 'index.html',
	 template: './source/layout.pug'
 }),
 new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
})
],
resolve: {
  alias:{
    'jquery-ui-dist':'jquery-ui-dist/jquery-ui.js',
    'slider-ui':'jquery-ui/ui/widgets/slider.js'
  }
}
};
