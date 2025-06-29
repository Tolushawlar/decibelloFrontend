import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import CaseStudySection from '../components/CaseStudySection';
import InsightsSection from '../components/InsightsSection';
import ContactFooterSection from '../components/ContactFooterSection';
// import NewsletterSubscribe from '../components/NewsletterSubscribe';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ApproachSection />
      <CaseStudySection />
      <InsightsSection />
      {/* <NewsletterSubscribe /> */}
      <ContactFooterSection />
    </>
  );
};

export default HomePage;
