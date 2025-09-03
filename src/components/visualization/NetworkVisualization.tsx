'use client';

import { motion } from 'framer-motion';

export function NetworkVisualization() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-gray-700/50 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <p className="text-gray-400 mt-4 text-lg">Visualización de Red</p>
          <p className="text-gray-500 text-sm">Conectando nodos del protocolo</p>
        </motion.div>
      </div>
      
      {/* Animated nodes */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full"
      />
      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full"
      />
    </div>
  );
}
