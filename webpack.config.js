var webpack = require('webpack'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
        path: path.resolve('project'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].bundle.js'
            // publicPath: './'
    },
    resolve: {
        //配置vue路径
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new ExtractTextWebpackPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: 'body',
            chunks: ['index']
        })
    ],
    devServer: {
        port: 8080,
        contentBase: 'project',
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextWebpackPlugin.extract('css-loader?-url&-reduceTransforms')
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            //todo
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=15240&name=img/[name].[ext]'
        }]
    }
}