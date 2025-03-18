/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JWT_SECRET: "326bg32kj632bgkjbkj327bvkjh2v",
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
