import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { apiCall } from '../utils/api';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await apiCall('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        toast.success('Successfully subscribed to newsletter!');
      } else {
        setStatus('error');
        toast.error('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <div className="py-12 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-dark/70 mb-8">
          Stay updated with the latest insights, trends, and strategies in digital marketing.
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
            Thank you for subscribing! We've sent a confirmation email to your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address" 
              className={`flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                status === 'error' ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              required
              disabled={status === 'submitting'}
            />
            <button 
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-70"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="text-red-500 text-sm mt-2">
            Please enter a valid email address.
          </p>
        )}
        
        <p className="text-xs text-dark/50 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscribe;
