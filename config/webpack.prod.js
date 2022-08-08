const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */

const prodConfig = {
  mode: "development",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module:{
    rules:[
        {
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            test: /\.(css)$/,
          },
    ]
  },
  plugins:[new MiniCssExtractPlugin()]
};

module.exports = merge(common, prodConfig);
