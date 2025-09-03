'use client';

import { motion } from 'framer-motion';

const roadmapItems = [
  {
    phase: 'Fase 1',
    title: 'Lanzamiento del Protocolo',
    description: 'Implementación básica del protocolo de tickets NFT con verificación ZK',
    features: ['Smart Contracts Base', 'Verificación de Tickets', 'Marketplace Básico'],
    status: 'completed',
    color: 'from-green-500 to-emerald-500'
  },
  {
    phase: 'Fase 2',
    title: 'Expansión Cross-Chain',
    description: 'Integración con múltiples blockchains y puentes de liquidez',
    features: ['Puentes Cross-Chain', 'Liquidez Multi-Chain', 'Optimizaciones de Gas'],
    status: 'in-progress',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    phase: 'Fase 3',
    title: 'Ecosistema DeFi',
    description: 'Implementación de staking, yield farming y gobernanza DAO',
    features: ['Staking TSP', 'Yield Farming', 'Gobernanza DAO'],
    status: 'upcoming',
    color: 'from-purple-500 to-pink-500'
  },
  {
    phase: 'Fase 4',
    title: 'Metaverso y Gaming',
    description: 'Integración con metaversos y juegos para tickets virtuales',
    features: ['Metaverso Integration', 'Gaming Partnerships', 'AR/VR Support'],
    status: 'upcoming',
    color: 'from-yellow-500 to-orange-500'
  }
];

export function RoadmapSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Roadmap del Protocolo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre el futuro de TicketSafer Protocol y cómo evolucionará para revolucionar el entretenimiento Web3
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 h-full rounded-full"></div>
          
          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-gray-600/50 transition-all duration-300">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${item.color} text-white`}>
                      {item.phase}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
                
                {/* Status indicator */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -bottom-8 px-3 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : item.status === 'in-progress'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {item.status === 'completed' ? 'Completado' : 
                   item.status === 'in-progress' ? 'En Progreso' : 'Próximamente'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Ver roadmap completo del protocolo"
          >
            Ver Roadmap Completo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
