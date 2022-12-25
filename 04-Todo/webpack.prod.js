const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    mode: 'production',
    output: {
        filename: 'main.[hash].js',
        // clean: true,
    },
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
                        
                    }
                ]
            },
        
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.[hash].html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            ignoreOrder: false
        }),
    ]

}
