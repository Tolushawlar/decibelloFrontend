// import React from 'react';
import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';

const WebinarsPage = () => {
  // Sample webinars data
  const upcomingWebinars = [
    {
      id: 'webinar-1',
      title: 'Digital Transformation in Financial Services: 2025 Outlook',
      description: 'Join our panel of industry experts as they discuss the latest trends and technologies shaping the future of financial services.',
      image: 'https://picsum.photos/600/400?random=50',
      date: 'June 15, 2025',
      time: '11:00 AM - 12:30 PM EST',
      speakers: [
        { name: 'Sarah Johnson', title: 'Chief Digital Officer, Global Finance' },
        { name: 'Michael Chen', title: 'Head of Innovation, Decibello' }
      ],
      registrationLink: '/webinar-registration/webinar-1'
    },
    {
      id: 'webinar-2',
      title: 'AI-Powered Customer Experience: Beyond the Chatbot',
      description: 'Discover how advanced AI is transforming customer interactions and creating personalized experiences at scale.',
      image: 'https://picsum.photos/600/400?random=51',
      date: 'June 22, 2025',
      time: '2:00 PM - 3:30 PM EST',
      speakers: [
        { name: 'Emma Rodriguez', title: 'AI Strategy Director, Decibello' },
        { name: 'David Park', title: 'CX Innovation Lead, TechForward' }
      ],
      registrationLink: '/webinar-registration/webinar-2'
    }
  ];

  const pastWebinars = [
    {
      id: 'webinar-3',
      title: 'Data Privacy Regulations: Navigating the New Landscape',
      description: 'Learn how to adapt your marketing and data strategies to comply with evolving privacy regulations worldwide.',
      image: 'https://picsum.photos/600/400?random=52',
      date: 'May 10, 2025',
      recording: true,
      viewLink: '/blog/post/webinar-3'
    },
    {
      id: 'webinar-4',
      title: 'Building Resilient Supply Chains with Predictive Analytics',
      description: 'Explore how predictive analytics can help businesses anticipate disruptions and build more resilient supply chains.',
      image: 'https://picsum.photos/600/400?random=53',
      date: 'April 28, 2025',
      recording: true,
      viewLink: '/blog/post/webinar-4'
    },
    {
      id: 'webinar-5',
      title: 'The Future of Work: Hybrid Models and Digital Collaboration',
      description: 'Discover strategies for optimizing productivity and culture in hybrid work environments.',
      image: 'https://picsum.photos/600/400?random=54',
      date: 'April 15, 2025',
      recording: true,
      viewLink: '/blog/post/webinar-5'
    },
    {
      id: 'webinar-6',
      title: 'Sustainable Technology: Reducing Your Digital Carbon Footprint',
      description: 'Learn practical approaches to implementing more sustainable technology practices in your organization.',
      image: 'https://picsum.photos/600/400?random=55',
      date: 'March 30, 2025',
      recording: true,
      viewLink: '/blog/post/webinar-6'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Decibello Webinars</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Join our expert-led sessions to gain insights on the latest trends and strategies in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Upcoming Webinars</h2>
            <p className="text-dark/70">Register now to secure your spot in our upcoming live sessions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-light rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
                      Upcoming
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3">{webinar.title}</h3>
                  <p className="text-dark/70 mb-4">{webinar.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-dark/70">{webinar.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-dark/70">{webinar.time}</span>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-dark mb-2">Speakers:</p>
                    {webinar.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center mb-2 last:mb-0">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-3">
                          {speaker.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">{speaker.name}</p>
                          <p className="text-xs text-dark/60">{speaker.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={webinar.registrationLink}
                    className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-16 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Past Webinars</h2>
            <p className="text-dark/70">Access recordings of our previous webinars at your convenience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={webinar.image} 
                    alt={webinar.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-secondary/80 backdrop-blur-sm text-dark text-xs px-3 py-1 rounded-full">
                      Recording Available
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{webinar.title}</h3>
                  <p className="text-dark/70 mb-4 line-clamp-3">{webinar.description}</p>
                  <div className="flex items-center text-xs text-dark/50 mb-4">
                    <svg className="w-4 h-4 text-dark/50 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{webinar.date}</span>
                  </div>
                  <Link 
                    to={`/blog/webinar/${webinar.id}`}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                  >
                    <span className="mr-2">Watch Recording</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default WebinarsPage;
