import React from 'react';

const ManufacturingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Manufacturing</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Industry 4.0 Transformation</h2>
          <p className="text-dark mb-4">
            We help manufacturing companies embrace digital technologies to improve operational efficiency, 
            product quality, and business agility in the era of Industry 4.0.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Smart Factory</h3>
              <p className="text-dark/80">
                Implement IoT sensors, automation, and real-time analytics to create connected 
                and intelligent manufacturing operations.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Predictive Maintenance</h3>
              <p className="text-dark/80">
                Leverage machine learning to predict equipment failures before they occur, 
                reducing downtime and maintenance costs.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Digital Twin</h3>
              <p className="text-dark/80">
                Create virtual replicas of physical assets to simulate, monitor, and optimize 
                performance throughout the product lifecycle.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Supply Chain Visibility</h3>
              <p className="text-dark/80">
                Gain end-to-end visibility into your supply chain to improve planning, 
                reduce risks, and enhance collaboration with partners.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Manufacturing Excellence</h2>
          
          <div className="space-y-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Operational Efficiency</h3>
              <p className="text-dark/80">
                Optimize production processes, reduce waste, and improve resource utilization 
                through data-driven insights and automation.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Quality Management</h3>
              <p className="text-dark/80">
                Enhance product quality and consistency with advanced quality control systems, 
                computer vision, and real-time monitoring.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Workforce Enablement</h3>
              <p className="text-dark/80">
                Equip your workforce with digital tools, augmented reality, and collaborative 
                platforms to improve productivity and safety.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-primary mb-2">Sustainable Manufacturing</h3>
              <p className="text-dark/80">
                Implement technologies and practices that reduce environmental impact, conserve 
                resources, and support circular economy principles.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-white rounded-lg border border-secondary/20">
            <h3 className="text-xl font-medium text-primary mb-3">Industry 4.0 Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">IoT</span>
              </div>
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">AI/ML</span>
              </div>
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">Robotics</span>
              </div>
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">AR/VR</span>
              </div>
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">Cloud</span>
              </div>
              <div className="bg-light/50 p-3 rounded text-center">
                <span className="font-medium text-primary">Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingPage;
