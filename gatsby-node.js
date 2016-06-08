export function modifyWebpackConfig(config, stage) {
  config.removeLoader('md')
  config.loader('md', {
    test: /\.md$/,
    loader: 'babel-loader!reactdown/webpack'
  })

  return config
}
