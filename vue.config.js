module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~pattern-scss/variables.scss";
          @import "~pattern-scss/mixins/text-truncate.scss";
          @import "~pattern-scss/mixins/flex-center.scss";
          @import "~pattern-scss/mixins/clearfix.scss";
          @import "~pattern-scss/mixins/breakpoints.scss";
          @import "~pattern-scss/mixins/triangle.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    // 壓縮圖片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false
        },
        pngquant: {
          quality: [0.1, 0.5],
          speed: 4
        },
        gifsicle: {
          interlaced: false
        }
        // webp: { quality: 75 }
      });
  },
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  }
};
