import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('/'); // Simulate active route

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

  const isActive = (path) => activeTab === path;

  const handleNavClick = (path) => {
    setActiveTab(path);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 py-3' 
            : 'bg-transparent py-6'
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
          {/* Logo */}
          <button className="group" onClick={() => handleNavClick('/')}>
            <div className="flex items-center transform transition-transform duration-300 group-hover:scale-105">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:brightness-110">
                  JP
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`
                  relative font-medium px-6 py-3 rounded-full transition-all duration-300 ease-in-out
                  transform hover:scale-105 group overflow-hidden
                  ${isActive(item.path) 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'text-white hover:text-purple-300'
                  }
                `}
              >
                {/* Background glow effect */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-sm
                  ${isActive(item.path) ? 'opacity-100' : ''}
                `}></div>
                
                {/* Text with gradient effect when not active */}
                <span className={`
                  relative z-10
                  ${!isActive(item.path) 
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300' 
                    : ''
                  }
                `}>
                  {item.label}
                </span>
                
                {/* Hover underline effect */}
                {!isActive(item.path) && (
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-4/5 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-white hover:text-purple-300 transition-colors duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 rounded-lg transition-all duration-300"></div>
            {isMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
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
          {/* Menu Background with Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-purple-900/30 to-black/95 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
          
          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Close Button */}
            <button 
              className="self-end p-2 text-white hover:text-purple-300 transition-colors duration-300 mb-12 group relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 rounded-lg transition-all duration-300"></div>
              <X size={28} className="relative z-10" />
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6 mt-8">
              {navItems.map((item, index) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`
                    relative font-medium px-8 py-4 rounded-2xl text-center transition-all duration-300 ease-out
                    transform hover:scale-105 group overflow-hidden
                    ${isActive(item.path) 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25' 
                      : 'text-white hover:text-purple-300 border border-white/10 hover:border-purple-400/50'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Background glow effect */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-sm
                    ${isActive(item.path) ? 'opacity-100' : ''}
                  `}></div>
                  
                  {/* Text with gradient effect when not active */}
                  <span className={`
                    relative z-10 text-lg
                    ${!isActive(item.path) 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300' 
                      : ''
                    }
                  `}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>

            {/* Decorative Elements */}
            <div className="mt-auto space-y-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="text-center text-white/60 text-sm">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome to my portfolio
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Demo content to show scroll effect */}
      <div className="pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Enhanced Header Demo
          </h1>
          <p className="text-white/80 text-xl mb-8">
            Scroll down to see the header transform with a glassmorphism effect. Try the navigation buttons to see the active states!
          </p>
          <div className="grid gap-8 mt-16">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-semibold text-white mb-4">Content Section {i + 1}</h2>
                <p className="text-white/70">
                  This is demo content to showcase the header's scroll behavior. The header will become more opaque and get a backdrop blur effect as you scroll down the page.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}