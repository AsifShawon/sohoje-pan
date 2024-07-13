import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "img.daisyui.com",
            }
        ]
    }
};

export default nextConfig;
