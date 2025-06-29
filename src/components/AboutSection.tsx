import MotionCard from './MotionCard';

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">About Decibello</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <MotionCard delay={0.1}>
            <div className="relative group">
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-xl">
                {/* Image Container */}
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                  <img 
                    src="https://picsum.photos/800/600" 
                    alt="Team" 
                    className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="backdrop-blur-lg bg-white/40 p-6 rounded-xl border border-white/20">
                    <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold text-4xl mb-2">
                      10+
                    </div>
                    <span className="text-dark/70 font-medium">Years Experience</span>
                  </div>
                  <div className="backdrop-blur-lg bg-white/40 p-6 rounded-xl border border-white/20">
                    <div className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold text-4xl mb-2">
                      50+
                    </div>
                    <span className="text-dark/70 font-medium">Clients Served</span>
                  </div>
                </div>
              </div>
            </div>
          </MotionCard>

          {/* Right Column - Content */}
          <MotionCard delay={0.3}>
            <div className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-xl">
              <p className="text-lg text-dark/80 mb-8 leading-relaxed">
                Decibello Limited is a research-based digital marketing agency with teams of seasoned experts and specialists who are passionately dedicated to clients' success.
              </p>
              
              <div className="space-y-6">
                <div className="backdrop-blur-lg bg-white/40 p-6 rounded-xl border border-white/20 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-primary to-primary/50 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark">Data-Driven Approach</h3>
                  </div>
                  <p className="text-dark/70">We base all our strategies on thorough research and analytics, ensuring measurable results for your business.</p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 p-6 rounded-xl border border-white/20 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary/50 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-dark">Client Partnership</h3>
                  </div>
                  <p className="text-dark/70">We work as an extension of your team, providing dedicated support and expertise throughout our partnership.</p>
                </div>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
