const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		assetModuleFilename: '[name][ext]',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test:  /\.(s?)css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|svg|ico|jpeg|gif)$/i,
				use: [
					{
					  loader: 'file-loader',
					  options: {
						name: '[name].[ext]',
						outputPath: 'assets/images',
					  },
					},
				  ],
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/assets/favicon.ico',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/robots.txt', to: 'robots.txt' },
			  ],
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
};
