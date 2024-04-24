/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["*"],
    remotePatterns: [{ protocol: "https", hostname: "*" }],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "ichef.bbci.co.uk",
    //     pathname: "*",
    //   },
    // ],
  },
};
// ichef.bbci.co.uk;
export default nextConfig;
