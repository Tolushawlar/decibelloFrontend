// import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const BrandStrategyPage = () => {
  const services = [
    {
      title: 'Brand Positioning & Strategy',
      description: 'Define your unique market position and value proposition that sets you apart from competitors and resonates with your target audience.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Brand Identity Development',
      description: 'Create cohesive visual and verbal identity systems including logos, color palettes, typography, and brand voice guidelines.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Brand Messaging Framework',
      description: 'Develop consistent messaging architecture that communicates your brand values, benefits, and personality across all touchpoints.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Brand Architecture',
      description: 'Structure your brand portfolio and define relationships between parent brands, sub-brands, and product lines for clarity and growth.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Brand Experience Design',
      description: 'Design meaningful brand experiences across all customer touchpoints to build emotional connections and drive loyalty.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      )
    },
    {
      title: 'Brand Guidelines & Standards',
      description: 'Establish comprehensive brand guidelines that ensure consistent application of your brand across all channels and communications.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
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
                to="/capabilities"
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
                All Capabilities
              </Link> */}
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Brand Strategy</h1>
              <p className="text-xl text-dark/70 mb-8">
                Build powerful brands that resonate with your audience, differentiate from competitors, and drive sustainable business growth through strategic positioning and compelling storytelling.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=124"
                alt="Brand Strategy"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  180%
                </div>
                <p className="text-dark/70">average increase in brand recognition</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  65%
                </div>
                <p className="text-dark/70">improvement in customer loyalty</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  45%
                </div>
                <p className="text-dark/70">increase in premium pricing power</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  7.3x
                </div>
                <p className="text-dark/70">ROI from strategic brand investments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              BRAND CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Brand Strategy Challenges We Solve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Many organizations struggle with brand clarity, differentiation, and consistency. We help build strong, distinctive brands that drive business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Brand Differentiation',
                description: 'Stand out in crowded markets with unique positioning and messaging that clearly communicates your distinctive value proposition.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Brand Consistency',
                description: 'Ensure consistent brand experience across all touchpoints with comprehensive guidelines and implementation standards.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Brand Relevance',
                description: 'Keep your brand relevant and resonant with evolving customer needs, market trends, and competitive landscape.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Brand Portfolio Management',
                description: 'Optimize brand architecture and portfolio strategy to maximize synergies while maintaining clear brand distinctions.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )
              }
            ].map((challenge, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {challenge.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-dark mb-2">{challenge.title}</h4>
                  <p className="text-dark/70">{challenge.description}</p>
                </div>
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
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Brand Strategy Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Brand Strategy Development</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Brand Discovery",
                description: "Conduct comprehensive research to understand your business, market, competitors, and target audience insights."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Define brand positioning, personality, values, and messaging framework based on research findings and business goals."
              },
              {
                step: "03",
                title: "Identity Creation",
                description: "Design visual and verbal identity elements that bring your brand strategy to life across all touchpoints."
              },
              {
                step: "04",
                title: "Implementation & Guidelines",
                description: "Create comprehensive brand guidelines and support implementation across all marketing and communication channels."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-light/50 p-8 rounded-lg h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-dark mb-4">{step.title}</h3>
                  <p className="text-dark/70">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="h-6 w-6 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                CASE STUDY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Tech Startup Brand Transformation</h2>
              <p className="text-dark/70 mb-6">
                We helped a B2B technology startup develop a compelling brand strategy that increased brand recognition by 180% and supported their successful Series A funding round.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">180% increase in brand recognition</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">75% improvement in lead quality</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">Successful $15M Series A funding</p>
                </li>
              </ul>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=125"
                alt="Brand Strategy Case Study"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build a Powerful Brand?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Transform your brand into a strategic asset that drives customer loyalty, premium pricing, and sustainable business growth.
          </p>
          {/* <Link 
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Start Your Brand Journey
          </Link> */}
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default BrandStrategyPage;
