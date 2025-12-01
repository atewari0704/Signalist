const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.seekingalpha.com',
            },
        ],
    },
};

export default nextConfig;