import type { NextConfig } from "next";
 module.exports = {
  experimental: {
    urlImports: ['https://www.gstatic.com/firebasejs/'],
  },
}
const nextConfig: NextConfig = {
 
  reactCompiler: true,
};

export default nextConfig;
