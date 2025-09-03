'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectButton } from '@/components/ui/ConnectButton';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Inicio', href: '/', id: 'home' },
    { name: 'Características', href: '#features', id: 'features' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Roadmap', href: '/roadmap', id: 'roadmap' },
    { name: 'Documentación', href: '#docs', id: 'docs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated neural connections */}
          <div className="absolute top-1/2 left-1/4 w-1 h-16 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-pink-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo with Neural Glow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-base sm:text-lg lg:text-xl">🎫</span>
              </div>
              {/* Neural glow effect */}
              <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-300 -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                TicketSafer
              </span>
              <span className="text-xs text-cyan-400/70 font-mono hidden sm:block">Protocol v1.0</span>
            </div>
          </motion.div>

          {/* Desktop Navigation with Glassmorphism */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Navegar a ${item.name}`}
                >
                  {item.name}
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Connect Button with Neural Effect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
            <ConnectButton />
          </motion.div>

          {/* Mobile Menu Button with Neural Glow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 sm:p-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {/* Neural glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu with Glassmorphism */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden relative"
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-xl rounded-b-2xl border-b border-l border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/10"></div>
              
              <div className="relative z-10 py-4 sm:py-6 px-3 sm:px-4 space-y-3 sm:space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveSection(item.id);
                    }}
                    aria-label={`Navegar a ${item.name}`}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile Connect Button */}
                <div className="pt-3 sm:pt-4 border-t border-cyan-500/20">
                  <ConnectButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Neural Network Overlay */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        />
      )}
    </header>
  );
}
