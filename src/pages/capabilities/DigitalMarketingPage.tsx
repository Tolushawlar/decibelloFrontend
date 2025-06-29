import ContactFooterSection from '../../components/ContactFooterSection';

const DigitalMarketingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Digital Marketing</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies that drive engagement, conversions, and sustainable growth across all channels.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Digital Marketing Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                description: "Improve your organic search visibility and drive qualified traffic through strategic SEO optimization, keyword research, and content strategy."
              },
              {
                title: "Pay-Per-Click Advertising (PPC)",
                description: "Maximize ROI with targeted PPC campaigns across Google Ads, social media platforms, and display networks with data-driven optimization."
              },
              {
                title: "Social Media Marketing",
                description: "Build brand awareness and engage your audience across all major social platforms with compelling content and community management."
              },
              {
                title: "Content Marketing",
                description: "Create valuable, relevant content that attracts and retains customers while establishing your brand as an industry thought leader."
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

export default DigitalMarketingPage;