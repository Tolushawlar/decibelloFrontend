/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { apiCall } from '../utils/api';

interface ContactFormProps {
  onSubmit: (data: any) => void;
  type: 'contact' | 'schedule';
}

const ContactForm: React.FC<ContactFormProps> = ({ type }) => {
  const [formStatus, setFormStatus] = useState('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      if (type === 'contact') {
        const response = await apiCall('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
          })
        });
        
        if (response.ok) {
          setFormStatus('success');
          toast.success('Message sent successfully!');
          if (formRef.current) {
            formRef.current.reset();
          }
        } else {
          setFormStatus('error');
          toast.error('Failed to send message');
        }
      } else {
        const response = await apiCall('/api/call-schedules', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            preferred_date: data.date,
            preferred_time: data.time,
            message: data.topic
          })
        });
        
        if (response.ok) {
          setFormStatus('success');
          toast.success('Call scheduled successfully!');
          if (formRef.current) {
            formRef.current.reset();
          }
        } else {
          setFormStatus('error');
          toast.error('Failed to schedule call');
        }
      }
      
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      toast.error('Network error. Please try again.');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  if (type === 'contact') {
    return (
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-input"
            placeholder="How can we help?"
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-input"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={formStatus !== 'idle'}
          className={`btn-primary w-full ${
            formStatus === 'success' ? 'bg-green-500' : ''
          }`}
        >
          {formStatus === 'idle' && 'Send Message'}
          {formStatus === 'submitting' && 'Sending...'}
          {formStatus === 'success' && 'Message Sent!'}
          {formStatus === 'error' && 'Try Again'}
        </button>
      </form>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="schedule-name" className="form-label">Name</label>
          <input
            type="text"
            id="schedule-name"
            name="name"
            className="form-input"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="schedule-email" className="form-label">Email</label>
          <input
            type="email"
            id="schedule-email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="form-label">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-input"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="form-label">Preferred Time</label>
          <select
            id="time"
            name="time"
            className="form-input"
            required
          >
            <option value="">Select a time</option>
            <option value="morning">Morning (9AM - 12PM)</option>
            <option value="afternoon">Afternoon (1PM - 5PM)</option>
            <option value="evening">Evening (6PM - 8PM)</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="form-label">Discussion Topic</label>
        <input
          type="text"
          id="topic"
          name="topic"
          className="form-input"
          placeholder="What would you like to discuss?"
          required
        />
      </div>
      <button
        type="submit"
        disabled={formStatus !== 'idle'}
        className={`btn-primary w-full ${
          formStatus === 'success' ? 'bg-green-500' : ''
        }`}
      >
        {formStatus === 'idle' && 'Schedule Call'}
        {formStatus === 'submitting' && 'Scheduling...'}
        {formStatus === 'success' && 'Call Scheduled!'}
        {formStatus === 'error' && 'Try Again'}
      </button>
    </form>
  );
};

export default ContactForm;