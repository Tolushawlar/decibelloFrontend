import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactFooterSection from '../../components/ContactFooterSection';
import { apiCall } from '../../utils/api';

interface Job {
  id: number;
  title: string;
  description: string;
  department: string;
  status: string;
  location: string;
  type: string;
  created_at: string;
}

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await apiCall('/api/job-postings');
        if (response.ok) {
          const data = await response.json();
          setJobs(data.filter((job: Job) => job.status === 'active'));
        } else {
          toast.error('Failed to fetch jobs');
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        toast.error('Error loading jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];
  const locations = ['All', ...Array.from(new Set(jobs.map(job => job.location)))];

  const sampleJobs = [
    {
      title: 'Senior Marketing Strategist',
      department: 'Marketing',
      location: 'New York',
      type: 'Full-time',
      posted: '2 days ago',
      id: 'job-001'
    },
    {
      title: 'Data Analyst',
      department: 'Data Analytics',
      location: 'Remote',
      type: 'Full-time',
      posted: '1 week ago',
      id: 'job-002'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'London',
      type: 'Full-time',
      posted: '3 days ago',
      id: 'job-003'
    },
    {
      title: 'Marketing Coordinator',
      department: 'Marketing',
      location: 'Singapore',
      type: 'Full-time',
      posted: '5 days ago',
      id: 'job-004'
    },
    {
      title: 'Business Strategy Consultant',
      department: 'Strategy',
      location: 'Sydney',
      type: 'Full-time',
      posted: '1 day ago',
      id: 'job-005'
    },
    {
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York',
      type: 'Full-time',
      posted: '2 weeks ago',
      id: 'job-006'
    }
  ];

  const filteredJobs = (jobs.length > 0 ? jobs : sampleJobs).filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Search Jobs</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Find your perfect role in our growing team and help transform how businesses leverage data for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/80 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-dark/70 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Department Filter */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-dark/70 mb-2">
                  Department
                </label>
                <select
                  id="department"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              {/* Location Filter */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-dark/70 mb-2">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Available
          </h2>
          
          <div className="space-y-6">
            {loading ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <p className="text-dark/70">Loading jobs...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {job.department}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-dark">
                            {job.location}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-dark/70">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <span className="text-sm text-dark/50 mr-6">
                          Posted {'created_at' in job ? new Date(job.created_at).toLocaleDateString() : job.posted}
                        </span>
                        <Link 
                          to={`/careers/jobs/${job.id}`}
                          className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                        >
                          <span className="mr-2">View Job</span>
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
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <p className="text-dark/70">No jobs match your search criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Job Alert Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Don't see the right role?</h2>
          <p className="text-dark/70 mb-8">
            Sign up for job alerts and be the first to know when new opportunities become available.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}

      <ContactFooterSection />
    </>
  );
};

export default JobsPage;
