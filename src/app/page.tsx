'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NetworkVisualization } from '@/components/visualization/NetworkVisualization';
import { ProtocolStats } from '@/components/dashboard/ProtocolStats';
import { StakingPanel } from '@/components/staking/StakingPanel';
import { LiquidityPanel } from '@/components/defi/LiquidityPanel';
import { GovernancePanel } from '@/components/governance/GovernancePanel';
import { HeroSection } from '@/components/hero/HeroSection';
import { FeaturesSection } from '@/components/features/FeaturesSection';
import { RoadmapSection } from '@/components/roadmap/RoadmapSection';

export default function HomePage() {
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
          <h2 className="text-xl font-semibold text-gray-300">Cargando Protocolo TicketSafer...</h2>
          <p className="text-gray-500 mt-2">Conectando con la blockchain</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Protocol Dashboard */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="gradient-text">Dashboard del Protocolo</span>
          </motion.h2>
          
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
      
      {/* Roadmap Section */}
      <RoadmapSection />
    </div>
  );
}
