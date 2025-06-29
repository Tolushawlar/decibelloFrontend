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
}

const JobApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const response = await apiCall('/api/job-applications');
        if (response.ok) {
          const data = await response.json();
          // Filter applications for current user
          const userApplications = data.filter((app: JobApplication) => app.applicant === user.id);
          setApplications(userApplications);
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

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">My Applications ({applications.length})</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resume
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      Loading applications...
                    </td>
                  </tr>
                ) : applications.length > 0 ? (
                  applications.map((application) => (
                    <tr key={application.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">Job #{String(application.job_posting)}</div>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a href={application.resume_url} target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:underline">
                          View Resume
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                      No applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobApplicationsPage;