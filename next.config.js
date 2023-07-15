/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    SECRET: process.env.SECRET,
  },
};

module.exports = nextConfig;
