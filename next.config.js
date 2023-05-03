/** @type {import('next').NextConfig} */
const StylelintPlugin = require("stylelint-webpack-plugin"); // line to add
module.exports = {
  reactStrictMode: true,
  // lines to add
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.PUBLIC_HOSTNAME,
      
      },
    ],
  },
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },

};