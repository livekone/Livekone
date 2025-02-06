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
        source: '/lp/aiweb/:path*',
        destination: '/lp/aiweb/:path*',
      },
      {
        source: '/lynx',
        destination: '/lynx/index.html',
      },
      {
        source: '/lynx/:path*',
        destination: '/lynx/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
