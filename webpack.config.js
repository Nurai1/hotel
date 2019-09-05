var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPathAssetsFix = require('html-webpack-plugin-assets-fix')
const path = require('path');

module.exports = {
  entry: {
    'cards/cards' : './source/UI kit/cards/cards.js',
    'colorsNtype/colorsNtype' : './source/UI kit/colors&type/colorsNtype.js',
    "headersNfooters/headersNfooters" : './source/UI kit/headers&footers/headersNfooters.js',
    "FormElements/FormElements" : './source/UI kit/FormElements/FormElements.js'
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '',
    filename: '[name].js'
  },
module: {
  rules: [
    {
      test: /\.scss$/,
      use:
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            options: {
      		  sourceMap: true
      	  }
        }
        ,
        {
          loader: 'sass-loader',
          options: {
      		  sourceMap: true
      	  }
        }
        ]
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
        use:
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
           use: [
             {
               loader: 'css-loader',
           options: {
           sourceMap: true
         }
       }]
          })
       },
      /* {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            emitFile: true,
            useRelativePath: true
       }
     },*/
     {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
       loader: "url-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          emitFile: true,
          useRelativePath: true
     }
   },
     /*{
      test: /\.(jpe?g|png|gif|svg)$/i,
       loader: 'file-loader?limit=1024',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          emitFile: true,
          useRelativePath: true
     }
   },*/
   {
    test: /\.(jpe?g|png|gif|svg)$/i,
     loader: "url-loader",
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        emitFile: true,
        useRelativePath: true
   }
 },
  ]
},
plugins: [
 new ExtractTextPlugin('[name].css'),
 new HtmlWebpackPlugin({
	 filename: 'index.html',
	 template: './source/layout.pug'
 }),
 new HtmlWebpackPlugin({
	 filename: 'cards/cards.html',
   template: './source/UI kit/cards/cards.pug',
   //chunks: ["cards/cards", "images", "fonts"]
   excludeChunks: [ 'colorsNtype/colorsNtype', 'FormElements/FormElements', 'headersNfooters/headersNfooters' ],
   fixAssets: true
 }),
 new HtmlWebpackPlugin({
  filename: 'colorsNtype/colorsNtype.html',
  template: './source/UI kit/colors&type/colorsNtype.pug',
  excludeChunks: [ 'cards/cards', 'FormElements/FormElements', 'headersNfooters/headersNfooters'  ],
  fixAssets: true
  //chunks: ["colorsNtype/colorsNtype", "images", "fonts"]
 }),
 new HtmlWebpackPlugin({
  filename: 'FormElements/FormElements.html',
  template: './source/UI kit/FormElements/FormElements.pug',
  excludeChunks: [ 'colorsNtype/colorsNtype', 'cards/cards', 'headersNfooters/headersNfooters'  ],
  fixAssets: true
  //chunks: ["FormElements/FormElements", "images", "fonts"]
 }),
 new HtmlWebpackPlugin({
  filename: 'headersNfooters/headersNfooters.html',
  template: './source/UI kit/headers&footers/headersNfooters.pug',
  excludeChunks: [ 'colorsNtype/colorsNtype', 'FormElements/FormElements', 'cards/cards'  ],
  fixAssets: true
  //chunks: ["headersNfooters/headersNfooters", "images", "fonts"]
 }),
 new HtmlWebpackPathAssetsFix(),
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
