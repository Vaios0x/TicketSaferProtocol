'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function GovernancePanel() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-purple-400/50 transition-all duration-300"
      tabIndex={0}
      aria-label="Panel de Gobernanza - Participa en las decisiones del protocolo"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Gobernanza</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-purple-400 hover:text-purple-300 transition-colors"
          aria-label={isExpanded ? "Contraer panel" : "Expandir panel"}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="bg-black/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Tokens de Gobernanza</span>
            <span className="text-purple-400 font-semibold">0 TSP</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        
        <div className="bg-black/20 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Poder de Voto</span>
            <span className="text-green-400 font-semibold">0%</span>
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
              <span className="text-gray-400 text-sm">Propuestas Activas</span>
              <div className="text-2xl font-bold text-blue-400">3</div>
            </div>
            
            <div className="bg-black/20 rounded-lg p-3">
              <span className="text-gray-400 text-sm">Última Participación</span>
              <div className="text-lg font-semibold text-gray-400">Nunca</div>
            </div>
          </motion.div>
        )}
      </div>
      
      <button
        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Ver propuestas de gobernanza"
      >
        Ver Propuestas
      </button>
    </motion.div>
  );
}
