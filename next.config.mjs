/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['raw.githubusercontent.com', 'pokeapi.co'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pokeapi.co',
                port: '',
                pathname: '/api/v2/pokemon/**',
            },
        ],
    },
};

export default nextConfig;
