const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  devServer: {
    port:8083
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./public/index.html'
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
        test: /\.svg/,
        use: ['file-loader']
      }
    ]
  }
}