
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          {/* Placeholder for social icons if needed */}
          {/* <a href="#" className="text-neutral-400 hover:text-white mx-2"><i className="fab fa-facebook-f"></i></a> */}
          {/* <a href="#" className="text-neutral-400 hover:text-white mx-2"><i className="fab fa-twitter"></i></a> */}
        </div>
        <p className="text-sm">
          &copy; {currentYear} MySite. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
