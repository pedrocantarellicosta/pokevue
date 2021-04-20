module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/styles/setup/variables';
          @import '@/styles/setup/reset';
          @import '@/styles/setup/breakpoints-mixins';
          @import '@/styles/setup/typography';
        `,
      },
    },
  },
};
