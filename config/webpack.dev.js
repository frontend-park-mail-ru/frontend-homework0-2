const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        publicPath: '/',
        port: 5000,
        historyApiFallback: true,
        compress: true,
    },
});
