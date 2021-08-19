
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['2KEBy6mp6d3m6NJYtSqVoy'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  