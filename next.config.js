/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  test: /\.svg$/,
  
  use: [
    {
      loader: '@svgr/webpack',
      options: { 
            prettier: false,
            svgo : true,
            svgoConfig :{
              plugins: [{removeViewBox: false}]
            },
      titleProp: true,
        
      },
    },
  ],
}

module.exports = nextConfig
