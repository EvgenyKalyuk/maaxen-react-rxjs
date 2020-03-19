const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.tsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                exclude: [
                    /node_modules/,
                    path.join(__dirname, 'src', 'theme')
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: [
                    path.join(__dirname, 'src', 'theme')
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src', 'assets'),
                to: path.join(__dirname, 'dist', 'assets')
            }]
        )
    ],

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src', 'components'),
            'node_modules'
        ],
        extensions: ['.js', '.ts', '.tsx']
    }
};
