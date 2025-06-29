import React from 'react';
import MinimalHero from '../../components/MinimalHero';

const CapabilitiesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <MinimalHero 
        title="Our Capabilities" 
        subtitle="Transforming businesses with data-driven strategies and innovative solutions"
        imageSrc="https://picsum.photos/id/1/1920/600"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">How We Help Clients</h2>
          <p className="text-lg mb-8">
            Our capabilities span across digital marketing, data analytics, brand strategy, and market research,
            enabling us to deliver comprehensive solutions tailored to your business needs.
          </p>
          
          {/* Placeholder for capabilities content */}
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p>Capabilities content will be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;
