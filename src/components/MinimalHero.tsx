import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MinimalHeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

const MinimalHero: React.FC<MinimalHeroProps> = ({ 
  title = "Transform Data into Strategic Growth", 
  subtitle = "We help businesses leverage data-driven insights to create impactful marketing strategies that drive measurable growth.",
  imageSrc = "https://picsum.photos/800/600"
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }
    );
    
    tl.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1 }, 
      "-=0.5"
    );

    // Subtle parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light/50 to-white z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div ref={textRef} className="order-2 md:order-1">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              Data-Driven Strategy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              {title.includes("Transform") ? (
                <>Transform Data into <span className="text-primary">Strategic Growth</span></>
              ) : (
                title
              )}
            </h1>
            <p className="text-lg text-dark/70 mb-8 max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="border border-dark/20 text-dark px-8 py-3 rounded-md hover:bg-dark/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image/visualization */}
          <div ref={imageRef} className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src={imageSrc}
                  alt="Hero image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-light/50 z-0">
        <svg className="absolute bottom-0 w-full h-16" preserveAspectRatio="none" viewBox="0 0 1440 74">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default MinimalHero;
