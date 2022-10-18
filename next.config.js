/** @type {import("next").nextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      newNextLinkBehavior: true,
    },
    images: {
      domains: [
        'files.stripe.com',
      ],
    },
  }
  
  module.exports = nextConfig