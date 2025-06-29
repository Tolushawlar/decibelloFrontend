import React, { useEffect, useRef } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  details: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  details
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Show modal
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.style.display = 'flex';
        setTimeout(() => {
          if (modalRef.current) modalRef.current.classList.add('opacity-100');
          if (contentRef.current) contentRef.current.classList.add('translate-y-0', 'opacity-100');
        }, 10);
      }
    } else {
      // Hide modal
      if (modalRef.current) modalRef.current.classList.remove('opacity-100');
      if (contentRef.current) contentRef.current.classList.remove('translate-y-0', 'opacity-100');
      
      setTimeout(() => {
        if (modalRef.current) modalRef.current.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm p-4 opacity-0 transition-opacity duration-300"
      style={{ display: 'none' }}
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto translate-y-8 opacity-0 transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-gray-100">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-dark">{title}</h3>
            <p className="mt-2 text-dark/70">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-dark/40 hover:text-dark transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex gap-4 items-start transform transition-all duration-300 hover:-translate-y-1"
            >
              {detail.icon && (
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {detail.icon}
                </div>
              )}
              <div>
                <h4 className="text-lg font-medium text-dark mb-2">{detail.title}</h4>
                <p className="text-dark/70">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-6 bg-light/30">
          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
