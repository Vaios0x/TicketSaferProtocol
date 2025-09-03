'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function LiquidityPanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-cyan-400/50 transition-all duration-300"
      tabIndex={0}
      aria-label="Panel de Liquidez - Gestiona tu liquidez en el protocolo"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Liquidez</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label={isExpanded ? "Contraer panel" : "Expandir panel"}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-black/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">TVL Total</span>
            <span className="text-cyan-400 font-semibold">$1.54B</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        
        <div className="bg-black/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Tu Liquidez</span>
            <span className="text-green-400 font-semibold">$0.00</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-3"
          >
            <div className="bg-black/20 rounded-lg p-3">
              <span className="text-gray-400 text-sm">APY Promedio</span>
              <div className="text-2xl font-bold text-green-400">12.5%</div>
            </div>
            
            <div className="bg-black/20 rounded-lg p-3">
              <span className="text-gray-400 text-sm">Recompensas Acumuladas</span>
              <div className="text-lg font-semibold text-yellow-400">$0.00</div>
            </div>
          </motion.div>
        )}
      </div>
      
      <button
        className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Agregar liquidez al protocolo"
      >
        Agregar Liquidez
      </button>
    </motion.div>
  );
}
