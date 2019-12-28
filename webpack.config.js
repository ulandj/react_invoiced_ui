module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: ['node_modules', 'lib', 'app', 'vendor'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./vendor', './app'],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
        },
      },
    ],
  },
  plugins: [
  ],
};
