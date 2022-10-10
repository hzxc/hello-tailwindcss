/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
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
      {
        source: '/gate/:path*',
        destination: 'https://data.gateapi.io/api2/1/:path*',
      },
      {
        source: '/bsctestapi/:path*',
        destination: 'https://bsctestapi.terminet.io/:path*',
      },
    ];
  },
};
