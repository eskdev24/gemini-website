
import React from 'react';

interface SectionProps {
  id: string;
  title?: string; // Title is now optional
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = '', 
  titleClassName = '', 
  contentClassName = '',
  containerClassName = 'container mx-auto px-4 sm:px-6 lg:px-8'
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={containerClassName}>
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-neutral-800 text-center mb-12 md:mb-16 ${titleClassName}`}>
            {title}
          </h2>
        )}
        <div className={contentClassName}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
