// next.config.mjs
const nextConfig = {
    dir: './app',

    images: {
      domains: [
        'res.cloudinary.com',
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com',
        'fakestoreapi.com',
        'google.com',
        'console.firebase.google.com'
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        }
      ]
    }
  };

  export default nextConfig;
