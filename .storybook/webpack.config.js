module.exports = function (storybookBaseConfig) {
  storybookBaseConfig.resolve.extensions.push('.css');
  storybookBaseConfig.module.loaders.push({
    test: /.css$/,
    loaders: ['style', 'css'],
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.png$/,
    loader: 'url?limit=100000&mimetype=image/png',
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.jpg$/,
    loader: 'file',
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.(ttf|eot|svg|gif)(\?[\s\S]+)?$/,
    loader: 'file',
  });
  storybookBaseConfig.module.loaders.push({
    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
  });

  // Return the altered config
  return storybookBaseConfig;
};
