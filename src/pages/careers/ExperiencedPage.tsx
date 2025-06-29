import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const ExperiencedPage = () => {
  const departments = [
    {
      title: 'Strategy',
      description: 'Lead strategic initiatives and help clients transform their digital marketing approach with data-driven insights.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      )
    },
    {
      title: 'Analytics',
      description: 'Transform complex data into actionable insights that drive business growth and marketing effectiveness.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Creative',
      description: 'Develop compelling brand narratives and creative campaigns that resonate with target audiences.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Client Services',
      description: 'Build and nurture client relationships while ensuring exceptional delivery of marketing solutions.',
      icon: (
        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities, including conferences, workshops, and certification programs.',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
        </svg>
      )
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous PTO, and wellness programs to support your wellbeing.',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Career Advancement',
      description: 'Clear paths for growth and advancement based on performance and expertise.',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Competitive Compensation',
      description: 'Salary packages that recognize your experience and contributions to our success.',
      icon: (
        <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Experienced Professionals</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Take your career to the next level at Decibello, where your expertise will drive transformative results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                WHY JOIN US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Make an Impact</h2>
              <p className="text-dark/70 mb-6">
                At Decibello, experienced professionals find more than just a job—they find a place to make a meaningful impact. We value your expertise and provide the resources and autonomy you need to deliver exceptional results.
              </p>
              <p className="text-dark/70 mb-8">
                Our collaborative culture encourages innovation and cross-functional teamwork, allowing you to expand your skills while working with industry-leading clients on challenging projects.
              </p>
              
              <Link 
                to="/careers/jobs"
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                <span>View Open Positions</span>
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=70"
                alt="Team Collaboration"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR DEPARTMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Find Your Fit</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Explore opportunities across our specialized departments where your expertise can make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-sm transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-4">{dept.title}</h3>
                <p className="text-dark/70 mb-6">{dept.description}</p>
                {/* <Link 
                  to={`/careers/jobs?department=${dept.title}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                >
                  <span className="mr-2">View Openings</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              BENEFITS & PERKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-dark mb-2">{benefit.title}</h4>
                  <p className="text-dark/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role to advance your career at Decibello.
          </p>
          <Link 
            to="/careers/jobs"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-light transition-colors font-medium inline-block"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default ExperiencedPage;
