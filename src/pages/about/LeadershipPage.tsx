// import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';

const LeadershipPage = () => {
  const leaders = [
    {
      name: 'Sarah Chen',
      position: 'Chief Executive Officer & Founder',
      bio: 'Sarah founded Decibello with a vision to democratize data-driven marketing. With over 15 years of experience in digital strategy and analytics, she has led transformational projects for Fortune 500 companies and emerging startups alike.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Market Research'],
      education: 'MBA Marketing, Stanford Graduate School of Business',
      image: 'https://picsum.photos/400/400?random=60',
      linkedin: '#',
      achievements: [
        'Led 200+ successful digital transformation projects',
        'Featured speaker at Marketing Analytics Summit 2023',
        'Named "Marketing Innovator of the Year" by Digital Marketing Institute'
      ]
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'Michael brings deep technical expertise in data engineering and machine learning to Decibello. He specializes in building scalable analytics platforms that turn complex data into actionable business insights.',
      expertise: ['Data Engineering', 'Machine Learning', 'Analytics Platforms'],
      education: 'MS Computer Science, MIT',
      image: 'https://picsum.photos/400/400?random=61',
      linkedin: '#',
      achievements: [
        'Built analytics platforms processing 10M+ data points daily',
        'Published 15+ papers on predictive analytics',
        'Former Senior Data Scientist at Google'
      ]
    },
    {
      name: 'Emily Thompson',
      position: 'Chief Marketing Officer',
      bio: 'Emily leads our creative strategy and brand development initiatives. Her background spans traditional advertising and digital marketing, bringing a unique perspective to integrated campaign development.',
      expertise: ['Brand Strategy', 'Creative Direction', 'Campaign Management'],
      education: 'BA Communications, Northwestern University',
      image: 'https://picsum.photos/400/400?random=62',
      linkedin: '#',
      achievements: [
        'Managed $50M+ in advertising spend across industries',
        'Winner of 12 creative excellence awards',
        'Former Creative Director at Ogilvy & Mather'
      ]
    },
    {
      name: 'David Park',
      position: 'Head of Client Success',
      bio: 'David ensures our clients achieve their business objectives through strategic partnership and continuous optimization. His consultative approach has earned him recognition as a trusted advisor across multiple industries.',
      expertise: ['Client Relations', 'Business Strategy', 'Performance Optimization'],
      education: 'MBA Strategy, Wharton School',
      image: 'https://picsum.photos/400/400?random=63',
      linkedin: '#',
      achievements: [
        'Maintained 98% client retention rate over 5 years',
        'Certified in Six Sigma Black Belt methodology',
        'Former Strategy Consultant at McKinsey & Company'
      ]
    },
    {
      name: 'Dr. Priya Patel',
      position: 'Head of Research & Analytics',
      bio: 'Dr. Patel leads our research methodology and ensures the scientific rigor of our market analysis. Her academic background in behavioral economics brings unique insights to consumer research.',
      expertise: ['Market Research', 'Statistical Analysis', 'Consumer Psychology'],
      education: 'PhD Behavioral Economics, University of Chicago',
      image: 'https://picsum.photos/400/400?random=64',
      linkedin: '#',
      achievements: [
        'Published 25+ peer-reviewed research papers',
        'Developed proprietary consumer behavior prediction models',
        'Former Research Director at Nielsen'
      ]
    },
    {
      name: 'James Wilson',
      position: 'Head of Digital Innovation',
      bio: 'James stays ahead of digital trends and emerging technologies, ensuring Decibello remains at the forefront of marketing innovation. He specializes in AI-driven marketing solutions and automation.',
      expertise: ['Marketing Automation', 'AI/ML Applications', 'Digital Trends'],
      education: 'MS Digital Marketing, Columbia Business School',
      image: 'https://picsum.photos/400/400?random=65',
      linkedin: '#',
      achievements: [
        'Implemented AI solutions increasing efficiency by 300%',
        'Recognized as "Digital Innovation Leader" by MarTech Today',
        'Former Head of Innovation at HubSpot'
      ]
    }
  ];

  const advisors = [
    {
      name: 'Robert Kim',
      position: 'Strategic Advisor',
      bio: 'Former CMO of Fortune 100 companies, Robert provides strategic guidance on enterprise-level marketing transformations.',
      image: 'https://picsum.photos/300/300?random=70'
    },
    {
      name: 'Lisa Zhang',
      position: 'Technology Advisor',
      bio: 'Former VP of Engineering at leading tech companies, Lisa advises on technology strategy and platform development.',
      image: 'https://picsum.photos/300/300?random=71'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Link 
            to="/about"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to About
          </Link>
           */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Leadership Team</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and delivering exceptional results for our clients across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">80+</div>
              <div className="text-dark/70">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-dark/70">Projects Led</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-dark/70">Industry Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-dark/70">Published Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              EXECUTIVE TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Leading with Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.position}</p>
                  <p className="text-dark/70 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark mb-2 text-sm">Education</h4>
                    <p className="text-dark/60 text-sm">{leader.education}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark mb-2 text-sm">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark mb-2 text-sm">Key Achievements</h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-dark/60 text-xs flex items-start">
                          <svg className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={leader.linkedin}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              ADVISORY BOARD
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Strategic Guidance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Our advisory board consists of industry veterans who provide strategic insights and guidance to help us stay ahead of market trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-light/50 rounded-lg p-8 text-center">
                <img 
                  src={advisor.image} 
                  alt={advisor.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-dark mb-2">{advisor.name}</h3>
                <p className="text-primary font-medium mb-4">{advisor.position}</p>
                <p className="text-dark/70 text-sm">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Leadership Philosophy</h2>
            <p className="text-white/80 mb-8 max-w-3xl mx-auto text-lg">
              We believe in leading by example, fostering innovation, and empowering our team to deliver exceptional results for our clients. Our leadership team is committed to transparency, continuous learning, and building lasting partnerships.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaborative Leadership</h3>
                <p className="text-white/70 text-sm">We believe the best decisions come from diverse perspectives and collaborative thinking.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence Driven</h3>
                <p className="text-white/70 text-sm">We set high standards and continuously strive to exceed expectations in everything we do.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation Focus</h3>
                <p className="text-white/70 text-sm">We embrace new technologies and methodologies to stay ahead of industry trends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default LeadershipPage;