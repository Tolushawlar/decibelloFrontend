import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const RetailPage = () => {
  const caseStudies = [
    {
      title: 'E-commerce Growth for Fashion Retailer',
      description: 'Helped a fashion retailer increase online sales by 65% through omnichannel marketing and personalized customer experiences.',
      image: 'https://picsum.photos/600/400?random=92'
    },
    {
      title: 'Customer Retention for Consumer Brand',
      description: 'Developed loyalty programs and targeted campaigns that improved customer retention by 40% and increased lifetime value.',
      image: 'https://picsum.photos/600/400?random=93'
    }
  ];

  const services = [
    {
      title: 'Omnichannel Strategy',
      description: 'Create seamless shopping experiences across physical stores, e-commerce, mobile apps, and social commerce.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
        </svg>
      )
    },
    {
      title: 'Customer Analytics',
      description: 'Leverage data to understand customer behavior, personalize experiences, and increase loyalty and lifetime value.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    },
    {
      title: 'Digital Commerce',
      description: 'Build and optimize e-commerce platforms that drive conversion, reduce friction, and scale with your business.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Improve visibility, efficiency, and resilience in your supply chain with advanced analytics and digital technologies.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Retail & Consumer Goods</h1>
              <p className="text-xl text-dark/70 mb-8">
                Transform the retail experience with data-driven marketing strategies that enhance customer engagement, optimize operations, and drive growth in the digital age.
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
                src="https://picsum.photos/800/600?random=96"
                alt="Retail Marketing Solutions"
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Retail Marketing Challenges</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Retail businesses face unique challenges in today's competitive landscape. We help navigate digital disruption and changing consumer expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Changing Consumer Expectations',
                description: 'Adapt to evolving customer preferences and demands for personalized experiences.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                )
              },
              {
                title: 'Digital Disruption',
                description: 'Navigate the shift to digital channels and new business models while maintaining competitive advantage.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Supply Chain Complexity',
                description: 'Manage global supply networks and mitigate disruption risks while maintaining efficiency.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Retail Marketing Services</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Retail Industry Case Studies</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Marketing?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Decibello to develop innovative marketing strategies that enhance customer experiences and drive growth in the competitive retail landscape.
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

export default RetailPage;