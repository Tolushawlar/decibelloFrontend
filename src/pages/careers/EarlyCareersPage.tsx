import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const EarlyCareersPage = () => {
  const programs = [
    {
      title: 'Graduate Program',
      description: 'A two-year rotational program designed for recent graduates to gain experience across different areas of digital marketing and data analytics.',
      image: 'https://picsum.photos/600/400?random=50',
      link: '/careers/early-careers/graduate'
    },
    {
      title: 'Summer Internship',
      description: 'A 10-week program for undergraduate students to work on real client projects and gain hands-on experience in the digital marketing industry.',
      image: 'https://picsum.photos/600/400?random=51',
      link: '/careers/early-careers/internship'
    },
    {
      title: 'Apprenticeship',
      description: 'A 12-month program combining on-the-job training with formal education to develop specialized skills in digital marketing.',
      image: 'https://picsum.photos/600/400?random=52',
      link: '/careers/early-careers/apprenticeship'
    }
  ];

  const testimonials = [
    {
      quote: "The graduate program at Decibello gave me the opportunity to work with diverse clients and develop a broad skill set that has been invaluable for my career growth.",
      name: "Alex Johnson",
      role: "Marketing Analyst, Graduate Program 2023",
      image: "https://picsum.photos/100/100?random=60"
    },
    {
      quote: "My internship experience was hands-on from day one. I was able to contribute to real client projects and received mentorship from industry experts.",
      name: "Sophia Chen",
      role: "Digital Strategist, Former Intern",
      image: "https://picsum.photos/100/100?random=61"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Early Careers</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Launch your career at Decibello with programs designed to develop the next generation of digital marketing leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Start Your Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              We offer several entry points for talented individuals looking to begin their career in digital marketing and data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{program.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-dark/70 mb-6">{program.description}</p>
                    {/* <Link 
                      to={program.link}
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
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                YOUR GROWTH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Learning & Development</h2>
              <p className="text-dark/70 mb-6">
                At Decibello, we're committed to helping you develop both professionally and personally. Our early career programs include structured learning opportunities, mentorship, and hands-on experience.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Formal training in digital marketing fundamentals',
                  'Mentorship from industry experts',
                  'Regular feedback and performance reviews',
                  'Opportunities to work on diverse client projects',
                  'Clear path for career progression'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-dark/70">{item}</p>
                  </div>
                ))}
              </div>
              
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
                src="https://picsum.photos/800/600?random=55"
                alt="Learning and Development"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Hear From Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 p-8 rounded-2xl border border-white/20 shadow-sm">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-dark/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-dark/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Career?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our current openings and find the perfect role to launch your career in digital marketing.
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

export default EarlyCareersPage;
