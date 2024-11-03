const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  stats: "errors-only",

  entry: "./src/js/index.js",

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, " build"),
    },

    compress: true,

    port: 9000,

    open: true,

    devMiddleware: {
      writeToDisk: true,
      stats: 'errors-only',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/chicken.html",
      filename: "chicken.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/margaret.html",
      filename: "margaret.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/vegetable.html",
      filename: "vegetable.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ],
};
