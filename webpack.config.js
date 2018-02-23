const path = require("path");
// var nodeExternals = require("webpack-node-externals");

module.exports = [
  {
    devtool: "sourcemap",
    target: "node",
    entry: "./src/server.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js"
    },
    externals: ["express"],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query: {
            presets: ["es2015", "react"]
          }
        }
      ]
    }
  }
];
