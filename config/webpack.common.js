const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const srcPath = subPath => path.join(__dirname, '../src', subPath);

module.exports = {
    context: path.resolve('./src'),
    entry: './main.scss',
    output: {
        path: path.join(__dirname, '..', '/public'),
        filename: 'static/trash/[name].js',
    },
    resolve: {
        extensions:  ['.js', '.scss', '.css', '.html'],
        alias: {
            styles: srcPath('styles'),
        }
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: false,
                            localIdentName: '[local][hash:base64:10]',
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({ browsers: ['Safari >= 8', 'last 2 versions'] })]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: false,
                            includePaths: ["../"]
                        }
                    },
                ],
                sideEffects: true
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: 'static/images/[name].[hash].[ext]'
                    }
                }
            },
            {

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: srcPath('index.html'),
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1'
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash].css',
        }),
    ]
};
