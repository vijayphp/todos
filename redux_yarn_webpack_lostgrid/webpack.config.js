const webpack = require( 'webpack' );
const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const LostGridPlugin = require( 'lost' );

module.exports = {
    entry: {
        'home': './app/index.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' , 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        LostGridPlugin
    ]
}