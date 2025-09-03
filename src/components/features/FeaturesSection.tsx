'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎫',
    title: 'Tickets Seguros',
    description: 'Tickets NFT verificables con protección contra fraudes y duplicados',
    color: 'from-blue-500 to-cyan-500',
    glow: 'cyan',
    delay: 0
  },
  {
    icon: '🔒',
    title: 'Verificación ZK',
    description: 'Pruebas de conocimiento cero para privacidad y escalabilidad',
    color: 'from-purple-500 to-pink-500',
    glow: 'purple',
    delay: 0.1
  },
  {
    icon: '🌐',
    title: 'Cross-Chain',
    description: 'Operaciones entre múltiples blockchains sin intermediarios',
    color: 'from-green-500 to-emerald-500',
    glow: 'green',
    delay: 0.2
  },
  {
    icon: '⚡',
    title: 'Liquidación Instantánea',
    description: 'Venta y compra de tickets con liquidez garantizada',
    color: 'from-yellow-500 to-orange-500',
    glow: 'orange',
    delay: 0.3
  },
  {
    icon: '🏛️',
    title: 'Gobernanza DAO',
    description: 'Participación en decisiones del protocolo con tokens TSP',
    color: 'from-red-500 to-pink-500',
    glow: 'pink',
    delay: 0.4
  },
  {
    icon: '📊',
    title: 'Analytics Avanzados',
    description: 'Métricas en tiempo real y análisis de mercado',
    color: 'from-indigo-500 to-purple-500',
    glow: 'indigo',
    delay: 0.5
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Neural Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        
        {/* Neural Network Pattern - Replacing grid with actual neural connections */}
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
          
          <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          
          <div className="absolute top-5/6 left-1/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-5/6 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-5/6 left-3/8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-5/6 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          
          {/* Right side neural nodes */}
          <div className="absolute top-1/6 right-1/8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/6 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/6 right-3/8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="absolute top-1/2 right-1/8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 right-3/8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          
          <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          <div className="absolute top-5/6 right-1/8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-5/6 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-5/6 right-3/8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          
          {/* Neural connections - SVG paths for realistic neural networks */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
            {/* Horizontal connections */}
            <path d="M 100 100 Q 200 100 300 100" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
            <path d="M 300 100 Q 400 100 500 100" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M 500 100 Q 600 100 700 100" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
            <path d="M 100 200 Q 200 200 300 200" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M 300 200 Q 400 200 500 200" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            <path d="M 500 200 Q 600 200 700 200" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
            
            <path d="M 100 300 Q 200 300 300 300" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <path d="M 300 300 Q 400 300 500 300" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
            <path d="M 500 300 Q 600 300 700 300" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            
            <path d="M 100 400 Q 200 400 300 400" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <path d="M 300 400 Q 400 400 500 400" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
            <path d="M 500 400 Q 600 400 700 400" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            {/* Vertical connections */}
            <path d="M 200 100 Q 200 150 200 200" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            <path d="M 400 100 Q 400 150 400 200" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <path d="M 600 100 Q 600 150 600 200" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <path d="M 200 200 Q 200 250 200 300" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <path d="M 400 200 Q 400 250 400 300" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M 600 200 Q 600 250 600 300" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            
            <path d="M 200 300 Q 200 350 200 400" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
            <path d="M 400 300 Q 400 350 400 400" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <path d="M 600 300 Q 600 350 600 400" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
            
            {/* Diagonal connections for more complex neural patterns */}
            <path d="M 200 100 Q 300 150 400 200" stroke="url(#cyanGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <path d="M 400 100 Q 500 150 600 200" stroke="url(#blueGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <path d="M 200 200 Q 300 250 400 300" stroke="url(#purpleGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
            <path d="M 400 200 Q 500 250 600 300" stroke="url(#pinkGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            <path d="M 600 100 Q 500 150 400 200" stroke="url(#cyanGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            <path d="M 400 100 Q 300 150 200 200" stroke="url(#blueGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <path d="M 600 200 Q 500 250 400 300" stroke="url(#purpleGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M 400 200 Q 300 250 200 300" stroke="url(#pinkGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            
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
        <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 bg-blue-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
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
              Características Principales
              {/* Neural glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-20 animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubre por qué TicketSafer Protocol es la solución definitiva para el mercado de entretenimiento Web3
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="group relative"
            >
              <div className="glassmorphism-neural rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 relative overflow-hidden">
                {/* Neural glow background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
                {/* Floating neural particles */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300" style={{ animationDelay: '1s' }}></div>
                
                {/* Icon container with neural glow */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 relative shadow-lg shadow-${feature.glow}-500/25`}>
                  <span className="text-3xl relative z-10">{feature.icon}</span>
                  {/* Neural glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-center">
                  {feature.description}
                </p>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                
                {/* Neural connection lines */}
                <div className="absolute top-0 left-1/2 w-px h-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out"></div>
                <div className="absolute bottom-0 right-1/2 w-px h-0 bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:h-full transition-all duration-500 ease-out delay-200"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25"
            aria-label="Explorar todas las características del protocolo"
          >
            {/* Neural glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>Explorar Características</span>
              <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
