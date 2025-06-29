import React from 'react';

const ContactPage: React.FC = () => {
  // Sample office locations - in a real app, this would come from an API or CMS
  const offices = [
    {
      id: 1,
      city: 'New York',
      address: '123 Broadway, New York, NY 10001',
      phone: '+1 (212) 555-1234',
      email: 'newyork@company.com'
    },
    {
      id: 2,
      city: 'London',
      address: '45 Finsbury Square, London EC2A 1HP',
      phone: '+44 20 7123 4567',
      email: 'london@company.com'
    },
    {
      id: 3,
      city: 'Singapore',
      address: '10 Marina Boulevard, Singapore 018983',
      phone: '+65 6123 4567',
      email: 'singapore@company.com'
    },
    {
      id: 4,
      city: 'Sydney',
      address: '88 Phillip Street, Sydney NSW 2000',
      phone: '+61 2 8123 4567',
      email: 'sydney@company.com'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-xl text-dark/70 mb-8">Get in touch with our team to discuss how we can help your business</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-2">
              <h2 className="text-2xl font-semibold text-primary mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-dark font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-dark font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-dark font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-dark font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="careers">Careers</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="consent" className="mr-2" required />
                  <label htmlFor="consent" className="text-dark/80 text-sm">
                    I consent to having this website store my submitted information so they can respond to my inquiry.
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Global Headquarters</h2>
              <div className="space-y-3 text-dark/80">
                <p>123 Technology Plaza</p>
                <p>San Francisco, CA 94105</p>
                <p>United States</p>
                <p className="pt-2">
                  <span className="font-medium text-primary">Phone:</span> +1 (415) 555-1234
                </p>
                <p>
                  <span className="font-medium text-primary">Email:</span> info@company.com
                </p>
              </div>
            </div>
            
            <div className="bg-light/50 rounded-lg p-6 mb-2">
              <h2 className="text-xl font-semibold text-primary mb-4">Global Offices</h2>
              <div className="space-y-6">
                {offices.map(office => (
                  <div key={office.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-medium text-primary mb-2">{office.city}</h3>
                    <p className="text-dark/80 text-sm mb-1">{office.address}</p>
                    <p className="text-dark/80 text-sm mb-1">{office.phone}</p>
                    <p className="text-dark/80 text-sm">{office.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-6">Find Us</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-dark/60">Interactive map would be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
