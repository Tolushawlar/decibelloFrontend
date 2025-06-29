import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/user-registration/RegisterPage';
import AboutPage from './pages/about/AboutPage';
import LeadershipPage from './pages/about/LeadershipPage';
import ContactPage from './pages/about/ContactPage';
import CareersPage from './pages/careers/CareersPage';
import JobsPage from './pages/careers/JobsPage';
import JobDetailPage from './pages/careers/JobDetailPage';
import EarlyCareersPage from './pages/careers/EarlyCareersPage';
import ExperiencedPage from './pages/careers/ExperiencedPage';
import IndustriesPage from './pages/industries/IndustriesPage';
import FinancialServicesPage from './pages/industries/FinancialServicesPage';
import HealthcarePage from './pages/industries/HealthcarePage';
import RetailPage from './pages/industries/RetailPage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import CapabilitiesPage from './pages/capabilities/CapabilitiesPage';
import DigitalTransformationPage from './pages/capabilities/DigitalTransformationPage';
import CloudServicesPage from './pages/capabilities/CloudServicesPage';
import DataAnalyticsPage from './pages/capabilities/DataAnalyticsPage';
import DigitalMarketingPage from './pages/capabilities/DigitalMarketingPage';
import BrandStrategyPage from './pages/capabilities/BrandStrategyPage';
import MarketResearchPage from './pages/capabilities/MarketResearchPage';
import BlogPage from './pages/blog/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import InsightsPage from './pages/insights/InsightsPage';
import CaseStudiesPage from './pages/insights/CaseStudiesPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import MessagesPage from './pages/dashboard/MessagesPage';
import UsersPage from './pages/dashboard/admin/UsersPage';
import AddStaffPage from './pages/dashboard/admin/AddStaffPage';
import SubscribersPage from './pages/dashboard/admin/SubscribersPage';
import CreateBlogPage from './pages/dashboard/admin/CreateBlogPage';
import EditBlogPage from './pages/dashboard/admin/EditBlogPage';
import CreateJobPage from './pages/dashboard/admin/CreateJobPage';
import JobApplicationPage from './pages/careers/JobApplicationPage';
import AdminJobApplicationsPage from './pages/dashboard/admin/JobApplicationsPage';
import UserJobApplicationsPage from './pages/dashboard/user/JobApplicationsPage';
import ContactsPage from './pages/dashboard/admin/ContactsPage';
import CallSchedulesPage from './pages/dashboard/admin/CallSchedulesPage';
import JobPostsPage from './pages/dashboard/admin/JobPostsPage';
import BlogPostsPage from './pages/dashboard/admin/BlogPostsPage';
import FavoritesPage from './pages/dashboard/user/FavoritesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* About Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/about/:subpage" element={<AboutPage />} />
        
        {/* Careers Routes */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/jobs" element={<JobsPage />} />
        <Route path="/careers/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/careers/apply/:jobId" element={<JobApplicationPage />} />
        <Route path="/careers/early-careers" element={<EarlyCareersPage />} />
        <Route path="/careers/experienced" element={<ExperiencedPage />} />
        
        {/* Industries Routes */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/retail" element={<RetailPage />} />
        <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
        <Route path="/industries/:industry" element={<IndustriesPage />} />
        
        {/* Capabilities Routes */}
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/capabilities/digital-transformation" element={<DigitalTransformationPage />} />
        <Route path="/capabilities/cloud-services" element={<CloudServicesPage />} />
        <Route path="/capabilities/data-analytics" element={<DataAnalyticsPage />} />
        <Route path="/capabilities/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/capabilities/brand-strategy" element={<BrandStrategyPage />} />
        <Route path="/capabilities/market-research" element={<MarketResearchPage />} />
        <Route path="/capabilities/:capability" element={<CapabilitiesPage />} />
        
        {/* User Registration Routes */}
        <Route path="/user-registration/register" element={<RegisterPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
        <Route path="/dashboard/messages" element={<MessagesPage />} />
        <Route path="/dashboard/users" element={<UsersPage />} />
        <Route path="/dashboard/add-staff" element={<AddStaffPage />} />
        <Route path="/dashboard/subscribers" element={<SubscribersPage />} />
        <Route path="/dashboard/create-blog" element={<CreateBlogPage />} />
        <Route path="/dashboard/edit-blog/:id" element={<EditBlogPage />} />
        <Route path="/dashboard/create-job" element={<CreateJobPage />} />
        <Route path="/dashboard/job-applications" element={<AdminJobApplicationsPage />} />
        <Route path="/dashboard/contacts" element={<ContactsPage />} />
        <Route path="/dashboard/call-schedules" element={<CallSchedulesPage />} />
        <Route path="/dashboard/admin-jobs" element={<JobPostsPage />} />
        <Route path="/dashboard/blog" element={<BlogPostsPage />} />
        <Route path="/dashboard/favorites" element={<FavoritesPage />} />
        <Route path="/dashboard/applications" element={<UserJobApplicationsPage />} />
        
        {/* Insights Routes */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/post/:id" element={<BlogPostPage />} />
        <Route path="/blog/:category" element={<BlogPage />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  );
}

export default App;
