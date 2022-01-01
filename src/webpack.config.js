var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist", "assets"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ 
      test: /\.(js|jsx)$/, 
      exclude: /node_modules/, 
      loader: "babel-loader",
      presets: ["es2015", "react"]},
    {
      test:/\.css$/, loader: "style-leader!css-loader"
    }]
  }
};