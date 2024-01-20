/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "localhost",
                protocol: 'http',
            },
            {
                hostname: "hippoexchange.onrender.com",
                protocol: "https",
            }
        ]
    }
}

module.exports = nextConfig
