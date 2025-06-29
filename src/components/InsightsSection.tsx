import { useState, useRef } from 'react';
import MotionCard from './MotionCard';

const InsightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const insights = [
    {
      title: "Digital Marketing Trends 2025",
      category: "Industry Report",
      image: "https://picsum.photos/800/500?random=20",
      summary: "Key trends shaping the future of digital marketing and customer engagement strategies.",
      stats: ["73% increase in AI adoption", "2.5x ROI improvement", "45% cost reduction"],
      readTime: "8 min read",
      gradient: "from-primary to-primary/60"
    },
    {
      title: "The Evolution of Data Analytics",
      category: "Research Study",
      image: "https://picsum.photos/800/500?random=21",
      summary: "How advanced analytics are transforming business decision-making processes.",
      stats: ["85% accuracy increase", "3x faster insights", "60% better predictions"],
      readTime: "12 min read",
      gradient: "from-secondary to-secondary/60"
    },
    {
      title: "Customer Experience in 2025",
      category: "White Paper",
      image: "https://picsum.photos/800/500?random=22",
      summary: "Next-generation approaches to delivering exceptional customer experiences.",
      stats: ["92% satisfaction rate", "4.8/5 avg. rating", "67% loyalty boost"],
      readTime: "10 min read",
      gradient: "from-primary to-primary/60"
    }
  ];

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section  id="insights" className="relative py-24 overflow-hidden bg-gradient-to-br from-light/50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            LATEST INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">Industry Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-dark/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay ahead with our latest research, trends, and insights in digital marketing and data analytics.
          </p>
        </div>

        {/* Insights Carousel */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4"
        >
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="min-w-full px-4 snap-center"
            >
              <MotionCard delay={0.1 * index}>
                <div className="backdrop-blur-xl bg-white/30 rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-full">
                      <div className={`absolute inset-0 bg-gradient-to-r ${insight.gradient} mix-blend-multiply`}></div>
                      <img 
                        src={insight.image} 
                        alt={insight.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 flex flex-col">
                      <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-dark mb-4">{insight.title}</h3>
                        <p className="text-dark/70 mb-6">{insight.summary}</p>
                        
                        {/* Stats */}
                        <div className="space-y-3 mb-6">
                          {insight.stats.map((stat, i) => (
                            <div key={i} className="flex items-center">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${insight.gradient} mr-3`}></div>
                              <span className="text-dark/70">{stat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* <div className="flex items-center justify-between mt-6 pt-6 border-t border-dark/10">
                        <span className="text-dark/50 text-sm">{insight.readTime}</span>
                        <a 
                          href="#" 
                          className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                        >
                          <span className="mr-2">Read More</span>
                          <svg 
                            className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </MotionCard>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-primary to-secondary w-12' 
                  : 'bg-dark/20 hover:bg-dark/40'
              }`}
              aria-label={`View insight ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
