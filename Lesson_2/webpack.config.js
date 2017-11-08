const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'app', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		library: 'lib',
	},
	devtool: 'source-map'
}