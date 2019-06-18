var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: 'bundle',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          //'postcss-loader',
          'sass-loader',
        ]
      },
	{
      test: /\.pug$/,
      loader: 'pug-loader',
	  options: {
		  pretty: true
	  }
  },
       {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
       }
     },
     {
      test: /\.(jpe?g|png|gif|svg)$/i,
       loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
     }
   },
  ]
},
plugins: [
  new MiniCssExtractPlugin({
       filename: '[name].css'
     }),
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

  }
}
};
