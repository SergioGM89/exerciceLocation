const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "src", "index.js"),
      nieve: path.resolve(__dirname, "src", "nieve.js"),
      confetti: path.resolve(__dirname, "src", "confetti.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, "src", "index.html"),
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'nieve.html',
        template: path.resolve(__dirname, "src", "nieve.html"),
        chunks: ['nieve']
      }),
      new HtmlWebpackPlugin({
        filename: 'confetti.html',
        template: path.resolve(__dirname, "src", "confetti.html"),
        chunks: ['confetti']
      }),
      new MiniCssExtractPlugin()
    ],
    devServer:{
      hot: false,
    }
}


