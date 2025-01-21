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
        source: '/lp/aiweb/:path*',
        destination: '/lp/aiweb/dist/:path*', // LPの静的ファイルのパス
      },
    ];
  },
};

module.exports = nextConfig;
