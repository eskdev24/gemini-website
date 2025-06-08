
import React from 'react';
import { FeatureItem } from '../types';

interface CardProps {
  item: FeatureItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-primary-DEFAULT mb-4 p-3 bg-primary-light/20 rounded-full">
        {item.icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{item.title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
};

export default Card;