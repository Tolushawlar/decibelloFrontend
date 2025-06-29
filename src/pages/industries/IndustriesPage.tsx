import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const IndustriesPage = () => {
  const industries = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      description: 'Data-driven strategies for banks, fintech, and investment firms to enhance customer experience and drive growth.',
      image: 'https://picsum.photos/800/500?random=80',
      color: 'primary'
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Innovative digital marketing solutions for healthcare providers, pharmaceutical companies, and medical technology firms.',
      image: 'https://picsum.photos/800/500?random=81',
      color: 'secondary'
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Strategic marketing approaches for tech companies to stand out in competitive markets and connect with target audiences.',
      image: 'https://picsum.photos/800/500?random=82',
      color: 'primary'
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Omnichannel marketing strategies for retailers to enhance customer engagement and drive sales across platforms.',
      image: 'https://picsum.photos/800/500?random=83',
      color: 'secondary'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Industries</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              We deliver tailored digital marketing solutions across diverse industries, leveraging deep sector knowledge and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.id} className="group">
                <Link to={`/industries/${industry.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full border border-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-dark/70 mb-6">{industry.description}</p>
                      <div className="inline-flex items-center text-primary hover:text-secondary transition-colors group/link">
                        <span className="mr-2">Learn More</span>
                        <svg 
                          className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Industry Expertise</h2>
              <p className="text-dark/70 mb-6">
                At Decibello, we combine deep industry knowledge with data-driven marketing strategies to deliver exceptional results for our clients. Our team of specialists understands the unique challenges and opportunities in each sector.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Industry-specific market research and analysis',
                  'Tailored strategies that address sector challenges',
                  'Compliance-aware marketing for regulated industries',
                  'Competitive positioning based on industry trends',
                  'Performance metrics aligned with industry benchmarks'
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
            </div>
            
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=85"
                alt="Industry Expertise"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default IndustriesPage;
