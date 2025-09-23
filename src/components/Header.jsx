// src/components/Header.jsx

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Radio } from 'lucide-react';
import clsx from 'clsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#quien-soy', text: 'Quién Soy' },
    { href: '/#playlist', text: 'Playlist' },
    { href: '/cancion-semanal', text: 'Canción Semanal' },
    { href: '/contacto', text: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // 👇 CAMBIO AQUÍ: Eliminamos "bg-brand-dark/80" 👇
    <header className="backdrop-blur-sm sticky top-0 z-40 border-b border-brand-purple/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src="/assets/logo.svg" alt="Logo Universo 8090" className="h-8 md:h-10" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              to={link.href}
              onClick={() => {
                if (link.href.startsWith('/#')) {
                  setTimeout(() => {
                    document.querySelector(link.href.substring(1))?.scrollIntoView();
                  }, 0);
                }
              }}
              className="text-gray-300 hover:text-brand-cyan transition-colors"
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="/#player" className="btn btn-primary hidden sm:inline-flex items-center gap-2">
            <Radio size={20} />
            Escuchar en Vivo
          </a>
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      <div className={clsx(
        "fixed inset-0 bg-brand-dark z-40 transform md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
             <NavLink
              key={link.text}
              to={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-title text-gray-300 hover:text-brand-cyan transition-colors"
            >
              {link.text}
            </NavLink>
          ))}
          <a href="/#player" onClick={handleLinkClick} className="btn btn-primary mt-8 inline-flex items-center gap-2">
            <Radio size={20} />
            Escuchar en Vivo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;