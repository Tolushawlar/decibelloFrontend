import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const FinancialServicesPage = () => {
  const caseStudies = [
    {
      title: 'Digital Transformation for Regional Bank',
      description: 'Helped a regional bank increase digital engagement by 45% through targeted marketing campaigns and improved user experience.',
      image: 'https://picsum.photos/600/400?random=90'
    },
    {
      title: 'Customer Acquisition for Fintech Startup',
      description: 'Developed a data-driven strategy that reduced customer acquisition costs by 32% while increasing conversion rates.',
      image: 'https://picsum.photos/600/400?random=91'
    }
  ];

  const services = [
    {
      title: 'Customer Acquisition',
      description: 'Data-driven strategies to attract high-value customers through targeted digital channels.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      title: 'Digital Experience Optimization',
      description: 'Enhance user experience across digital platforms to improve engagement and conversion rates.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Compliance-Aware Marketing',
      description: 'Marketing strategies that drive results while adhering to financial industry regulations.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform financial data into actionable marketing insights that drive business growth.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <Link 
                to="/industries"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                All Industries
              </Link> */}
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Financial Services</h1>
              <p className="text-xl text-dark/70 mb-8">
                Data-driven marketing strategies for banks, fintech startups, investment firms, and insurance companies to enhance customer acquisition, engagement, and retention.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <span>Discuss Your Project</span>
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=95"
                alt="Financial Services Marketing"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              INDUSTRY CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Navigating Financial Marketing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Financial institutions face unique marketing challenges in today's digital landscape. We help navigate these complexities with tailored strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'Navigate complex financial regulations while creating effective marketing campaigns.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Digital Transformation',
                description: 'Transition from traditional to digital channels while maintaining customer trust.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Customer Trust',
                description: 'Build and maintain trust while marketing financial products and services.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                )
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-primary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{challenge.title}</h3>
                <p className="text-dark/70">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Financial Marketing Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Financial Industry Case Studies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{study.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-dark/70 mb-6">{study.description}</p>
                    {/* <Link 
                      to="#"
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link"
                    >
                      <span className="mr-2">Read Case Study</span>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link> */}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Financial Marketing?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Decibello to develop data-driven marketing strategies that drive growth while navigating the complexities of the financial industry.
          </p>
          {/* <Link 
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Contact Us Today
          </Link> */}
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default FinancialServicesPage;
