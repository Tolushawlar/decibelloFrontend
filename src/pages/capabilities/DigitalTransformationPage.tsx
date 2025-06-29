import React from 'react';

const DigitalTransformationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Digital Transformation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Accelerate Your Digital Journey</h2>
          <p className="text-dark mb-4">
            Our digital transformation services help organizations reimagine their business models, 
            customer experiences, and operational processes through innovative technology solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Strategy & Roadmap</h3>
              <p className="text-dark/80">
                Develop a comprehensive digital strategy aligned with your business objectives and create 
                a clear implementation roadmap.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Technology Modernization</h3>
              <p className="text-dark/80">
                Update legacy systems and adopt modern technologies to improve efficiency, 
                scalability, and innovation capabilities.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Customer Experience</h3>
              <p className="text-dark/80">
                Create seamless, personalized digital experiences that delight customers and 
                drive loyalty across all touchpoints.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Data & Analytics</h3>
              <p className="text-dark/80">
                Leverage data-driven insights to make informed decisions and uncover new 
                business opportunities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Approach</h2>
          <p className="text-dark mb-6">
            We take a holistic approach to digital transformation, focusing on people, processes, and technology 
            to drive sustainable change and measurable business outcomes.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">1</div>
              <div>
                <h3 className="text-lg font-medium text-primary">Assess & Discover</h3>
                <p className="text-dark/80">Evaluate current state and identify opportunities for transformation</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">2</div>
              <div>
                <h3 className="text-lg font-medium text-primary">Design & Plan</h3>
                <p className="text-dark/80">Create a strategic roadmap with clear milestones and success metrics</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">3</div>
              <div>
                <h3 className="text-lg font-medium text-primary">Implement & Integrate</h3>
                <p className="text-dark/80">Execute the transformation initiatives with agile methodology</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">4</div>
              <div>
                <h3 className="text-lg font-medium text-primary">Optimize & Scale</h3>
                <p className="text-dark/80">Continuously improve and expand successful initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;
