/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
       domains:["robohash.org"] 
    },
    async rewrites(){
        return [
            {
                source:'/:path',
                destination:`${process.env.CLIENT_BASE_URL}/:path*`
            }
        ]
    }
}

module.exports = nextConfig
