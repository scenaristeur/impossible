const publicPath = process.env.NODE_ENV === 'production' ? '/impossible/' : '/'

module.exports = {
  // options...
  publicPath: publicPath,
  // browser-vue https://github.com/ipfs/js-ipfs/blob/c47a6335b77d5284711f13a83349000820f85775/examples/browser-vue/vue.config.js
  chainWebpack: config => {
    config.resolve.symlinks(false),
    config.module
    .rule('vue')
    .use('vue-loader')
    .loader('vue-loader')
    .tap(options => {
      options.transformAssetUrls = {
        img: 'src',
        image: 'xlink:href',
        'b-avatar': 'src',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }

      return options
    })
  },
}
