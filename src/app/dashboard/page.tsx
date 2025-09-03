'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NetworkVisualization } from '@/components/visualization/NetworkVisualization';
import { ProtocolStats } from '@/components/dashboard/ProtocolStats';
import { StakingPanel } from '@/components/staking/StakingPanel';
import { LiquidityPanel } from '@/components/defi/LiquidityPanel';
import { GovernancePanel } from '@/components/governance/GovernancePanel';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [protocolStats, setProtocolStats] = useState({
    totalEvents: 0,
    totalTickets: 0,
    totalValueLocked: 0,
    protocolRevenue: 0,
    stakingAPY: 8.5
  });

  useEffect(() => {
    // Simulate loading protocol stats
    const timer = setTimeout(() => {
      setProtocolStats({
        totalEvents: 1247,
        totalTickets: 89234,
        totalValueLocked: 1542000000, // $1.54B
        protocolRevenue: 1542000, // $1.54M
        stakingAPY: 8.5
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-300">Cargando Dashboard...</h2>
          <p className="text-gray-500 mt-2">Conectando con la blockchain</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Hero Section for Dashboard */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Neural Network Background */}
        <div className="absolute inset-0">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-pink-500/5"></div>
          
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
                  Dashboard del
                  {/* Neural glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-30 animate-pulse"></span>
                </span>
                <br />
                <span className="text-white relative">
                  Protocolo
                  {/* Subtle glow */}
                  <span className="absolute inset-0 bg-white/10 blur-xl opacity-20"></span>
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
                                 <div className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                   Monitorea en tiempo real el <span className="text-cyan-400 font-semibold relative">
                     rendimiento y crecimiento del ecosistema
                     <span className="absolute inset-0 bg-cyan-400/20 blur-sm -z-10"></span>
                   </span> TicketSafer. 
                   Estadísticas en vivo, visualizaciones de red y paneles de control avanzados.
                 </div>
              </div>
            </motion.div>
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
      
      {/* Protocol Dashboard Content */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          {/* Real-time Stats Grid */}
          <ProtocolStats stats={protocolStats} />
          
          {/* Network Visualization */}
          <div className="my-12 sm:my-16 lg:my-20">
            <NetworkVisualization />
          </div>
          
          {/* Main Panels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <StakingPanel />
            <LiquidityPanel />
            <GovernancePanel />
          </div>
        </div>
      </section>
    </div>
  );
}
