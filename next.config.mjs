/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "photos.zillowstatic.com" }],
    },
};

export default nextConfig;
