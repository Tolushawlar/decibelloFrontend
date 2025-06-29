import React from 'react';
import Logo from './Logo';

interface LogoGridProps {
  title?: string;
  description?: string;
}

const LogoGrid: React.FC<LogoGridProps> = ({ 
  title = "Trusted by Leading Companies", 
  description = "We've helped businesses across various industries achieve remarkable results."
}) => {
  return (
    <section className="py-16 bg-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">{title}</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {/* Use the Logo component with different sizes and no text */}
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex justify-center">
            <Logo showText={false} size="lg" className="opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
