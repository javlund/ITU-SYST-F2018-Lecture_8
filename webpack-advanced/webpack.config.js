const path = require('path');

module.exports = {
    output: {
        filename: 'main.js',
        publicPath: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg|.png|.gif|.jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].[ext]',
                        outputPath: '/images/'
                    }
                }],
            }
        ]
    }
}