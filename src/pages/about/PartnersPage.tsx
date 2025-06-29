import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const PartnersPage = () => {
  const technologyPartners = [
    {
      name: 'Google Cloud',
      category: 'Cloud Infrastructure',
      description: 'Advanced analytics and machine learning capabilities for marketing optimization',
      logo: 'https://picsum.photos/200/100?random=113'
    },
    {
      name: 'Salesforce',
      category: 'CRM & Marketing Automation',
      description: 'Customer relationship management and marketing automation platform integration',
      logo: 'https://picsum.photos/200/100?random=114'
    },
    {
      name: 'Adobe',
      category: 'Creative & Analytics',
      description: 'Creative suite and analytics tools for comprehensive marketing solutions',
      logo: 'https://picsum.photos/200/100?random=115'
    },
    {
      name: 'HubSpot',
      category: 'Inbound Marketing',
      description: 'Inbound marketing and sales platform for lead generation and nurturing',
      logo: 'https://picsum.photos/200/100?random=116'
    }
  ];

  const strategicPartners = [
    {
      name: 'McKinsey & Company',
      category: 'Management Consulting',
      description: 'Strategic consulting partnership for enterprise transformation initiatives',
      logo: 'https://picsum.photos/200/100?random=117'
    },
    {
      name: 'Deloitte Digital',
      category: 'Digital Transformation',
      description: 'Collaborative approach to large-scale digital marketing transformations',
      logo: 'https://picsum.photos/200/100?random=118'
    },
    {
      name: 'Accenture Interactive',
      category: 'Experience Design',
      description: 'Joint delivery of customer experience and digital marketing solutions',
      logo: 'https://picsum.photos/200/100?random=119'
    }
  ];

  const industryPartners = [
    {
      name: 'Healthcare Marketing Association',
      category: 'Healthcare',
      description: 'Leading healthcare marketing best practices and compliance standards'
    },
    {
      name: 'Financial Marketing Association',
      category: 'Financial Services',
      description: 'Advancing marketing excellence in financial services industry'
    },
    {
      name: 'Retail Industry Leaders Association',
      category: 'Retail',
      description: 'Driving innovation in retail marketing and customer experience'
    },
    {
      name: 'Technology Marketing Council',
      category: 'Technology',
      description: 'Shaping the future of B2B technology marketing strategies'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link 
                to="/about"
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
                About Us
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Partners</h1>
              <p className="text-xl text-dark/70 mb-8">
                Strategic partnerships that amplify our capabilities and extend our reach, enabling us to deliver world-class marketing solutions across industries and technologies.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=120"
                alt="Our Partners"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Partnership Philosophy</h2>
              <p className="text-xl text-dark/70 max-w-4xl mx-auto mb-8">
                We believe that great partnerships create exponential value. By collaborating with industry leaders, technology innovators, and strategic consultants, we deliver comprehensive solutions that exceed what any single organization could achieve alone.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Mutual Success</h3>
                  <p className="text-dark/70">Partnerships built on shared goals and mutual benefit</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Innovation Focus</h3>
                  <p className="text-dark/70">Collaborative innovation that pushes industry boundaries</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Client Value</h3>
                  <p className="text-dark/70">Enhanced capabilities that deliver superior client outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              TECHNOLOGY PARTNERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Leading Technology Platforms</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Strategic partnerships with industry-leading technology platforms that power our marketing solutions and drive client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologyPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark mb-2">{partner.name}</h3>
                    <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="text-dark/70">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              STRATEGIC PARTNERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Global Consulting Alliances</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Collaborations with world-class consulting firms that enable us to deliver comprehensive transformation solutions at enterprise scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-light/50 rounded-2xl p-8 text-center">
                <div className="w-24 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{partner.name}</h3>
                <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-4">
                  {partner.category}
                </span>
                <p className="text-dark/70">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              INDUSTRY PARTNERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Industry Associations & Organizations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Active participation in industry organizations that keep us at the forefront of marketing trends, best practices, and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryPartners.map((partner, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-dark mb-2">{partner.name}</h4>
                  <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-3">
                    {partner.category}
                  </span>
                  <p className="text-dark/70">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                PARTNERSHIP BENEFITS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Enhanced Client Value</h2>
              <p className="text-dark/70 mb-6">
                Our strategic partnerships enable us to deliver comprehensive solutions that combine best-in-class technologies, proven methodologies, and deep industry expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Access to cutting-edge technologies and platforms</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Expanded capabilities for complex enterprise projects</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Industry-leading best practices and methodologies</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Global reach and local market expertise</p>
                </li>
              </ul>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=121"
                alt="Partnership Benefits"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              PARTNERSHIP OPPORTUNITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Become a Partner</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              We're always looking for strategic partners who share our commitment to innovation, excellence, and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology Partners',
                description: 'Platform providers and technology companies looking to expand their market reach through strategic marketing partnerships.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Consulting Partners',
                description: 'Management consulting and professional services firms seeking marketing expertise for client engagements.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                )
              },
              {
                title: 'Industry Specialists',
                description: 'Domain experts and specialized agencies looking to collaborate on industry-specific marketing initiatives.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )
              }
            ].map((opportunity, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{opportunity.title}</h3>
                <p className="text-dark/70">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Partnership?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Explore partnership opportunities with Decibello and discover how we can create mutual value through strategic collaboration.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Explore Partnership
          </Link>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default PartnersPage;
