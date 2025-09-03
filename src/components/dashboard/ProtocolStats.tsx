'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StatCard {
  id: string;
  icon: string;
  title: string;
  primaryValue: string;
  secondaryValue: string;
  color: string;
  gradient: string;
  glow: string;
  delay: number;
}

export function ProtocolStats() {
  const [stats, setStats] = useState<StatCard[]>([
    {
      id: 'apy',
      icon: '📈',
      title: 'APY Actual',
      primaryValue: '18.5%',
      secondaryValue: '+2.3%',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      glow: 'green',
      delay: 0
    },
    {
      id: 'total-staked',
      icon: '🔒',
      title: 'Total Staked',
      primaryValue: '$2.4M',
      secondaryValue: '+12.7%',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'blue',
      delay: 0.1
    },
    {
      id: 'my-stake',
      icon: '💎',
      title: 'Mi Stake',
      primaryValue: '$12,4K',
      secondaryValue: '+8.9%',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'purple',
      delay: 0.2
    },
    {
      id: 'rewards',
      icon: '🎁',
      title: 'Recompensas',
      primaryValue: '$892',
      secondaryValue: '+15.2%',
      color: 'orange',
      gradient: 'from-orange-500 to-yellow-500',
      glow: 'orange',
      delay: 0.3
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          primaryValue: stat.id === 'apy' 
            ? `${(18.5 + Math.random() * 2).toFixed(1)}%`
            : stat.id === 'total-staked'
            ? `$${(2.4 + Math.random() * 0.3).toFixed(1)}M`
            : stat.id === 'my-stake'
            ? `$${(12.4 + Math.random() * 0.5).toFixed(1)}K`
            : `$${Math.floor(800 + Math.random() * 200)}`,
          secondaryValue: stat.id === 'apy'
            ? `+${(2.0 + Math.random() * 1).toFixed(1)}%`
            : stat.id === 'total-staked'
            ? `+${(12.0 + Math.random() * 2).toFixed(1)}%`
            : stat.id === 'my-stake'
            ? `+${(8.0 + Math.random() * 2).toFixed(1)}%`
            : `+${(15.0 + Math.random() * 3).toFixed(1)}%`
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Neural nodes distributed across the section */}
          <div className="absolute top-1/6 left-1/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/6 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/6 left-3/8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/6 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          
          <div className="absolute top-1/2 left-1/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-1/2 left-3/8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Right side neural nodes */}
          <div className="absolute top-1/6 right-1/8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/6 right-3/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="absolute top-1/2 right-1/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 right-3/8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          
          {/* Neural connections - SVG paths */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
            {/* Horizontal connections */}
            <path d="M 100 100 Q 200 100 300 100" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
            <path d="M 300 100 Q 400 100 500 100" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M 500 100 Q 600 100 700 100" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
            <path d="M 100 200 Q 200 200 300 200" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M 300 200 Q 400 200 500 200" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <path d="M 500 200 Q 600 200 700 200" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
            
            {/* Vertical connections */}
            <path d="M 200 100 Q 200 150 200 200" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            <path d="M 400 100 Q 400 150 400 200" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <path d="M 600 100 Q 600 150 600 200" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            {/* Diagonal connections */}
            <path d="M 200 100 Q 300 150 400 200" stroke="url(#cyanGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <path d="M 400 100 Q 500 150 600 200" stroke="url(#blueGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <path d="M 200 200 Q 300 250 400 300" stroke="url(#purpleGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
            <path d="M 400 200 Q 500 250 600 300" stroke="url(#pinkGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            {/* Gradients for neural connections */}
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.2)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.4)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.2)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
              </linearGradient>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
                <stop offset="50%" stopColor="rgba(236, 72, 153, 0.4)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating neural particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 relative">
            <span className="gradient-text">
              Estadísticas del Protocolo
              {/* Neural glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-20 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Monitorea en tiempo real el rendimiento y crecimiento del ecosistema TicketSafer
          </p>
        </motion.div>
        
        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="group relative"
            >
              <div className="glassmorphism-neural rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 relative overflow-hidden">
                {/* Neural glow background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
                {/* Floating neural particles */}
                <div className={`absolute top-3 right-3 w-1 h-1 bg-${stat.color}-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`}></div>
                <div className={`absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`} style={{ animationDelay: '1s' }}></div>
                
                {/* Icon container with neural glow */}
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative shadow-lg shadow-${stat.glow}-500/25`}>
                  <span className="text-3xl relative z-10">{stat.icon}</span>
                  {/* Neural glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                  {stat.title}
                </h3>
                
                {/* Primary value with neural glow */}
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2 relative text-center`}>
                  {stat.primaryValue}
                  {/* Neural glow */}
                  <div className={`absolute inset-0 text-${stat.color}-400 blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                    {stat.primaryValue}
                  </div>
                </div>
                
                {/* Secondary value (percentage change) */}
                <div className={`text-lg font-semibold text-${stat.color}-400 text-center group-hover:scale-110 transition-transform duration-300`}>
                  {stat.secondaryValue}
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                
                {/* Neural connection lines */}
                <div className={`absolute top-0 left-1/2 w-px h-0 bg-gradient-to-b from-transparent via-${stat.color}-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out`}></div>
                <div className="absolute bottom-0 right-1/2 w-px h-0 bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out delay-200"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Stats Row */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '🚀',
              title: 'TVL Total',
              value: '$45.2M',
              change: '+23.4%',
              color: 'cyan',
              gradient: 'from-cyan-500 to-blue-500'
            },
            {
              icon: '👥',
              title: 'Usuarios Activos',
              value: '125.4K',
              change: '+18.7%',
              color: 'purple',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: '⚡',
              title: 'Transacciones/día',
              value: '2.8M',
              change: '+31.2%',
              color: 'green',
              gradient: 'from-green-500 to-emerald-500'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              <div className="glassmorphism-neural rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                {/* Neural glow background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10`}></div>
                
                {/* Floating neural particles */}
                <div className={`absolute top-2 right-2 w-1 h-1 bg-${stat.color}-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`}></div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${stat.color}-500/25`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-400 mb-1">{stat.title}</h4>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className={`text-sm font-semibold text-${stat.color}-400`}>{stat.change}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
