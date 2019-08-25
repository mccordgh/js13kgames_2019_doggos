const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isProduction = process.env.npm_lifecycle_event === 'build'

let config = {
  entry: './src',
  devtool: !isProduction && 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: isProduction && {
        collapseWhitespace: true
      },
      inlineSource: isProduction && '\.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new OptimizeCssAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin([
      { from: './src/res', to: './src/res' }
    ]),
  ],
  devServer: {
    stats: 'minimal',
    overlay: true
  }
};

if(!isProduction) {
  config.devtool = 'eval-source-map'
} else {
  config.plugins = config.plugins.concat([
		new CompressionPlugin({
			filename: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.html$/,
			threshold: 0,
			minRatio: 1
		})
  ])
}

module.exports = config;
