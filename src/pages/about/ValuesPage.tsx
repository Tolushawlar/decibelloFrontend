import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const ValuesPage = () => {
  const coreValues = [
    {
      title: 'Integrity First',
      description: 'We believe trust is the foundation of every successful partnership. We maintain the highest ethical standards in all our interactions, providing transparent communication and honest counsel even when it\'s difficult.',
      principles: [
        'Transparent reporting and communication',
        'Honest assessment of challenges and opportunities',
        'Ethical data practices and privacy protection',
        'Accountability for our commitments and results'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success. We go beyond delivering services to become true partners, deeply understanding their business challenges and working tirelessly to exceed their expectations.',
      principles: [
        'Deep understanding of client business objectives',
        'Proactive identification of growth opportunities',
        'Continuous optimization and improvement',
        'Long-term partnership mindset'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Innovation Excellence',
      description: 'We embrace change and continuously seek new ways to solve complex marketing challenges. Innovation isn\'t just about technology—it\'s about creative thinking and bold approaches to drive results.',
      principles: [
        'Continuous learning and skill development',
        'Experimentation with new technologies and methods',
        'Creative problem-solving approaches',
        'Investment in cutting-edge tools and platforms'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every strategy, campaign, and recommendation is backed by rigorous data analysis. We believe in the power of insights to drive meaningful business outcomes and measurable results.',
      principles: [
        'Evidence-based strategy development',
        'Comprehensive measurement and analytics',
        'Continuous testing and optimization',
        'Clear ROI demonstration'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    },
    {
      title: 'Collaborative Spirit',
      description: 'Great results come from great teamwork. We foster a collaborative environment where diverse perspectives are valued, and everyone contributes to our collective success.',
      principles: [
        'Open communication and knowledge sharing',
        'Respect for diverse perspectives and backgrounds',
        'Cross-functional collaboration',
        'Collective ownership of outcomes'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      )
    },
    {
      title: 'Sustainable Growth',
      description: 'We focus on building long-term value rather than short-term gains. Our strategies are designed to create sustainable competitive advantages that drive lasting business growth.',
      principles: [
        'Long-term strategic thinking',
        'Sustainable business practices',
        'Investment in lasting capabilities',
        'Responsible resource management'
      ],
      icon: (
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd"></path>
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Values</h1>
              <p className="text-xl text-dark/70 mb-8">
                The principles that guide every decision we make, every strategy we develop, and every relationship we build. These values are the foundation of who we are and how we work.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=111"
                alt="Our Values"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Values in Action</h2>
              <p className="text-xl text-dark/70 max-w-4xl mx-auto">
                Our values aren't just words on a wall—they're the driving force behind every project we undertake, every relationship we build, and every result we deliver. They shape our culture and define our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              CORE VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">What Drives Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{value.title}</h3>
                  <p className="text-dark/70 mb-6 leading-relaxed">{value.description}</p>
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-sm font-semibold text-dark mb-4">Key Principles</h4>
                    <ul className="space-y-2">
                      {value.principles.map((principle, principleIndex) => (
                        <li key={principleIndex} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="ml-3 text-dark/70 text-sm">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values in Practice */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              VALUES IN PRACTICE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">How We Live Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Client Relationships',
                description: 'We build lasting partnerships based on trust, transparency, and mutual success. Our values guide every client interaction.',
                examples: [
                  'Regular strategy reviews and optimization',
                  'Transparent reporting and communication',
                  'Proactive problem-solving and support'
                ]
              },
              {
                title: 'Team Culture',
                description: 'Our values create an environment where everyone can thrive, contribute, and grow professionally.',
                examples: [
                  'Collaborative project management',
                  'Continuous learning opportunities',
                  'Recognition and career development'
                ]
              },
              {
                title: 'Business Operations',
                description: 'Every business decision is evaluated against our core values to ensure alignment with our mission.',
                examples: [
                  'Ethical vendor partnerships',
                  'Sustainable business practices',
                  'Community involvement and giving back'
                ]
              }
            ].map((practice, index) => (
              <div key={index} className="bg-light/50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-dark mb-4">{practice.title}</h3>
                <p className="text-dark/70 mb-6">{practice.description}</p>
                <ul className="space-y-2">
                  {practice.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-dark/70 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Impact */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                MEASURABLE IMPACT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Values Drive Results</h2>
              <p className="text-dark/70 mb-6">
                Our commitment to these values isn't just philosophical—it creates tangible benefits for our clients, our team, and our business.
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
                  <p className="ml-3 text-dark/70">95% client retention rate through trust-based relationships</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Industry-leading employee satisfaction and retention</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Consistent delivery of measurable ROI for clients</p>
                </li>
              </ul>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=112"
                alt="Values Impact"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Our Values in Action</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with a team that puts integrity, innovation, and your success at the center of everything we do.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Start Your Partnership
          </Link>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default ValuesPage;
