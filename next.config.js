/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

  images: {
    domains: ['files.stripe.com'],
  },
};

module.exports = nextConfig;
