
import React, { useState } from 'react';
import Section from './Section';
import { ContactFormData } from '../types';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if(error) setError(''); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Mock submission logic
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
    setError('');
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
  };

  return (
    <Section id={id} title="Get In Touch" className="bg-white">
      <div className="max-w-xl mx-auto">
        {isSubmitted && (
          <div className="mb-6 p-4 bg-secondary-light/20 text-secondary-dark rounded-md text-center">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md text-center">
                {error}
            </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg shadow-sm focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg shadow-sm focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg shadow-sm focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"
              placeholder="Your message here..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;