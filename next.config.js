const withImages = require('next-images');

module.exports = withImages({
  env: {
    theme: 'studio',
    activeSite: 'actual-studio',
    siteOption: 'studio',
    cdnUrl: 'https://d116li125og699.cloudfront.net'
  },
});

// module.exports =
//  withImages(),
//  env: {
//  },
//
//
// var withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//
// })
