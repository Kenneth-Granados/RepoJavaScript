const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//  const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules: [
            {
                test:/\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            { 
                test:/\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                        //options: { minimize: true } para que el htm salga en una sola linea y sin comentarios
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //                 name: 'assets/[name].[ext]',
            //                 esModule: false
                            //no funciono investigar razón
            //             }
            // },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            //desarrollo
            filename: '[name].css',
            ignoreOrder: false
        }),
    //     new CopyPlugin({
    //         patterns: [
    //           { from: "src/assets", to: "assets/" },
    //         ],
    //       }),
     ]

}

// una expresion regular(\.) y permite buscar coincidencias de lo que espefique adentro