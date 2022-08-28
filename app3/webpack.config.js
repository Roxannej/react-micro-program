const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const config = {
  mode:'development',
  devServer: {
    port:8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'microFrontApp3',
      filename: 'remoteEntry.js',
      exposes:{
        './MicroFrontEnd3Index': './src/index'
      }
    })
  ]
}
module.exports = config