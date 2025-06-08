
import React from 'react';
import Section from './Section';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Section id={id} title="About Us" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-neutral-700 mb-4">
            Our Mission & Vision
          </h3>
          <p className="text-neutral-600 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href="#contact"
            className="inline-block bg-secondary-DEFAULT hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition duration-300"
          >
            Learn More
          </a>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://picsum.photos/600/400?grayscale&blur=2"
            alt="About Us"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;