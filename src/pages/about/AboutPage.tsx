import ContactFooterSection from '../../components/ContactFooterSection';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">About Decibello</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              We are a research-based digital marketing agency transforming data into strategy for measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-dark/70 mb-6">
                Decibello Limited was founded in 2015 with a mission to bridge the gap between data analytics and strategic marketing. Our team of seasoned experts brings together diverse backgrounds in market research, data science, and creative strategy.
              </p>
              <p className="text-dark/70">
                We believe that the most effective marketing strategies are built on a foundation of robust data and deep market understanding. This philosophy has guided our approach to helping businesses across various industries achieve sustainable growth.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
              <img 
                src="https://picsum.photos/800/600?random=20" 
                alt="Decibello Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR COMMITMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">What We Stand For</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Client Success",
                description: "We measure our success by the results we deliver for our clients. Your growth is our priority.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: "Data Integrity",
                description: "We uphold the highest standards of data accuracy and ethical research practices in all our work.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously explore new methodologies and technologies to stay at the forefront of digital marketing.",
                icon: (
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                  </svg>
                )
              }
            ].map((commitment, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{commitment.title}</h3>
                <p className="text-dark/70">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              HOW WE WORK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, market, and objectives through deep research."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop data-driven strategies tailored to your specific goals and market position."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute plans with precision, attention to detail, and continuous optimization."
              },
              {
                step: "04",
                title: "Analysis",
                description: "We measure results, refine strategies, and ensure ongoing improvement and growth."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-light p-8 rounded-lg h-full">
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

      <ContactFooterSection />
    </>
  );
};

export default AboutPage;
