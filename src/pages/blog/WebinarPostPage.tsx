import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';

// Mock webinar data - in a real app, this would come from an API
const webinarsData = {
  'webinar-3': {
    id: 'webinar-3',
    title: 'Data Privacy Regulations: Navigating the New Landscape',
    description: 'Learn how to adapt your marketing and data strategies to comply with evolving privacy regulations worldwide.',
    content: `
      <p>As privacy regulations continue to evolve globally, businesses face increasing challenges in managing customer data while maintaining compliance. This webinar explores practical strategies for navigating this complex landscape.</p>
      
      <h2>Key Privacy Regulations Overview</h2>
      <p>Our experts provide a comprehensive overview of major privacy regulations including GDPR, CCPA, and emerging frameworks. Understanding the similarities and differences between these regulations is essential for creating a unified compliance strategy.</p>
      
      <h2>Impact on Marketing Strategies</h2>
      <p>The webinar addresses how these regulations specifically impact marketing activities, from data collection to personalization. We discuss alternative approaches that respect user privacy while still enabling effective marketing campaigns.</p>
      
      <h2>Building a Privacy-First Data Architecture</h2>
      <p>Our technical specialists outline how to design data systems with privacy as a foundational principle. This includes data minimization, purpose limitation, and implementing strong security measures throughout your infrastructure.</p>
      
      <h2>Practical Implementation Steps</h2>
      <p>The session concludes with actionable steps organizations can take to enhance their privacy practices, including conducting privacy impact assessments, implementing consent management platforms, and establishing clear data governance policies.</p>
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://picsum.photos/600/400?random=52',
    date: 'May 10, 2025',
    duration: '60 minutes',
    speakers: [
      { name: 'Olivia Martinez', title: 'Chief Privacy Officer, Decibello' },
      { name: 'James Wilson', title: 'Legal Counsel, Data Protection' }
    ],
    resources: [
      { name: 'Presentation Slides', url: '#' },
      { name: 'Privacy Compliance Checklist', url: '#' },
      { name: 'Implementation Guide', url: '#' }
    ]
  },
  'webinar-4': {
    id: 'webinar-4',
    title: 'Building Resilient Supply Chains with Predictive Analytics',
    description: 'Explore how predictive analytics can help businesses anticipate disruptions and build more resilient supply chains.',
    content: `
      <p>Supply chain disruptions have become increasingly common, highlighting the need for more resilient systems. This webinar demonstrates how predictive analytics can transform supply chain management.</p>
      
      <h2>The Evolution of Supply Chain Analytics</h2>
      <p>We trace the development of supply chain analytics from descriptive to predictive and prescriptive approaches. Understanding this evolution provides context for implementing advanced analytics in your organization.</p>
      
      <h2>Predictive Models for Disruption Detection</h2>
      <p>Our data scientists present various predictive models that can identify potential disruptions before they occur. These include machine learning algorithms that analyze patterns across multiple data sources to provide early warnings.</p>
      
      <h2>Real-time Decision Support Systems</h2>
      <p>The webinar showcases how real-time analytics can support decision-making during disruptions. We demonstrate dashboards and alert systems that enable rapid response to changing conditions.</p>
      
      <h2>Implementation Case Studies</h2>
      <p>Through several case studies, we illustrate how organizations across different industries have successfully implemented predictive analytics to enhance their supply chain resilience, with measurable improvements in performance.</p>
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://picsum.photos/600/400?random=53',
    date: 'April 28, 2025',
    duration: '75 minutes',
    speakers: [
      { name: 'Michael Chen', title: 'Supply Chain Analytics Director, Decibello' },
      { name: 'Emma Rodriguez', title: 'Data Science Lead, Decibello' }
    ],
    resources: [
      { name: 'Presentation Slides', url: '#' },
      { name: 'Analytics Implementation Roadmap', url: '#' },
      { name: 'Case Study Collection', url: '#' }
    ]
  },
  'webinar-5': {
    id: 'webinar-5',
    title: 'The Future of Work: Hybrid Models and Digital Collaboration',
    description: 'Discover strategies for optimizing productivity and culture in hybrid work environments.',
    content: `
      <p>The shift to hybrid work models presents both opportunities and challenges for organizations. This webinar explores effective strategies for fostering collaboration and maintaining culture in distributed teams.</p>
      
      <h2>Hybrid Work Models: Finding the Right Balance</h2>
      <p>We examine various hybrid work models and their implications for different types of organizations. Understanding the spectrum of options helps leaders design approaches that align with their specific needs.</p>
      
      <h2>Digital Collaboration Tools and Best Practices</h2>
      <p>Our technology experts review the latest digital collaboration tools and provide guidance on selecting and implementing the right solutions. We also share best practices for maximizing the effectiveness of these tools.</p>
      
      <h2>Maintaining Culture in Distributed Teams</h2>
      <p>The webinar addresses the critical challenge of preserving organizational culture when teams are physically dispersed. We present innovative approaches to virtual team building and cultural reinforcement.</p>
      
      <h2>Measuring Success in Hybrid Environments</h2>
      <p>We conclude with frameworks for measuring productivity, engagement, and collaboration in hybrid settings. These metrics help organizations refine their approaches based on data rather than assumptions.</p>
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://picsum.photos/600/400?random=54',
    date: 'April 15, 2025',
    duration: '65 minutes',
    speakers: [
      { name: 'Sarah Johnson', title: 'Workplace Strategy Director, Decibello' },
      { name: 'David Park', title: 'Digital Workplace Consultant' }
    ],
    resources: [
      { name: 'Presentation Slides', url: '#' },
      { name: 'Hybrid Work Playbook', url: '#' },
      { name: 'Tool Evaluation Framework', url: '#' }
    ]
  },
  'webinar-6': {
    id: 'webinar-6',
    title: 'Sustainable Technology: Reducing Your Digital Carbon Footprint',
    description: 'Learn practical approaches to implementing more sustainable technology practices in your organization.',
    content: `
      <p>As organizations increasingly recognize their environmental responsibilities, technology sustainability has become a critical focus area. This webinar provides practical guidance for reducing your digital carbon footprint.</p>
      
      <h2>Understanding Digital Carbon Footprints</h2>
      <p>We begin by explaining how digital operations contribute to carbon emissions. This foundational knowledge helps organizations identify their most significant impact areas and prioritize improvement efforts.</p>
      
      <h2>Sustainable Infrastructure Strategies</h2>
      <p>Our experts outline approaches to creating more sustainable technology infrastructure, from cloud optimization to energy-efficient hardware selection. We provide specific recommendations that balance performance needs with environmental considerations.</p>
      
      <h2>Software Efficiency and Green Coding</h2>
      <p>The webinar explores how software design and development practices affect energy consumption. We introduce principles of green coding that can significantly reduce the resources required to run applications.</p>
      
      <h2>Measuring and Reporting Environmental Impact</h2>
      <p>We conclude with frameworks for measuring, tracking, and reporting on technology sustainability initiatives. These metrics enable organizations to demonstrate progress and identify further improvement opportunities.</p>
    `,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: 'https://picsum.photos/600/400?random=55',
    date: 'March 30, 2025',
    duration: '70 minutes',
    speakers: [
      { name: 'Emma Rodriguez', title: 'Sustainability Lead, Decibello' },
      { name: 'James Wilson', title: 'Green Technology Specialist' }
    ],
    resources: [
      { name: 'Presentation Slides', url: '#' },
      { name: 'Sustainability Assessment Tool', url: '#' },
      { name: 'Implementation Guide', url: '#' }
    ]
  }
};

const WebinarPostPage: React.FC = () => {
  const { webinarId } = useParams<{ webinarId: string }>();
  const webinar = webinarId ? webinarsData[webinarId as keyof typeof webinarsData] : null;
  
  if (!webinar) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Webinar Not Found</h1>
        <p className="mb-8">The webinar you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog/webinars" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
          Back to Webinars
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block bg-secondary/20 text-secondary text-sm px-3 py-1 rounded-full mb-4">
              Webinar Recording
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">{webinar.title}</h1>
            <div className="flex items-center text-sm text-dark/60">
              <span>Recorded on {webinar.date}</span>
              <span className="mx-2">•</span>
              <span>{webinar.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-md aspect-video">
            <iframe 
              src={webinar.videoUrl} 
              title={webinar.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: webinar.content }} />
          
          {/* Speakers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-6">Speakers</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {webinar.speakers.map((speaker, index) => (
                <div key={index} className="flex items-center p-4 bg-light rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mr-4 text-xl font-bold">
                    {speaker.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{speaker.name}</h3>
                    <p className="text-sm text-dark/70">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-dark mb-6">Resources</h2>
            <div className="bg-light rounded-lg p-6">
              <ul className="space-y-4">
                {webinar.resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.url} 
                      className="flex items-center text-primary hover:text-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Share Links */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Share this webinar</h3>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Webinars */}
      <section className="py-12 bg-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">More Webinars</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(webinarsData)
              .filter(relatedWebinar => relatedWebinar.id !== webinar.id)
              .slice(0, 3)
              .map(relatedWebinar => (
                <div key={relatedWebinar.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedWebinar.image} 
                      alt={relatedWebinar.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{relatedWebinar.title}</h3>
                    <div className="flex items-center text-xs text-dark/50 mb-4">
                      <span>{relatedWebinar.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedWebinar.duration}</span>
                    </div>
                    <Link 
                      to={`/blog/webinar/${relatedWebinar.id}`}
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
          <div className="mt-8 text-center">
            <Link 
              to="/blog/webinars"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              View All Webinars
            </Link>
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default WebinarPostPage;
