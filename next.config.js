module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': {page: '/'},
    };
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
};
