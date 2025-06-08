
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavLink } from './types';

const navLinks: NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navLinks={navLinks} />
      <main className="flex-grow">
        <Hero id="hero" />
        <About id="about" />
        <Features id="features" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;