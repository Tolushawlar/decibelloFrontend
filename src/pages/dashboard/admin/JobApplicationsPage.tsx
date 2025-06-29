/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { apiCall } from '../../../utils/api';

interface JobApplication {
  id: number;
  job_posting: number;
  applicant: number;
  status: string;
  cover_letter: string;
  resume_url: string;
  phone_number: string;
  created_at: string;
  applicant_details?: {
    name: string;
    email: string;
  };
  job_details?: {
    title: string;
  };
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Job {
  id: number;
  title: string;
}

const JobApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCoverLetter, setSelectedCoverLetter] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const [applicationsRes, usersRes, jobsRes] = await Promise.all([
          apiCall('/api/job-applications'),
          apiCall('/api/users'),
          apiCall('/api/job-postings')
        ]);
        
        if (applicationsRes.ok && usersRes.ok && jobsRes.ok) {
          const applicationsData = await applicationsRes.json();
          const usersData = await usersRes.json();
          const jobsData = await jobsRes.json();
          
          // Map applicant and job details to applications
          const applicationsWithDetails = applicationsData.map((app: JobApplication) => {
            const applicantUser = usersData.find((user: User) => user.id === app.applicant);
            const jobPostingId = typeof app.job_posting === 'object' ? app.job_posting?.id : app.job_posting;
            const jobPost = jobsData.find((job: Job) => job.id === jobPostingId);
            return {
              ...app,
              applicant_details: applicantUser ? {
                name: applicantUser.name,
                email: applicantUser.email
              } : null,
              job_details: jobPost ? {
                title: jobPost.title
              } : null
            };
          });
          
          setApplications(applicationsWithDetails);
          setUsers(usersData);
          setJobs(jobsData);
        } else {
          toast.error('Failed to fetch applications');
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
        toast.error('Error loading applications');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await apiCall(`/api/job-applications/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setApplications(applications.map(app => 
          app.id === id ? { ...app, status } : app
        ));
        toast.success(`Application ${status}!`);
      } else {
        toast.error('Failed to update application');
      }
    } catch (error) {
      toast.error('Error updating application');
    }
  };

  const deleteApplication = async (id: number) => {
    try {
      const response = await apiCall(`/api/job-applications/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setApplications(applications.filter(app => app.id !== id));
        toast.success('Application deleted successfully!');
      } else {
        toast.error('Failed to delete application');
      }
    } catch (error) {
      toast.error('Error deleting application');
    }
  };

  const paginatedApplications = applications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Job Applications ({applications.length})</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job & Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Loading applications...
                    </td>
                  </tr>
                ) : paginatedApplications.length > 0 ? (
                  paginatedApplications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {application.job_details?.title || `Job #${typeof application.job_posting === 'object' ? application.job_posting?.id || 'Unknown' : application.job_posting}`}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.applicant_details ? 
                            application.applicant_details.name : 
                            `Applicant #${String(application.applicant)}`
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {application.applicant_details?.email || 'N/A'}
                        </div>
                        <div className="text-sm text-gray-600">{application.phone_number}</div>
                        <a href={application.resume_url} target="_blank" rel="noopener noreferrer" 
                           className="text-sm text-primary hover:underline">
                          View Resume
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          application.status === 'accepted' 
                            ? 'bg-green-100 text-green-800'
                            : application.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(application.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                        <button
                          onClick={() => setSelectedCoverLetter(application.cover_letter)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View Cover Letter
                        </button>
                        {application.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateStatus(application.id, 'accepted')}
                              className="text-green-600 hover:text-green-800"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => updateStatus(application.id, 'rejected')}
                              className="text-orange-600 hover:text-orange-800"
                            >
                              Reject
                            </button>
                          </>
                        )}
                          <button
                            onClick={() => deleteApplication(application.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {applications.length > itemsPerPage && (
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 border-t border-gray-200 space-y-3 sm:space-y-0">
              <div className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, applications.length)} of {applications.length} applications
              </div>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(applications.length / itemsPerPage) }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 border rounded text-sm ${
                      currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(applications.length / itemsPerPage)))}
                  disabled={currentPage === Math.ceil(applications.length / itemsPerPage)}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Cover Letter Modal */}
        {selectedCoverLetter && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setSelectedCoverLetter(null)}></div>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Cover Letter</h3>
                  <button
                    onClick={() => setSelectedCoverLetter(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedCoverLetter}</p>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    onClick={() => setSelectedCoverLetter(null)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default JobApplicationsPage;