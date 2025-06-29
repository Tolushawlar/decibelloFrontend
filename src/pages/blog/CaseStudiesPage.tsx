import React from 'react';
import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
// import ImageWithOverlay from '../../components/ImageWithOverlay';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Growth: 300% Revenue Increase for Fashion Retailer',
      client: 'Fashion Forward Co.',
      industry: 'Retail',
      challenge: 'Low online conversion rates and poor customer retention',
      solution: 'Implemented data-driven personalization and omnichannel strategy',
      results: ['300% increase in online revenue', '65% improvement in conversion rate', '40% increase in customer lifetime value'],
      image: 'https://picsum.photos/800/600?random=50',
      tags: ['E-commerce', 'Personalization', 'Retail'],
      duration: '6 months'
    },
    {
      id: 2,
      title: 'Digital Transformation: Regional Bank Customer Acquisition',
      client: 'Community First Bank',
      industry: 'Financial Services',
      challenge: 'Declining customer acquisition and digital engagement',
      solution: 'Developed comprehensive digital marketing strategy with compliance focus',
      results: ['45% increase in digital engagement', '32% reduction in acquisition costs', '25% growth in new accounts'],
      image: 'https://picsum.photos/800/600?random=51',
      tags: ['Banking', 'Digital Marketing', 'Customer Acquisition'],
      duration: '8 months'
    },
    {
      id: 3,
      title: 'Healthcare Practice Growth: Patient Engagement Revolution',
      client: 'Metro Health Group',
      industry: 'Healthcare',
      challenge: 'Low patient engagement and appointment no-shows',
      solution: 'Created patient-centric digital experience with automated communications',
      results: ['50% reduction in no-shows', '35% increase in patient satisfaction', '28% growth in new patients'],
      image: 'https://picsum.photos/800/600?random=52',
      tags: ['Healthcare', 'Patient Engagement', 'Automation'],
      duration: '4 months'
    },
    {
      id: 4,
      title: 'B2B Lead Generation: Tech Startup Success Story',
      client: 'InnovateTech Solutions',
      industry: 'Technology',
      challenge: 'Struggling to generate qualified leads and establish market presence',
      solution: 'Implemented account-based marketing with content strategy',
      results: ['200% increase in qualified leads', '85% improvement in lead quality', '150% growth in pipeline value'],
      image: 'https://picsum.photos/800/600?random=53',
      tags: ['B2B', 'Lead Generation', 'Technology'],
      duration: '5 months'
    },
    {
      id: 5,
      title: 'Brand Repositioning: Manufacturing Company Modernization',
      client: 'Industrial Solutions Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated brand perception and declining market share',
      solution: 'Complete brand overhaul with digital-first marketing approach',
      results: ['60% improvement in brand perception', '40% increase in market share', '75% growth in digital inquiries'],
      image: 'https://picsum.photos/800/600?random=54',
      tags: ['Branding', 'Manufacturing', 'Digital Transformation'],
      duration: '12 months'
    },
    {
      id: 6,
      title: 'Customer Retention: SaaS Platform Optimization',
      client: 'CloudFlow Systems',
      industry: 'Software',
      challenge: 'High churn rate and low customer engagement',
      solution: 'Developed customer success program with predictive analytics',
      results: ['45% reduction in churn rate', '70% increase in user engagement', '55% improvement in customer satisfaction'],
      image: 'https://picsum.photos/800/600?random=55',
      tags: ['SaaS', 'Customer Retention', 'Analytics'],
      duration: '7 months'
    }
  ];

  const industries = ['All', 'Retail', 'Financial Services', 'Healthcare', 'Technology', 'Manufacturing', 'Software'];
  const [selectedIndustry, setSelectedIndustry] = React.useState('All');

  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link 
              to="/blog"
              className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Insights
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Case Studies</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped businesses across industries achieve measurable growth through data-driven marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-dark/70">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200%</div>
              <div className="text-dark/70">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-dark/70">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-dark/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIndustry === industry
                    ? 'bg-primary text-white' 
                    : 'bg-white text-dark/70 hover:bg-light'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 text-dark px-3 py-1 rounded-full text-sm">
                        {study.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark mb-3">{study.title}</h3>
                    <p className="text-primary font-medium mb-4">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Challenge</h4>
                        <p className="text-dark/70 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Solution</h4>
                        <p className="text-dark/70 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, index) => (
                            <li key={index} className="text-dark/70 text-sm flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, index) => (
                        <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to="#"
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link"
                    >
                      <span className="mr-2">View Full Case Study</span>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our growing list of successful clients. Let's discuss how we can help you achieve similar results for your business.
          </p>
          <a 
            href="#contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default CaseStudiesPage;