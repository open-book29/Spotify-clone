/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'yelwqmbwnfvarvgotjpw.supabase.co',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
