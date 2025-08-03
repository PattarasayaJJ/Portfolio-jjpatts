import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/works', label: 'My Projects' },
    { path: '/aboutme', label: 'About me' }
  ];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/20 py-3 shadow-2xl shadow-purple-500/10' 
          : 'bg-black/80 backdrop-blur-sm py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link to="/" className="group relative">
          <div className="flex items-center transform transition-all duration-300 group-hover:scale-110">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Logo */}
            <img 
              src="/JP.png" 
              alt="logo" 
              className="w-20 h-20 relative z-10 drop-shadow-2xl transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                relative font-semibold px-8 py-3 rounded-2xl transition-all duration-300 ease-out
                transform hover:scale-105 group overflow-hidden
                ${isActive(item.path) 
                  ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white shadow-2xl shadow-purple-500/40 scale-105' 
                  : 'text-white/90 hover:text-white'
                }
              `}
            >
              {/* Active state background glow */}
              {isActive(item.path) && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-50 animate-pulse"></div>
              )}
              
              {/* Hover effect background */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300
                bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 rounded-2xl
                ${!isActive(item.path) ? 'group-hover:shadow-lg group-hover:shadow-purple-500/20' : ''}
              `}></div>
              
              {/* Text with gradient effect */}
              <span className={`
                relative z-10 text-base tracking-wide
                ${!isActive(item.path) 
                  ? 'bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent group-hover:from-white group-hover:via-purple-200 group-hover:to-white transition-all duration-300' 
                  : 'text-white drop-shadow-sm'
                }
              `}>
                {item.label}
              </span>
              
              {/* Animated underline for non-active items */}
              {!isActive(item.path) && (
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-3/4 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative p-3 text-white hover:text-purple-300 transition-all duration-300 group rounded-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 rounded-xl transition-all duration-300"></div>
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-200">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 w-80 h-full z-50 transform transition-all duration-500 ease-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-purple-900/40 to-black/95 backdrop-blur-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
        
        {/* Animated Border */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
        
        <div className="relative z-10 p-8 h-full flex flex-col">
          {/* Close Button */}
          <button 
            className="self-end p-3 text-white hover:text-purple-300 transition-all duration-300 mb-16 group relative rounded-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-600/20 rounded-xl transition-all duration-300"></div>
            <X size={28} className="relative z-10 transform group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative font-semibold px-8 py-5 rounded-2xl text-center transition-all duration-300 ease-out
                  transform hover:scale-105 group overflow-hidden border
                  ${isActive(item.path) 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/30 border-purple-400/50 scale-105' 
                    : 'text-white hover:text-white border-white/20 hover:border-purple-400/60 hover:bg-white/5'
                  }
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: isMenuOpen ? 'slideInFromRight 0.6s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Active state glow */}
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                )}
                
                {/* Hover effect */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl
                  ${!isActive(item.path) ? 'group-hover:shadow-xl group-hover:shadow-purple-500/20' : ''}
                `}></div>
                
                {/* Text */}
                <span className={`
                  relative z-10 text-lg tracking-wide
                  ${!isActive(item.path) 
                    ? 'bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-white' 
                    : 'text-white drop-shadow-sm'
                  }
                `}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Decorative Footer */}
          <div className="mt-auto space-y-6">
            {/* Divider */}
            <div className="relative">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            
            {/* Welcome Message */}
            <div className="text-center space-y-2">
              <div className="text-sm text-white/70">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Welcome to my Portfolio
                </span>
              </div>
              <div className="flex justify-center space-x-2">
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}