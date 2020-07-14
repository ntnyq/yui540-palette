module.exports = {
  mode: process.env.MODE,

  entry: './src/index.tsx',

  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': `${__dirname}/src`,
    },
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        exclude: /node_modules/,
        include: `${__dirname}/src/icons`,
        options: {
          symbolId: 'icon-[name]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        exclude: `${__dirname}/src/icons`,
        options: {
          limit: 1e4,
          name: './images/other/[name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\*js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/public`,
    open: true,
    port: 9527,
  },
}
