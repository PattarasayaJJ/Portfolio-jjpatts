import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import '../header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-black py-4 px-8 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img src="/JP.png" alt="logo" className="w-20" />
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`font-medium px-8 py-2 rounded-full ${
              isActive('/') ? 'bg-white text-purple-600' : 'gradient-text'
            }`}
            style={isActive('/') ? { color: '#4c1d95' } : {}}
          >
            Home
          </Link>
          <Link
            to="/works"
            className={`font-medium px-8 py-2 rounded-full ${
              isActive('/works') ? 'bg-white text-purple-600' : 'gradient-text'
            }`}
            style={isActive('/works') ? { color: '#4c1d95' } : {}}
          >
            My Projects
          </Link>
          <Link
            to="/aboutme"
            className={`font-medium px-8 py-2 rounded-full ${
              isActive('/aboutme') ? 'bg-white text-purple-600' : 'gradient-text'
            }`}
            style={isActive('/aboutme') ? { color: '#4c1d95' } : {}}
          >
            About me
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div
        className={`
          fixed top-0 right-0 w-64 h-full bg-black z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-6">
          <button className="text-white mb-8" onClick={() => setIsMenuOpen(false)}>
            <XIcon size={24} />
          </button>
          <nav className="flex flex-col space-y-6">
            <Link
              to="/"
              className={`font-medium px-6 py-2 rounded-full block text-center ${
                isActive('/') ? 'bg-white text-purple-600' : 'gradient-text'
              }`}
              style={isActive('/') ? { color: '#4c1d95' } : {}}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/works"
              className={`font-medium px-6 py-2 rounded-full block text-center ${
                isActive('/works') ? 'bg-white text-purple-600' : 'gradient-text'
              }`}
              style={isActive('/works') ? { color: '#4c1d95' } : {}}
              onClick={() => setIsMenuOpen(false)}
            >
              My Projects
            </Link>
            <Link
              to="/aboutme"
              className={`font-medium px-6 py-2 rounded-full block text-center ${
                isActive('/aboutme') ? 'bg-white text-purple-600' : 'gradient-text'
              }`}
              style={isActive('/aboutme') ? { color: '#4c1d95' } : {}}
              onClick={() => setIsMenuOpen(false)}
            >
              About me
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
