const WorkboxPlugin = require('workbox-webpack-plugin'),
      path= require('path'),
      htmlPlugin = require ('html-webpack-plugin'),
    {CleanWebpackPlugin} = require ('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './client/app.js'], // assumes your entry point is the index.js in the root of your project folder
  plugins: [
      new CleanWebpackPlugin(),
      new htmlPlugin({
        filename: 'index.html',
        template: 'templates/index.html'
      }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      swDest: 'service-worker.js',
        runtimeCaching: [{
    urlPattern: new RegExp('http://localhost:4000/'),
    handler: 'NetworkFirst'
  }]
    }),
  ],
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
