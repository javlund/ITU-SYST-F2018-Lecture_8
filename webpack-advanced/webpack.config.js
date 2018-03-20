const path = require('path');

module.exports = {
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
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
                        name: 'dist/images/[name]-[hash].[ext]'
                    }
                }],
            }
        ]
    }
}