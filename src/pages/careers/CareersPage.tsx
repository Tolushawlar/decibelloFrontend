import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';

const CareersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Join Our Team</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Build your career at Decibello and help transform how businesses leverage data for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              CAREER PATHS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Find Your Path</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Careers",
                description: "Start your professional journey with mentorship, training, and hands-on experience in a collaborative environment.",
                image: "https://picsum.photos/600/400?random=30",
                link: "/careers/early-careers"
              },
              {
                title: "Experienced Professionals",
                description: "Take the next step in your career with challenging opportunities that leverage your expertise and expand your skills.",
                image: "https://picsum.photos/600/400?random=31",
                link: "/careers/experienced"
              },
              {
                title: "Search Jobs",
                description: "Explore our current openings across departments and locations to find the perfect role for your skills and aspirations.",
                image: "https://picsum.photos/600/400?random=32",
                link: "/careers/jobs"
              }
            ].map((path, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={path.image} 
                      alt={path.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{path.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-dark/70 mb-6">{path.description}</p>
                    <Link 
                      to={path.link}
                      className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link"
                    >
                      <span className="mr-2">Learn More</span>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              WHY JOIN US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Life at Decibello</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://picsum.photos/800/600?random=33" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Growth & Development",
                    description: "Continuous learning opportunities, mentorship programs, and career advancement paths."
                  },
                  {
                    title: "Collaborative Culture",
                    description: "Work alongside talented professionals in a supportive and innovative environment."
                  },
                  {
                    title: "Work-Life Balance",
                    description: "Flexible work arrangements and policies that support your wellbeing and personal life."
                  },
                  {
                    title: "Impactful Work",
                    description: "Contribute to projects that drive real business results for leading organizations."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-dark mb-2">{benefit.title}</h3>
                      <p className="text-dark/70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role for your skills and career aspirations.
          </p>
          <Link 
            to="/careers/jobs"
            className="bg-white text-primary px-8 py-3 rounded hover:bg-light transition-colors font-medium inline-block"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default CareersPage;
