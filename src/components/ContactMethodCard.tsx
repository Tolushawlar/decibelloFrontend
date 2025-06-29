import React from 'react';
import MotionCard from './MotionCard';

interface ContactMethodProps {
  title: string;
  info: string;
  icon: React.ReactNode;
  action: string;
  link: string;
  delay?: number;
}

const ContactMethodCard: React.FC<ContactMethodProps> = ({
  title,
  info,
  icon,
  action,
  link,
  delay = 0
}) => {
  return (
    <MotionCard delay={delay}>
      <div className="contact-method-card group">
        <div className="flex items-center mb-4">
          <div className="contact-method-icon group-hover:scale-110 transition-transform duration-300">
            <div className="text-white">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white ml-4">{title}</h3>
        </div>
        <p className="text-white/80 mb-4">{info}</p>
        <a 
          href={link}
          className="inline-flex items-center text-secondary hover:text-primary transition-colors group/link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">{action}</span>
          <svg 
            className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </MotionCard>
  );
};

export default ContactMethodCard;
