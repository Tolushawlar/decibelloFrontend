import React from 'react';

interface MinimalSectionProps {
  id?: string;
  children: React.ReactNode;
  bgColor?: string;
  fullWidth?: boolean;
}

const MinimalSection: React.FC<MinimalSectionProps> = ({ 
  id, 
  children, 
  bgColor = 'bg-white', 
  fullWidth = false 
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor}`}>
      <div className={`${fullWidth ? 'w-full' : 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
};

export default MinimalSection;
