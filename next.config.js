const withImages = require('next-images');

module.exports = withImages({
  env: {
    theme: 'studio',
    activeSite: 'actual-studio',
    siteOption: 'studio',
    siteId: '5850560ad21cb61c6eae217a',
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
