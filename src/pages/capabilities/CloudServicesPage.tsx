import React from 'react';

const CloudServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Cloud Services</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Accelerate Innovation with Cloud</h2>
          <p className="text-dark mb-4">
            Our cloud services help organizations leverage the full potential of cloud computing to 
            drive innovation, improve agility, and optimize costs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Cloud Migration</h3>
              <p className="text-dark/80">
                Seamlessly transition your applications and infrastructure to the cloud with our 
                proven migration methodology.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Cloud-Native Development</h3>
              <p className="text-dark/80">
                Build modern applications designed specifically for cloud environments to maximize 
                scalability and resilience.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Multi-Cloud Management</h3>
              <p className="text-dark/80">
                Optimize and manage resources across multiple cloud providers to avoid vendor 
                lock-in and leverage best-of-breed services.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-xl font-medium text-primary mb-3">Cloud Security</h3>
              <p className="text-dark/80">
                Implement robust security controls and governance frameworks to protect your 
                cloud environments and data.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-light/50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Cloud Platforms We Support</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">AWS</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">Microsoft Azure</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">Google Cloud</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">IBM Cloud</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">Oracle Cloud</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-medium text-primary">Private Cloud</h3>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-5 rounded-lg border border-secondary/20">
            <h3 className="text-xl font-medium text-primary mb-3">Our Cloud Expertise</h3>
            <ul className="list-disc pl-5 space-y-2 text-dark/80">
              <li>Infrastructure as Code (IaC)</li>
              <li>Containerization and Kubernetes</li>
              <li>Serverless Architecture</li>
              <li>DevOps and CI/CD</li>
              <li>Cloud Cost Optimization</li>
              <li>Disaster Recovery and Business Continuity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesPage;
