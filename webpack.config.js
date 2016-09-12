var path = require("path");
var webpack = require("webpack");
//console.log(path.resolve(__dirname));
module.exports = {
	/*entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname, './index.js')
	],*/
	/*entry: {
		index: './index.js'
			//app: 'index.js'
	},*/
	entry: './index.js',
	output: {
		//path: path.resolve(__dirname, './build'), //__dirname + './build',
		publicPath: '',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', 'jsx']
	},
	/**/
	module: {
		loaders: [
			/**/
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
				exclude: /node_modules/
			},
			/*{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=react,presets[]=es2015',
				exclude: /node_modules/
			},*/
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.less/,
				loader: 'style!css!less'
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
	/*,
	plugins: [
		new webpack.NoErrorsPlugin()
	]*/
}