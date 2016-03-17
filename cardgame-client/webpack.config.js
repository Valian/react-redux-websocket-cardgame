var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './cardgame-client/index'
    ],
    output: {
        path: path.join(__dirname, 'cardgame-client', 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        root: [
            path.resolve('cardgame-client')
        ],
        extensions: ['', '.js', '.jsx']
    }
}