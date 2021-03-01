const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports ={
    mode: "development",
    entry : "./src/index.js",
    output: {
        filename:"bundle.[fullhash].js",
        path:path.resolve(__dirname,"dist"),
    },
    plugins:[ new HtmlWebPackPlugin({template:"./src/index.html"})],
    resolve:{
        modules:[__dirname,"src","node_modules"],
        extensions:["*",".js",".jsx", ".tsx", ".ts"],
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:require.resolve("babel-loader")
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                'file-loader',
                ],
            },
        ],
    },
    devServer:{
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
      },
}