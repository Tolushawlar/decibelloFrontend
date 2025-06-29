/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MotionCard from './MotionCard';
import ContactForm from './ContactForm';
import ContactMethodCard from './ContactMethodCard';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import NewsletterSubscribe from './NewsletterSubscribe';
import Logo from './Logo';

const ContactFooterSection = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'schedule'>('contact');

  const contactMethods = [
    {
      title: "Email Us",
      info: "contact@decibello.com",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: "Email Now",
      link: "mailto:contact@decibello.com"
    },
    {
      title: "Call Us",
      info: "+1 (555) 123-4567",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      title: "Visit Us",
      info: "123 Marketing Street, Digital City",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      action: "Get Directions",
      link: "https://maps.google.com"
    }
  ];

  const footerLinks = {
    capabilities: [
      { name: "Data Analytics", href: "/capabilities/data-analytics" },
      { name: "Brand Strategy", href: "/capabilities/brand-strategy" },
      { name: "Market Research", href: "/capabilities/market-research" },
      { name: "All Capabilities", href: "/capabilities" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/about/contact" }
    ],
    industries: [
      { name: "Financial Services", href: "/industries/financial-services" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Manufacturing", href: "/industries/manufacturing" }
    ]
  };

  const handleFormSubmit = async (data: any) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
  };

  return (
    <>
      {/* Newsletter Section */}
      <NewsletterSubscribe />
      
      {/* Contact Section */}
      <section id="contact" className="relative bg-dark overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-20"></div>

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Contact Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to transform your digital marketing strategy? Reach out to our team of experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <MotionCard delay={0.1}>
                <div className="contact-container">
                  {/* Form Tabs */}
                  <div className="form-tabs">
                    <button
                      onClick={() => setActiveTab('contact')}
                      className={`form-tab ${activeTab === 'contact' ? 'form-tab-active' : ''}`}
                    >
                      Contact Form
                    </button>
                    <button
                      onClick={() => setActiveTab('schedule')}
                      className={`form-tab ${activeTab === 'schedule' ? 'form-tab-active' : ''}`}
                    >
                      Schedule a Call
                    </button>
                  </div>

                  <ContactForm type={activeTab} onSubmit={handleFormSubmit} />
                </div>
              </MotionCard>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {contactMethods.map((method, index) => (
                <ContactMethodCard
                  key={method.title}
                  {...method}
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="footer-grid">
              {/* Logo and Description */}
              <div className="col-span-2 md:col-span-1">
                <Link to="/" className="flex items-center mb-4">
                  <Logo variant="white" size="lg" />
                </Link>
                {/* <p className="footer-description">
                  Transforming data into strategy for measurable business growth and lasting impact.
                </p> */}
              </div>

              {/* Footer Links */}
              <FooterLinks title="Capabilities" links={footerLinks.capabilities} />
              <FooterLinks title="Company" links={footerLinks.company} />
              <FooterLinks title="Industries" links={footerLinks.industries} />
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2025 Decibello Limited. All rights reserved.
              </p>
              <SocialLinks />

              {/* <div className="flex space-x-6">
                <Link to="/privacy" className="footer-link text-sm">Privacy Policy</Link>
                <Link to="/terms" className="footer-link text-sm">Terms of Service</Link>
                <Link to="/sitemap" className="footer-link text-sm">Sitemap</Link>
              </div> */}
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default ContactFooterSection;
