/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.BASE_API_URL}/:path*`,
    },
  ],
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }],
  },
};

export default nextConfig;
