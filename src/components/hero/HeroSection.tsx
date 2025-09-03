'use client';

import { motion } from 'framer-motion';
import { ConnectButton } from '@/components/ui/ConnectButton';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set());
  const [transactionNodes, setTransactionNodes] = useState<Array<{id: string, x: number, y: number, type: string, timestamp: number}>>([]);
  const [networkActivity, setNetworkActivity] = useState(0);

  // Simulate blockchain network activity
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new transactions
      if (Math.random() > 0.7) {
        const newTransaction = {
          id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          x: Math.random() * 800 + 100,
          y: Math.random() * 600 + 100,
          type: Math.random() > 0.5 ? 'transfer' : 'stake',
          timestamp: Date.now()
        };
        setTransactionNodes(prev => [...prev.slice(-5), newTransaction]); // Keep only last 5
      }

      // Simulate network activity
      setNetworkActivity(prev => Math.min(100, prev + Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Simulate connection activation
  useEffect(() => {
    const connectionInterval = setInterval(() => {
      const connections = [
        'left-cluster', 'right-cluster', 'center-path', 'cross-1', 'cross-2',
        'diagonal-1', 'diagonal-2', 'bottom-path', 'neural-1', 'neural-2'
      ];
      
      const randomConnection = connections[Math.floor(Math.random() * connections.length)];
      setActiveConnections(prev => {
        const newSet = new Set(prev);
        newSet.add(randomConnection);
        return newSet;
      });

      // Remove connection after some time
      setTimeout(() => {
        setActiveConnections(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomConnection);
          return newSet;
        });
      }, 3000);
    }, 1500);

    return () => clearInterval(connectionInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-pink-500/5"></div>
        
        {/* Interactive Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          {/* Neural nodes with blockchain activity indicators */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group">
            <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Node: 0x7a3b...f9c2
            </div>
          </div>
          
          <div className="absolute top-20 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Validator: 0x4f8e...a1d7
            </div>
          </div>
          
          <div className="absolute top-20 left-60 w-1 h-1 bg-purple-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-purple-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Smart Contract
            </div>
          </div>
          
          <div className="absolute top-20 left-80 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-pink-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Liquidity Pool
            </div>
          </div>
          
          {/* More interactive nodes */}
          <div className="absolute top-40 left-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Ticket NFT
            </div>
          </div>
          
          <div className="absolute top-40 left-52 w-2 h-2 bg-blue-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-blue-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Cross-Chain Bridge
            </div>
          </div>
          
          {/* Right side interactive nodes */}
          <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-purple-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Governance DAO
            </div>
          </div>
          
          <div className="absolute top-20 right-40 w-1 h-1 bg-pink-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.7s' }}>
            <div className="absolute inset-0 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-pink-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Staking Pool
            </div>
          </div>
          
          {/* Center interactive nodes */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse cursor-pointer hover:scale-150 transition-transform duration-300 group" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Protocol Core
            </div>
          </div>
          
          {/* Dynamic transaction nodes */}
          {transactionNodes.map((tx) => (
            <motion.div
              key={tx.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{ left: tx.x, top: tx.y }}
              className={`absolute w-2 h-2 rounded-full cursor-pointer z-20 ${
                tx.type === 'transfer' ? 'bg-green-400' : 'bg-orange-400'
              }`}
            >
              <div className={`absolute inset-0 w-2 h-2 rounded-full animate-ping ${
                tx.type === 'transfer' ? 'bg-green-400' : 'bg-orange-400'
              } opacity-75`}></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-green-400 text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tx.type === 'transfer' ? 'Transfer' : 'Stake'} - {tx.id.slice(-6)}
              </div>
            </motion.div>
          ))}
          
          {/* Interactive Neural connections with blockchain activity */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
            {/* Left cluster connections */}
            <path 
              d="M 80 80 Q 120 80 160 80" 
              stroke={activeConnections.has('left-cluster') ? "url(#activeGradient)" : "url(#cyanGradient)"} 
              strokeWidth={activeConnections.has('left-cluster') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('left-cluster') ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' : 'none'
              }}
            />
            
            <path 
              d="M 80 80 Q 100 100 120 120" 
              stroke={activeConnections.has('neural-1') ? "url(#activeGradient)" : "url(#blueGradient)"} 
              strokeWidth={activeConnections.has('neural-1') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('neural-1') ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : 'none',
                animationDelay: '0.5s'
              }}
            />
            
            <path 
              d="M 120 120 Q 140 120 160 120" 
              stroke={activeConnections.has('neural-2') ? "url(#activeGradient)" : "url(#purpleGradient)"} 
              strokeWidth={activeConnections.has('neural-2') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('neural-2') ? 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.8))' : 'none',
                animationDelay: '1s'
              }}
            />
            
            {/* Right cluster connections */}
            <path 
              d="M 720 80 Q 680 80 640 80" 
              stroke={activeConnections.has('right-cluster') ? "url(#activeGradient)" : "url(#purpleGradient)"} 
              strokeWidth={activeConnections.has('right-cluster') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('right-cluster') ? 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.8))' : 'none',
                animationDelay: '0.2s'
              }}
            />
            
            {/* Center connections */}
            <path 
              d="M 400 128 Q 400 160 400 192" 
              stroke={activeConnections.has('center-path') ? "url(#activeGradient)" : "url(#cyanGradient)"} 
              strokeWidth={activeConnections.has('center-path') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('center-path') ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' : 'none',
                animationDelay: '0.1s'
              }}
            />
            
            {/* Cross connections */}
            <path 
              d="M 160 80 Q 280 80 400 128" 
              stroke={activeConnections.has('cross-1') ? "url(#activeGradient)" : "url(#cyanGradient)"} 
              strokeWidth={activeConnections.has('cross-1') ? "2" : "0.5"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('cross-1') ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' : 'none',
                animationDelay: '0.3s'
              }}
            />
            
            <path 
              d="M 640 80 Q 520 80 400 128" 
              stroke={activeConnections.has('cross-2') ? "url(#activeGradient)" : "url(#purpleGradient)"} 
              strokeWidth={activeConnections.has('cross-2') ? "2" : "0.5"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('cross-2') ? 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.8))' : 'none',
                animationDelay: '0.8s'
              }}
            />
            
            {/* Diagonal connections */}
            <path 
              d="M 200 120 Q 300 160 400 192" 
              stroke={activeConnections.has('diagonal-1') ? "url(#activeGradient)" : "url(#pinkGradient)"} 
              strokeWidth={activeConnections.has('diagonal-1') ? "2" : "0.5"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('diagonal-1') ? 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.8))' : 'none',
                animationDelay: '1.3s'
              }}
            />
            
            <path 
              d="M 600 120 Q 500 160 400 192" 
              stroke={activeConnections.has('diagonal-2') ? "url(#activeGradient)" : "url(#blueGradient)"} 
              strokeWidth={activeConnections.has('diagonal-2') ? "2" : "0.5"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('diagonal-2') ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : 'none',
                animationDelay: '0.9s'
              }}
            />
            
            {/* Bottom connections */}
            <path 
              d="M 400 256 Q 320 256 240 256" 
              stroke={activeConnections.has('bottom-path') ? "url(#activeGradient)" : "url(#purpleGradient)"} 
              strokeWidth={activeConnections.has('bottom-path') ? "2" : "1"} 
              fill="none" 
              className="animate-pulse cursor-pointer hover:stroke-width-2 transition-all duration-300"
              style={{ 
                filter: activeConnections.has('bottom-path') ? 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.8))' : 'none',
                animationDelay: '1.4s'
              }}
            />
            
            {/* Gradients for neural connections */}
            <defs>
              <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 1)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.8)" />
              </linearGradient>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.6)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.3)" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" />
              </linearGradient>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
                <stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Network Activity Indicator */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-cyan-400/30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs sm:text-sm font-mono">Network: {Math.round(networkActivity)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full transition-all duration-1000"
              style={{ width: `${networkActivity}%` }}
            ></div>
          </div>
        </div>
        
        {/* Floating neural nodes */}
        <div className="absolute top-20 left-20 w-72 h-72">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-neural-pulse"></div>
        </div>
        
        <div className="absolute top-40 right-20 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute bottom-20 left-1/2 w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-pink-400 rounded-full animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Neural connections */}
        <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-pink-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 sm:mb-12"
        >
          {/* Main Title with Neural Glow */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="gradient-text relative">
                TicketSafer
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-30 animate-pulse"></div>
              </span>
              <br />
              <span className="text-white relative">
                Protocol
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-white/10 blur-xl opacity-20"></div>
              </span>
            </h1>
            
            {/* Floating particles around title */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-float"></div>
            <div className="absolute -top-2 -right-8 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-2 -left-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Description with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-8 sm:mb-12"
          >
            <div className="glassmorphism-neural rounded-3xl p-4 sm:p-6 lg:p-8 border border-cyan-400/20 shadow-2xl shadow-cyan-500/10">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                El <span className="text-cyan-400 font-semibold relative">
                  AWS del Entertainment Web3
                  <div className="absolute inset-0 bg-cyan-400/20 blur-sm -z-10"></div>
                </span>. 
                Protocolo fundamental que toda la industria del entretenimiento usa para tickets, 
                pagos y verificación.
              </p>
            </div>
          </motion.div>
          
          {/* Action Buttons with Neural Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <div className="relative group">
              <ConnectButton />
              {/* Neural glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-500/25 text-sm sm:text-base"
            >
              {/* Neural glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>Ver Documentación</span>
                <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-transparent to-transparent hover:from-white/10 hover:to-white/5 text-white font-semibold rounded-xl transition-all duration-300 border-2 border-cyan-400/50 hover:border-cyan-400/80 backdrop-blur-sm text-sm sm:text-base"
            >
              {/* Neural glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Demo en Vivo</span>
                <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Killer Features with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 px-3 sm:px-4"
        >
          {[
            {
              icon: '⚡',
              title: 'Cross-Chain Nativo',
              description: 'Atomic swaps instantáneos entre todas las blockchains',
              color: 'from-cyan-500 to-blue-500',
              glow: 'cyan'
            },
            {
              icon: '🔒',
              title: 'ZK-Proofs',
              description: 'Privacidad total con compliance regulatorio',
              color: 'from-purple-500 to-pink-500',
              glow: 'purple'
            },
            {
              icon: '🤖',
              title: 'AI Anti-Bot',
              description: 'Elimina bots 100% con machine learning avanzado',
              color: 'from-green-500 to-emerald-500',
              glow: 'green'
            },
            {
              icon: '💎',
              title: 'DeFi Integrado',
              description: 'Instant settlements y yield farming para venues',
              color: 'from-orange-500 to-red-500',
              glow: 'orange'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glassmorphism-neural rounded-2xl p-4 sm:p-6 h-full hover:scale-105 transition-all duration-300 border border-white/10 hover:border-cyan-400/30">
                {/* Neural glow background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${feature.glow}-500/25`}>
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Floating neural particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Preview with Neural Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-3 sm:px-4"
        >
          {[
            { value: '100M+', label: 'Tickets Procesados', color: 'cyan' },
            { value: '10K+', label: 'Venues Integrados', color: 'purple' },
            { value: '$5B+', label: 'GMV Anual', color: 'green' },
            { value: '50+', label: 'Países', color: 'orange' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="glassmorphism-neural rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2 relative`}>
                  {stat.value}
                  {/* Neural glow */}
                  <div className={`absolute inset-0 text-${stat.color}-400 blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                
                {/* Floating neural particles */}
                <div className={`absolute top-2 right-2 w-1 h-1 bg-${stat.color}-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator with Neural Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            ></motion.div>
          </div>
          {/* Neural glow */}
          <div className="absolute inset-0 w-6 h-10 border-2 border-cyan-400/20 rounded-full blur-sm"></div>
        </div>
      </motion.div>
    </section>
  );
}
