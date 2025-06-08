
import React from 'react';
import Section from './Section';
import Card from './Card';
import { FeatureItem } from '../types';

// Placeholder SVG Icons
const IconCog: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l-1.41-.513M3 10.5h18M4.5 7.5l1.41-.513M19.5 7.5l-1.41-.513" />
  </svg>
);

const IconBolt: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IconShield: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0118 6c.017.151.028.303.028.461 0 3.866-2.074 7.27-5.166 9.069L12 14.155l-.834-.486C8.074 11.901 6 8.497 6 4.631c0-.158.011-.31.028-.461A11.959 11.959 0 0112 2.714z" />
  </svg>
);


const featuresData: FeatureItem[] = [
  {
    id: 'feat1',
    icon: <IconCog />,
    title: 'Highly Customizable',
    description: 'Tailor every aspect to fit your needs perfectly. Our platform offers unparalleled flexibility.',
  },
  {
    id: 'feat2',
    icon: <IconBolt />,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance and responsiveness, ensuring a smooth user experience.',
  },
  {
    id: 'feat3',
    icon: <IconShield />,
    title: 'Secure & Reliable',
    description: 'Built with top-notch security measures to protect your data and ensure operational reliability.',
  },
];

interface FeaturesProps {
  id: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  return (
    <Section id={id} title="Our Key Features" className="bg-neutral-100">
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <Card key={feature.id} item={feature} />
        ))}
      </div>
    </Section>
  );
};

export default Features;