import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary';
  iconSvg?: string;
  details?: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  color,
  iconSvg,
  details = []
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default details if none provided
  const serviceDetails = details.length > 0 ? details : [
    {
      title: 'Our Approach',
      description: 'We use data-driven methodologies and industry best practices to deliver exceptional results.',
      icon: icon
    },
    {
      title: 'Key Benefits',
      description: 'Get measurable results and clear insights that help your business grow sustainably.',
      icon: (
        <svg className={`h-6 w-6 text-${color}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
      )
    },
    {
      title: 'Process Overview',
      description: 'Our systematic approach ensures consistent quality and reliable outcomes for every project.',
      icon: (
        <svg className={`h-6 w-6 text-${color}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <div className={`bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 border-b-4 border-${color}`}>
        <div className={`h-3 bg-${color} w-full rounded-t-lg`}></div>
        <div className="p-6 md:p-8">
          <div className={`w-16 h-16 bg-${color}/10 rounded-full flex items-center justify-center mb-6 mx-auto`}>
            {iconSvg ? (
              <img src={iconSvg} alt={title} className={`h-8 w-8 text-${color}`} />
            ) : (
              icon
            )}
          </div>
          <h3 className="text-h3 text-dark mb-4 text-center">{title}</h3>
          <p className="text-body text-dark text-center mb-6">
            {description}
          </p>
          {/* Read More button disabled */}
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        details={serviceDetails}
      />
    </>
  );
};

export default ServiceCard;
