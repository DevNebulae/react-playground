const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const dist = path.resolve(process.cwd(), "dist/")
const src = path.resolve(process.cwd(), "src/")

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000
  },
  entry: {
    app: path.resolve(src, "index.js")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      template: path.resolve(src, "index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
}
