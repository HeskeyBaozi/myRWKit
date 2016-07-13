var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};