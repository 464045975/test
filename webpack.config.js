var webpack = require("webpack");

module.exports = {
	entry: './enter.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
           test: /\.css$/, loader: 'style-loader!css-loader'
		}]
	},
	// 插件
	plugins:[
	    new webpack.BannerPlugin('This file is created by zhaoda')
	]
}