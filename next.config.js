/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "localhost",
                protocol: 'http',
            },
            {
                hostname: "hippoexchange-production.up.railway.app",
                protocol: "https",
            }
        ]
    }
}

module.exports = nextConfig
