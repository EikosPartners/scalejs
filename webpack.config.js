var path = require('path');
module.exports = {
    entry: "./src/scalejs.core.js",
    output: {
        path: 'src',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: [
                    path.join(__dirname, 'src')
                ],
                exclude: /\.html?$/,
                query: {
                  presets: 'es2015',
                }
            }
        ]
    }
};