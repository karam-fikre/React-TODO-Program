var webpack = require("webpack");
var path= require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");

var config = {
entry: SRC_DIR + "/app/index.js",
output:{
  path: DIST_DIR + "/app",
  publicPath:"/app/"
},
externals: {
    'React': 'react'
},
plugins: [
    new HtmlWebpackPlugin({ title: 'Todo app', }),
 ],
module:{
  loaders:[
    {
      test:/\.js?/,
      include:SRC_DIR,
      loader:"babel-loader",
      query:{
        presets:["react"]
      }
    },
    {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }
      ]
}
};

module.exports=config;
