'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function ConnectButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Por favor instala MetaMask o una wallet compatible');
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
  };

  if (isConnected) {
    return (
      <motion.button
        onClick={disconnectWallet}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-green-400/30 hover:border-green-400/50 backdrop-blur-sm"
        aria-label="Desconectar wallet"
      >
        {/* Neural glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        
        {/* Content */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm">{address.slice(0, 6)}...{address.slice(-4)}</span>
          <span className="text-xs text-green-300">Desconectar</span>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={connectWallet}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25"
      aria-label="Conectar wallet"
    >
      {/* Neural glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Content */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <span>Conectar Wallet</span>
        <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </motion.button>
  );
}
