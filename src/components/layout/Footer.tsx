'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Protocolo',
      links: [
        { name: 'Documentación', href: '#docs' },
        { name: 'API Reference', href: '#api' },
        { name: 'GitHub', href: '#github' },
        { name: 'Auditorías', href: '#audits' }
      ]
    },
    {
      title: 'Desarrollo',
      links: [
        { name: 'SDK', href: '#sdk' },
        { name: 'Tutoriales', href: '#tutorials' },
        { name: 'Ejemplos', href: '#examples' },
        { name: 'Comunidad', href: '#community' }
      ]
    },
    {
      title: 'Ecosistema',
      links: [
        { name: 'Venues', href: '#venues' },
        { name: 'Integradores', href: '#integrators' },
        { name: 'Partners', href: '#partners' },
        { name: 'Marketplace', href: '#marketplace' }
      ]
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Acerca de', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Carreras', href: '#careers' },
        { name: 'Contacto', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#twitter', color: 'blue' },
    { name: 'Discord', icon: '💬', href: '#discord', color: 'purple' },
    { name: 'Telegram', icon: '📱', href: '#telegram', color: 'cyan' },
    { name: 'YouTube', icon: '📺', href: '#youtube', color: 'red' },
    { name: 'LinkedIn', icon: '💼', href: '#linkedin', color: 'blue' }
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Neural Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
        
        {/* Neural Network Pattern - Replacing grid with actual neural connections */}
        <div className="absolute inset-0 opacity-5">
          {/* Neural nodes distributed across the footer */}
          <div className="absolute top-1/8 left-1/8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/8 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/8 left-3/8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/8 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-1/4 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          
          <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-1/2 left-3/8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          
          <div className="absolute top-3/4 left-1/6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          
          {/* Right side neural nodes */}
          <div className="absolute top-1/8 right-1/8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/8 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1/8 right-3/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="absolute top-1/2 right-1/8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 right-3/8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          
          <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-3/4 right-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          
          {/* Neural connections - SVG paths for realistic neural networks */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
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
            
            {/* Vertical connections */}
            <path d="M 200 100 Q 200 150 200 200" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
            <path d="M 400 100 Q 400 150 400 200" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
            <path d="M 600 100 Q 600 150 600 200" stroke="url(#purpleGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <path d="M 200 200 Q 200 250 200 300" stroke="url(#pinkGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <path d="M 400 200 Q 400 250 400 300" stroke="url(#cyanGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M 600 200 Q 600 250 600 300" stroke="url(#blueGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
            
            {/* Diagonal connections for more complex neural patterns */}
            <path d="M 200 100 Q 300 150 400 200" stroke="url(#cyanGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
            <path d="M 400 100 Q 500 150 600 200" stroke="url(#blueGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <path d="M 200 200 Q 300 250 400 300" stroke="url(#purpleGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
            <path d="M 400 200 Q 500 250 600 300" stroke="url(#pinkGradient)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            {/* Gradients for neural connections */}
            <defs>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
                <stop offset="50%" stopColor="rgba(6, 182, 212, 0.3)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.15)" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
              </linearGradient>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.15)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.3)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.15)" />
              </linearGradient>
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.15)" />
                <stop offset="50%" stopColor="rgba(236, 72, 153, 0.3)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.15)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating neural particles */}
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-white font-bold text-xl">🎫</span>
                </div>
                {/* Neural glow effect */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl blur-xl opacity-30"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  TicketSafer
                </h3>
                <p className="text-sm text-cyan-400/70 font-mono">Protocol v1.0</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              El protocolo fundamental que toda la industria del entretenimiento usa para tickets, 
              pagos y verificación con tecnología Web3 de vanguardia.
            </p>
            
            {/* Social Links with Neural Effects */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`relative group w-10 h-10 bg-gradient-to-r from-${social.color}-500/20 to-${social.color}-600/20 rounded-xl flex items-center justify-center border border-${social.color}-400/30 hover:border-${social.color}-400/50 transition-all duration-300 backdrop-blur-sm`}
                  aria-label={`Seguir en ${social.name}`}
                >
                  {/* Neural glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${social.color}-500/20 to-${social.color}-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <span className="text-lg relative z-10">{social.icon}</span>
                  
                  {/* Floating neural particles */}
                  <div className={`absolute -top-1 -right-1 w-1 h-1 bg-${social.color}-400 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-300`}></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="group"
            >
              <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm group/link relative"
                      aria-label={`Navegar a ${link.name}`}
                    >
                      <span className="relative">
                        {link.name}
                        {/* Hover underline effect */}
                        <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/link:w-full transition-all duration-300"></div>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section with Neural Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glassmorphism-neural rounded-2xl p-8 mb-12 border border-cyan-400/20 relative overflow-hidden"
        >
          {/* Neural glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          
          {/* Floating neural particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mantente Actualizado
            </h3>
            <p className="text-gray-400 mb-6">
              Recibe las últimas noticias sobre el protocolo, actualizaciones y eventos exclusivos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 backdrop-blur-sm transition-all duration-300"
                aria-label="Email para newsletter"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-white font-semibold rounded-xl transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25"
                aria-label="Suscribirse al newsletter"
              >
                {/* Neural glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>Suscribirse</span>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TicketSafer Protocol. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacidad
              </a>
              <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Términos
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Neural Network Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
    </footer>
  );
}
