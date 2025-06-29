import { useState, useEffect } from 'react';
import MotionCard from './MotionCard';

const ApproachSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "https://picsum.photos/1200/800?random=1",
      title: "Research & Analysis",
      description: "Deep market research and data analysis to understand your unique position."
    },
    {
      image: "https://picsum.photos/1200/800?random=2",
      title: "Strategy Development",
      description: "Creating comprehensive strategies based on insights and objectives."
    },
    {
      image: "https://picsum.photos/1200/800?random=3",
      title: "Implementation",
      description: "Executing strategies with precision and continuous optimization."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="approach" className="relative py-24 overflow-hidden bg-gradient-to-br from-dark/5 to-transparent">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 px-4">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
            OUR APPROACH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">How We Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Column - Image Carousel */}
          <MotionCard delay={0.1}>
            <div className="relative h-[1000px] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeSlide 
                      ? 'opacity-100 translate-x-0' 
                      : index < activeSlide 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent z-10"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="absolute bottom-8 left-8 z-20 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </MotionCard>

          {/* Right Column - Content */}
          <MotionCard delay={0.3}>
            <div className="backdrop-blur-xl bg-white/30 p-12 lg:p-16 h-full border-l border-white/20">
              <div className="space-y-12">
                {/* Large Typography Section */}
                <div>
                  <h3 className="text-4xl md:text-5xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight mb-8">
                    Transform Data into Strategy
                  </h3>
                  <p className="text-xl text-dark/70 leading-relaxed max-w-2xl">
                    Our systematic approach combines deep analysis, strategic planning, and flawless execution to deliver exceptional results for your business.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-8">
                  {[1, 2, 3, 4].map((step) => (
                    <div 
                      key={step}
                      className="flex items-center space-x-6 group"
                      onMouseEnter={() => setActiveSlide(step - 1)}
                    >
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeSlide === step - 1
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'bg-white/50 text-dark/50 group-hover:bg-white/80'
                        }`}>
                          <span className="font-bold text-lg">{step}</span>
                        </div>
                        {step < 4 && (
                          <div className="absolute top-full left-1/2 w-px h-8 bg-dark/10"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-dark mb-2">
                          {['Discovery', 'Strategy', 'Implementation', 'Optimization'][step - 1]}
                        </h4>
                        <p className="text-dark/70">
                          {[
                            'Understanding your business, market, and objectives through deep research.',
                            'Developing data-driven strategies tailored to your goals.',
                            'Executing plans with precision and attention to detail.',
                            'Continuous monitoring and refinement for optimal results.'
                          ][step - 1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
