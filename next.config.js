/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      // 'robohash.org',
      // 'assets-cdn.trustwallet.com',
      // 's2.coinmarketcap.com',
      // 'tokens.pancakeswap.finance',
      // 'assets.coingecko.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/pancake/:path*',
        destination: 'https://tokens.pancakeswap.finance/:path*',
      },
    ];
  },
};
