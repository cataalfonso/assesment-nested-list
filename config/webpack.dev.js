const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const common = require("./webpack.common");
const { HotModuleReplacementPlugin } = require("webpack");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: "../dist",
    },
    hot: true,
    historyApiFallback: true
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
  module:{
    rules:[
        {
            use: ["style-loader", "css-loader"],
            test: /\.(css)$/,
          },
    ]
  }
};

module.exports = merge(common, devConfig);
