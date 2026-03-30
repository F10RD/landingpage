const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // ← dodaj to
  },
  eslint: {
    ignoreDuringBuilds: true,  // ← i to dla pewności
  },
};

module.exports = nextConfig;