import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MotionCardProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const MotionCard: React.FC<MotionCardProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = '' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      gsap.set(element, { 
        y: 30,
        opacity: 0,
      });

      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }
  }, [delay, duration]);

  return (
    <div ref={cardRef} className={`transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default MotionCard;
