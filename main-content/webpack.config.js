const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode:'development',
  devServer: {
    port:8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'container',
      remotes: {
        microFrontApp1:'microFrontApp1@http://localhost:8083/remoteEntry.js',
        microFrontApp3:'microFrontApp3@http://localhost:8081/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,"public", "index.html"),
      filename: 'index.html',
      favicon:'./public/favicon.ico',
      manifest:'./public/manifest.json'
    })
  ],
  resolve: {
    extensions:['.ts', '.js', '.tsx', '.jsx']
  },
  module: {
    rules:[
      { 
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test:/.(css|less)$/,
        use: ['style-loader','css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: ['file-loader']
      }
    ]
  }
}