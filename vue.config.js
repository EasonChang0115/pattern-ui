module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/mixins/_text-truncate.scss";
          @import "@/scss/mixins/_flex-center.scss";
          @import "@/scss/mixins/_clearfix.scss";
          @import "@/scss/mixins/_breakpoints.scss";
          @import "@/scss/mixins/_triangle.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    // 壓縮圖片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.1, 0.5],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
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
      },
    },
  },
};
