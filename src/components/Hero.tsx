
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(headerRef.current, 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    );
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 },
      "-=0.4"
    );
    
    // Subtle parallax effect on scroll
    gsap.to(".hero-bg", {
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
    <section ref={heroRef} className="relative min-h-screen h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay - McKinsey/UBA inspired */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="flex flex-col justify-between h-full pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-36 md:pb-20">
          {/* Logo area */}
          <div ref={headerRef} className="flex justify-between items-center">
          </div>
          
          {/* Main content */}
          <div ref={textRef} className="flex items-center">
            <div className="w-full lg:w-3/5 text-white px-2 sm:px-0">
              <header className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                  Transform Your <span className="text-secondary">Digital Presence</span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 text-secondary/90">
                  Data-Driven Marketing Solutions
                </h2>
                <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white/80">
                  Strategy • Growth • Connection
                </h3>
              </header>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed">
                Decibello Limited helps businesses leverage data-driven insights to create impactful marketing strategies that drive measurable growth and lasting customer connections.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/dashboard" 
                  className="bg-secondary text-dark px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-opacity-90 text-base sm:text-lg font-semibold inline-block text-center transition-all"
                >
                  Get Started
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-white hover:bg-opacity-10 text-base sm:text-lg transition-colors inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
