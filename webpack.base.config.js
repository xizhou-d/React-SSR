const path = require('path')

module.exports = {
    mode: 'development',
    watch: true,
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules:[
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}