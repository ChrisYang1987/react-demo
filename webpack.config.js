'use strict';

var webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	srcPath = path.join(__dirname, '');


module.exports = {
	entry : {
		index : 'app.js'
	},

	output : {
		path : __dirname + '/tmp',
		publicPath : '',
		filename : '[name].js'
	},

	resolve : {
		root : srcPath,
		moduleDirectories : ['node_modules', srcPath]
	},

	module : {
		loaders : [
			{test : /\.jsx?$/, exclude : /node_modules/, loader : 'babel', query : {presets : ['es2015', 'react', 'stage-0']}}
		]
	},
	plugins : [
        new HtmlWebpackPlugin({
          inject : true,
          template : 'index.html'
        })

    ],

	debug : true,

	devtool : 'eval',

	devServer : {
		contentBase : './tmp'
	}
}