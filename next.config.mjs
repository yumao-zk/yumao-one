const config = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/notes/:slug*',
        permanent: true,
      },
    ];
  },
};

export default config;
