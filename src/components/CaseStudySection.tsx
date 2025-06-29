import { useState, useRef } from 'react';
import MotionCard from './MotionCard';

const CaseStudySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      title: "E-commerce Conversion Boost",
      client: "RetailTech Inc.",
      image: "https://picsum.photos/800/600?random=10",
      results: ["156% ROI increase", "43% higher conversion rate", "12-month growth plan"],
      description: "Transformed the digital strategy of a leading e-commerce platform, resulting in significant conversion improvements and sustainable growth.",
      color: "primary"
    },
    {
      title: "Brand Repositioning Campaign",
      client: "Innovate Solutions",
      image: "https://picsum.photos/800/600?random=11",
      results: ["89% brand awareness lift", "2.3M social impressions", "65% engagement increase"],
      description: "Developed and executed a comprehensive brand repositioning strategy that established the client as an industry thought leader.",
      color: "secondary"
    },
    {
      title: "Lead Generation Optimization",
      client: "GrowthFund Partners",
      image: "https://picsum.photos/800/600?random=12",
      results: ["217% more qualified leads", "38% lower acquisition cost", "4.2x ROI"],
      description: "Implemented data-driven lead generation strategies that dramatically improved both the quality and quantity of leads while reducing costs.",
      color: "primary"
    },
    {
      title: "Market Expansion Strategy",
      client: "Global Ventures Ltd",
      image: "https://picsum.photos/800/600?random=13",
      results: ["3 new market entries", "127% revenue growth", "18-month acceleration"],
      description: "Created a strategic market expansion plan that enabled successful entry into multiple new territories ahead of projected timeline.",
      color: "secondary"
    }
  ];

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / caseStudies.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.scrollWidth / caseStudies.length;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section  id="case-studies" className="relative py-24 overflow-hidden bg-gradient-to-br from-light/50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Our Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore how we've helped businesses achieve remarkable results through data-driven strategies and innovative solutions.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mb-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-primary to-secondary w-10' 
                  : 'bg-dark/20 hover:bg-dark/40'
              }`}
              aria-label={`View case study ${index + 1}`}
            />
          ))}
        </div>

        {/* Case Studies Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          onScroll={handleScroll}
        >
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[40%] px-4 snap-center"
            >
              <MotionCard delay={0.1 * index}>
                <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/20 shadow-xl overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t from-${study.color}/80 to-transparent mix-blend-multiply`}></div>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mb-2">
                        {study.client}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-dark/70 mb-6">{study.description}</p>
                    
                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-dark/50 uppercase tracking-wider mb-3">Results</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((result, i) => (
                          <span 
                            key={i} 
                            className={`inline-block bg-${study.color}/10 text-${study.color} text-sm px-3 py-1 rounded-full`}
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {/* <a 
                      href="#" 
                      className={`inline-flex items-center text-${study.color} hover:text-${study.color === 'primary' ? 'secondary' : 'primary'} transition-colors group`}
                    >
                      <span className="mr-2">View Case Study</span>
                      <svg 
                        className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </MotionCard>
            </div>
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-dark/70 hover:bg-white hover:text-dark transition-all"
            disabled={activeIndex === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={() => scrollToCard(Math.min(caseStudies.length - 1, activeIndex + 1))}
            className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-dark/70 hover:bg-white hover:text-dark transition-all"
            disabled={activeIndex === caseStudies.length - 1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
