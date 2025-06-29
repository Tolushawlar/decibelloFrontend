import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  status: string;
  message: string;
  created_at: number;
}

const ContactSubmissionsPage = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact_submission');
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        }
      } catch (error) {
        console.error('Error fetching contact submissions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact_submission/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setSubmissions(submissions.filter(submission => submission.id !== id));
        toast.success('Submission deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete submission');
    }
    setDeleteId(null);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-dark mb-6">Contact Submissions ({submissions.length})</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-dark/70">Loading submissions...</p>
            </div>
          ) : submissions.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(submission.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center">
                          <Link
                            to={`/dashboard/contact-submission/${submission.id}`}
                            className="text-primary hover:text-primary/80 mr-3"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => setDeleteId(submission.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {submissions.length > itemsPerPage && (
                <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200">
                  <div className="text-sm text-gray-700">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, submissions.length)} of {submissions.length} submissions
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.ceil(submissions.length / itemsPerPage) }, (_, i) => (
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
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(submissions.length / itemsPerPage)))}
                      disabled={currentPage === Math.ceil(submissions.length / itemsPerPage)}
                      className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-dark/70">No contact submissions found.</p>
            </div>
          )}
        </div>
        
        {deleteId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Submission</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this contact submission? This action cannot be undone.</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="flex-1 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ContactSubmissionsPage;
