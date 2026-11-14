import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar({ theme, onToggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar container">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">N</span> nirab<span className="brand-dot">.</span></a>
        <button className="icon-btn mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => <a key={link} className={activeSection === link.toLowerCase() ? 'active' : ''} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}
        </div>
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}<span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span></button>
      </nav>
    </header>
  );
}