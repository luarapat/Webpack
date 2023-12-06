const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname, './dist')
    }, module: {
        rules:[ //incluir
        {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader'
        ]//termina aqui
        }
       ]
      }
    }