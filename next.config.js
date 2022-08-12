/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'edamam-product-images.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
