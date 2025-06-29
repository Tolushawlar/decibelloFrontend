// import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';
import ImageWithOverlay from '../../components/ImageWithOverlay';

const DataAnalyticsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Data Analytics</h1>
              <p className="text-xl text-dark/70 mb-8">
                Transform raw data into actionable insights that drive better business decisions, optimize performance, and create competitive advantage through advanced analytics.
              </p>
            </div>
            <div>
              <ImageWithOverlay
                src="https://picsum.photos/800/600?random=127"
                alt="Data Analytics"
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Data Analytics Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Strategy & Governance",
                description: "Develop comprehensive data strategies aligned with business objectives and establish frameworks for data quality, security, and compliance."
              },
              {
                title: "Advanced Analytics & AI",
                description: "Apply statistical analysis, machine learning, and AI to extract deeper insights, enable predictive capabilities, and automate decision-making."
              },
              {
                title: "Business Intelligence & Visualization",
                description: "Create intuitive dashboards and reports that make complex data accessible and actionable for stakeholders across your organization."
              },
              {
                title: "Big Data Processing",
                description: "Implement scalable solutions for processing and analyzing large volumes of structured and unstructured data using modern technologies."
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

export default DataAnalyticsPage;