module.exports = {
  entry: './client/app.js', // assumes your entry point is the index.js in the root of your project folder

  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js',
  },
    mode: 'development',
    context: __dirname,
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,

        loader: 'babel-loader',
      },
      {
        test:  /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      }
    ],
  },
};
