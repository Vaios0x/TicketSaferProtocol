/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para producción
  output: 'standalone',
  
  // Excluir archivos de Hardhat del build
  experimental: {
    esmExternals: 'loose',
  },
  
  webpack: (config, { isServer, dev }) => {
    // Solo aplicar configuraciones especiales en producción
    if (!dev) {
      // Excluir archivos de Hardhat y contratos
      config.module.rules.push({
        test: /\.(sol|ts)$/,
        include: [/contracts/, /scripts/, /hardhat\.config/],
        loader: 'ignore-loader'
      });
      
      // Excluir módulos problemáticos
      config.externals = config.externals || [];
      if (!isServer) {
        config.externals.push({
          'hardhat': 'hardhat',
          '@nomicfoundation/hardhat-toolbox': '@nomicfoundation/hardhat-toolbox',
          '@openzeppelin/hardhat-upgrades': '@openzeppelin/hardhat-upgrades',
          'solidity-coverage': 'solidity-coverage',
          'pino': 'pino',
          'pino-pretty': 'pino-pretty'
        });
      }
    }
    
    // Fallbacks para módulos de Node.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
      util: false,
      buffer: false,
      events: false,
    };
    
    return config;
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  images: {
    domains: ['localhost', 'ipfs.io', 'gateway.pinata.cloud'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
