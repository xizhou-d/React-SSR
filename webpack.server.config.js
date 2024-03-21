const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const serverConfig = {
    devtool: false,
    entry: path.resolve(__dirname, 'src/server/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
        clean: true,
        publicPath: '/'
    },
    target: 'node',
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                test: /.scss?/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false,
                            modules: true,
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg|jpe?g|svg|gif|png$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]_[hash:8][ext]',
                    emit: false,
                    // 这里需注意，客户端服务端都要配置，可保证客户端服务端的url是一样的
                    publicPath: './'
                }
            }
        ]
    },
}

module.exports = merge(baseConfig, serverConfig)
