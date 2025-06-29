import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const HealthcarePage = () => {
  const solutions = [
    {
      title: 'Patient Acquisition',
      description: 'Data-driven strategies to attract patients through targeted digital marketing campaigns.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    },
    {
      title: 'Digital Patient Experience',
      description: 'Enhance patient engagement through optimized digital touchpoints and communication.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Healthcare Content Marketing',
      description: 'Develop authoritative, compliant content that educates patients and builds trust.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'HIPAA-Compliant Marketing',
      description: 'Marketing strategies that drive results while maintaining patient privacy and regulatory compliance.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  const stats = [
    { value: '78%', label: 'of patients research online before choosing a provider' },
    { value: '61%', label: 'of patients visit a hospital website before booking' },
    { value: '47%', label: 'increase in conversion rates with targeted healthcare marketing' },
    { value: '3.8x', label: 'ROI from digital marketing for healthcare organizations' }
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Healthcare</h1>
              <p className="text-xl text-dark/70 mb-8">
                Strategic digital marketing solutions for healthcare providers, pharmaceutical companies, and medical technology firms that drive patient engagement while maintaining compliance.
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
                alt="Healthcare Marketing"
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
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-dark/70">{stat.label}</p>
                </div>
              ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Healthcare Marketing Challenges</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Healthcare organizations face unique marketing challenges in today's digital landscape. We help navigate these complexities with tailored strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Patient Privacy & HIPAA Compliance',
                description: 'Navigate complex healthcare regulations while creating effective marketing campaigns that protect patient information.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Building Patient Trust',
                description: 'Develop marketing strategies that build credibility and trust in an industry where patient confidence is paramount.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                )
              },
              {
                title: 'Digital Transformation',
                description: 'Help healthcare organizations transition to digital patient engagement while maintaining personal connection.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Competitive Differentiation',
                description: 'Create distinctive positioning in an increasingly competitive healthcare marketplace.',
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
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

      {/* Solutions Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Healthcare Marketing Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{solution.title}</h3>
                <p className="text-dark/70">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                CASE STUDY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Regional Hospital Network</h2>
              <p className="text-dark/70 mb-6">
                We helped a regional hospital network increase patient appointments by 43% through targeted digital marketing campaigns and improved online patient experience.
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
                  <p className="ml-3 text-dark/70">43% increase in online appointment bookings</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">67% improvement in patient satisfaction scores</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-dark/70">28% reduction in cost per acquisition</p>
                </li>
              </ul>
              {/* <Link 
                to="#"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
              >
                <span className="mr-2">Read Full Case Study</span>
                <svg 
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link> */}
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=97"
                alt="Healthcare Case Study"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Healthcare Marketing?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Decibello to develop compliant, effective marketing strategies that drive patient engagement and organizational growth.
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

export default HealthcarePage;
