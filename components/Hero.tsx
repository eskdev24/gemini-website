
import React from 'react';
import Section from './Section';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      className="bg-neutral-800 text-white min-h-screen flex items-center justify-center !py-0" // Override Section's py
      containerClassName="container mx-auto px-4 sm:px-6 lg:px-8 text-center" // Ensure container full width for centering
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-primary-light">Our Awesome</span> Website
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-10">
          Discover amazing things and explore what we have to offer. Built with modern technology for a seamless experience.
        </p>
        <div className="space-x-4">
          <a
            href="#features"
            className="bg-primary-DEFAULT hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-neutral-100 hover:bg-neutral-100 hover:text-neutral-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;