const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'doc', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
    },
};
