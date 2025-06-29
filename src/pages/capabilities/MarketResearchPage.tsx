// import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const MarketResearchPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <Link 
                to="/capabilities"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                All Capabilities
              </Link> */}
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Market Research</h1>
              <p className="text-xl text-dark/70 mb-8">
                Uncover deep market insights and consumer intelligence that inform strategic decisions, identify opportunities, and drive competitive advantage.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=126"
                alt="Market Research"
                className="rounded-lg shadow-lg"
                aspectRatio="75%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-base font-semibold tracking-wider mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Market Research Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Competitive Analysis",
                description: "Comprehensive analysis of your competitive landscape, identifying strengths, weaknesses, opportunities, and market positioning strategies."
              },
              {
                title: "Consumer Behavior Analysis",
                description: "Deep insights into customer motivations, preferences, buying patterns, and decision-making processes to inform strategic decisions."
              },
              {
                title: "Market Sizing & Segmentation",
                description: "Quantify market opportunities and identify distinct customer segments to optimize targeting and resource allocation strategies."
              },
              {
                title: "Trend Analysis & Forecasting",
                description: "Identify emerging market trends, predict future developments, and position your business ahead of industry changes."
              }
            ].map((service, index) => (
              <div key={index} className="bg-light p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-dark mb-4">{service.title}</h3>
                <p className="text-dark/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default MarketResearchPage;