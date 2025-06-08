
import React from 'react';

export interface NavLink {
  href: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
