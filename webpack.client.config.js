const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const clientConfig = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/client'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.[hash:5].js',
        clean: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss?|.sass?/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.jpg|jpe?g|svg|gif|png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]_[hash:8][ext]',
                    // 这里需注意，客户端服务端都要配置，可保证客户端服务端的url是一样的
                    publicPath: './'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/bundle.[hash:5].css'
        })
    ]
}

module.exports = merge(baseConfig, clientConfig)
