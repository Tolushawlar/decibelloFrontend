import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const OurStoryPage = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Founded with Vision',
      description: 'Decibello was founded with a mission to help businesses amplify their voice in the digital landscape through data-driven marketing strategies.'
    },
    {
      year: '2019',
      title: 'First Major Clients',
      description: 'Secured partnerships with leading healthcare and financial services companies, establishing our expertise in regulated industries.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Pivoted to fully remote operations and expanded our digital marketing capabilities during the global shift to digital-first strategies.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team of specialists across data analytics, creative strategy, and industry expertise to better serve our clients.'
    },
    {
      year: '2022',
      title: 'Technology Innovation',
      description: 'Launched proprietary marketing analytics platform and AI-driven optimization tools to deliver superior results for clients.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded operations internationally and established partnerships with leading technology and consulting firms.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Our Story</h1>
              <p className="text-xl text-dark/70 mb-8">
                From a bold vision to transform marketing through data and creativity, Decibello has grown into a trusted partner for businesses seeking meaningful growth and authentic connections with their audiences.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=102"
                alt="Our Story"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Mission</h2>
              <p className="text-xl text-dark/70 max-w-4xl mx-auto">
                To amplify our clients' voices in the digital landscape by delivering data-driven marketing strategies that create authentic connections, drive meaningful engagement, and generate sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">The Beginning</h2>
              <p className="text-dark/70 mb-6">
                Decibello was born from a simple observation: too many businesses were struggling to cut through the noise in an increasingly crowded digital marketplace. Traditional marketing approaches were failing to deliver the authentic connections and measurable results that modern businesses needed.
              </p>
              <p className="text-dark/70 mb-6">
                Our founders, with decades of combined experience in marketing, data analytics, and business strategy, recognized that the future belonged to companies that could seamlessly blend creativity with data-driven insights.
              </p>
              <p className="text-dark/70">
                We set out to build a different kind of marketing agency—one that would prioritize long-term partnerships over quick wins, and sustainable growth over vanity metrics.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=103"
                alt="The Beginning"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=104"
                alt="Our Approach"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Approach</h2>
              <p className="text-dark/70 mb-6">
                From day one, we've believed that great marketing starts with deep understanding. We don't just create campaigns; we immerse ourselves in our clients' industries, challenges, and opportunities.
              </p>
              <p className="text-dark/70 mb-6">
                Our methodology combines rigorous data analysis with creative storytelling, ensuring that every strategy we develop is both emotionally resonant and measurably effective.
              </p>
              <p className="text-dark/70">
                This approach has allowed us to build lasting partnerships with clients across healthcare, financial services, retail, and technology sectors, consistently delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Key Milestones</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-dark mb-3">{milestone.title}</h3>
                      <p className="text-dark/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              LOOKING AHEAD
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">The Future of Decibello</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation Leadership',
                description: 'Continue pioneering new marketing technologies and methodologies that deliver superior results for our clients.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Global Expansion',
                description: 'Extend our reach to serve clients worldwide while maintaining the personalized service that defines our approach.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: 'Industry Impact',
                description: 'Shape the future of marketing by setting new standards for transparency, effectiveness, and ethical practices.',
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                )
              }
            ].map((vision, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {vision.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{vision.title}</h3>
                <p className="text-dark/70">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Decibello to amplify their voice and drive meaningful growth in the digital landscape.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default OurStoryPage;
