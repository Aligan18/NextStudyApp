/** @type {import('next').NextConfig} */
const StylelintPlugin = require("stylelint-webpack-plugin"); // line to add
module.exports = {
  reactStrictMode: true,
  // lines to add
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.PUBLIC_HOSTNAME,
      },
    ],
  },

  webpack: (config) => {
    config.plugins.push(new StylelintPlugin());
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};
