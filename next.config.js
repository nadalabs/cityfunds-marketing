/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
};
