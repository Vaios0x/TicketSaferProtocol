'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function StakingPanel() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [unstakeAmount, setUnstakeAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);

  const handleStake = async () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) return;
    
    setIsStaking(true);
    // Simulate staking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsStaking(false);
    setStakeAmount('');
  };

  const handleUnstake = async () => {
    if (!unstakeAmount || parseFloat(unstakeAmount) <= 0) return;
    
    setIsUnstaking(true);
    // Simulate unstaking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUnstaking(false);
    setUnstakeAmount('');
  };

  const stakingStats = [
    {
      label: 'APY Actual',
      value: '18.5%',
      change: '+2.3%',
      color: 'green',
      icon: '📈'
    },
    {
      label: 'Total Staked',
      value: '$2.4M',
      change: '+12.7%',
      color: 'cyan',
      icon: '🔒'
    },
    {
      label: 'Mi Stake',
      value: '$12,450',
      change: '+8.9%',
      color: 'purple',
      icon: '💎'
    },
    {
      label: 'Recompensas',
      value: '$892',
      change: '+15.2%',
      color: 'orange',
      icon: '🎁'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Staking Stats with Neural Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stakingStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="glassmorphism-neural rounded-2xl p-6 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              {/* Neural glow background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-500/10 to-${stat.color}-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              {/* Floating neural particles */}
              <div className={`absolute top-2 right-2 w-1 h-1 bg-${stat.color}-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`}></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
              
              <div className="text-3xl mb-3">{stat.icon}</div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</h3>
              <p className={`text-3xl font-bold text-${stat.color}-400 mb-2 relative`}>
                {stat.value}
                {/* Neural glow effect */}
                <div className={`absolute inset-0 text-${stat.color}-400 blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                  {stat.value}
                </div>
              </p>
              <span className={`text-sm font-medium text-${stat.color}-400`}>
                {stat.change}
              </span>
              
              {/* Neural connection lines */}
              <div className="absolute top-0 left-1/2 w-px h-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out"></div>
              <div className="absolute bottom-0 right-1/2 w-px h-0 bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out delay-200"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Staking Actions with Neural Effects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stake Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative"
        >
          <div className="glassmorphism-neural rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
            {/* Neural glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Floating neural particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative shadow-lg shadow-cyan-500/25">
                <span className="text-2xl">🔒</span>
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Stake TSP</h3>
              <p className="text-gray-400">Bloquea tus tokens y gana recompensas</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cantidad a Stake
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm transition-all duration-300"
                    aria-label="Cantidad de tokens para hacer stake"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    TSP
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStake}
                disabled={isStaking || !stakeAmount || parseFloat(stakeAmount) <= 0}
                className="w-full relative group px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Hacer stake de tokens TSP"
              >
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-center justify-center space-x-2">
                  {isStaking ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Staking...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>Stake Tokens</span>
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Unstake Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="group relative"
        >
          <div className="glassmorphism-neural rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 relative overflow-hidden">
            {/* Neural glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Floating neural particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative shadow-lg shadow-purple-500/25">
                <span className="text-2xl">🔓</span>
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Unstake TSP</h3>
              <p className="text-gray-400">Retira tus tokens y recompensas</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Cantidad a Unstake
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={unstakeAmount}
                    onChange={(e) => setUnstakeAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 backdrop-blur-sm transition-all duration-300"
                    aria-label="Cantidad de tokens para hacer unstake"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                    TSP
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleUnstake}
                disabled={isUnstaking || !unstakeAmount || parseFloat(unstakeAmount) <= 0}
                className="w-full relative group px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Hacer unstake de tokens TSP"
              >
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-center justify-center space-x-2">
                  {isUnstaking ? (
                    <>
                      <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Unstaking...</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span>Unstake Tokens</span>
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions with Neural Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <div className="glassmorphism-neural rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden">
          {/* Neural glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6">Acciones Rápidas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Claim Recompensas', icon: '🎁', color: 'green' },
              { label: 'Reinvestir', icon: '🔄', color: 'blue' },
              { label: 'Ver Historial', icon: '📊', color: 'purple' }
            ].map((action, index) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group px-6 py-4 bg-gradient-to-r from-${action.color}-500/20 to-${action.color}-600/20 hover:from-${action.color}-500/30 hover:to-${action.color}-600/30 text-white font-semibold rounded-xl transition-all duration-300 border border-${action.color}-400/30 hover:border-${action.color}-400/50 backdrop-blur-sm shadow-lg shadow-${action.color}-500/25`}
                aria-label={action.label}
              >
                {/* Neural glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${action.color}-500/20 to-${action.color}-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-sm">{action.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
