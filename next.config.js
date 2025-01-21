/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/lp/aiweb',
        destination: '/lp/aiweb/index.html',
      },
      {
        source: '/lp/aiweb/',
        destination: '/lp/aiweb/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
