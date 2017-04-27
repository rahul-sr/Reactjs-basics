var path = require('path');
var webpack = require('webpack');
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';


const entry = PRODUCTION ? [
    './src/js/client.jsx',
] : [
    './src/js/client.jsx',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
];

module.exports = {
    entry: entry,
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'

    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: '/node_modules/'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: ['url-loader?limit=10000&name=images/image-[hash:12].[ext]']
        }]
    }
};
