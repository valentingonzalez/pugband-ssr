const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          $enable-negative-margins: true;
          @import "~bootstrap/scss/bootstrap";
        `
      }
    }
  }
})
