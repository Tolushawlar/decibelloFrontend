import { Link } from 'react-router-dom';
import MotionCard from './MotionCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive engagement, conversions, and sustainable growth across all channels.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "primary",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "Email Campaigns"],
      link: "/capabilities/digital-marketing"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive informed decision-making and measurable business outcomes.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "secondary",
      features: ["Performance Tracking", "Customer Insights", "Predictive Analytics", "ROI Measurement"],
      link: "/capabilities/data-analytics"
    },
    {
      title: "Brand Strategy",
      description: "Develop compelling brand narratives and positioning strategies that resonate with your target audience and differentiate your business.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "primary",
      features: ["Brand Positioning", "Visual Identity", "Messaging Framework", "Brand Guidelines"],
      link: "/capabilities/brand-strategy"
    },
    {
      title: "Market Research",
      description: "In-depth market analysis and consumer research that uncovers opportunities and informs strategic business decisions.",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: "secondary",
      features: ["Competitive Analysis", "Consumer Behavior", "Market Trends", "Opportunity Assessment"],
      link: "/capabilities/market-research"
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-br from-light/50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive solutions that transform data into strategy for measurable business growth and lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <MotionCard key={service.title} delay={0.1 * (index + 1)}>
              <Link to={service.link} className="block h-full">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary/20 group">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl mb-6 transition-colors ${
                    service.color === 'primary' 
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                      : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
                  }`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-dark/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                          service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                        }`}></div>
                        <span className="text-dark/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
