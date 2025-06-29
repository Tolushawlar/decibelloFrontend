import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { apiCall } from '../../../utils/api';

interface CallSchedule {
  id: number;
  name: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
  created_at: string;
}

const CallSchedulesPage: React.FC = () => {
  const [schedules, setSchedules] = useState<CallSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await apiCall('/api/call-schedules');
        if (response.ok) {
          const data = await response.json();
          setSchedules(data);
        } else {
          toast.error('Failed to fetch call schedules');
        }
      } catch (error) {
        console.error('Error fetching call schedules:', error);
        toast.error('Error loading call schedules');
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const deleteSchedule = async (id: number) => {
    try {
      const response = await apiCall(`/api/call-schedules/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
        toast.success('Call schedule deleted successfully!');
      } else {
        toast.error('Failed to delete call schedule');
      }
    } catch (error) {
      toast.error('Error deleting call schedule');
    }
  };

  const filteredSchedules = schedules.filter(schedule =>
    schedule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    schedule.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Call Schedules ({schedules.length})</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
          <input
            type="text"
            placeholder="Search call schedules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preferred Schedule
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requested Date
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
                      Loading call schedules...
                    </td>
                  </tr>
                ) : filteredSchedules.length > 0 ? (
                  filteredSchedules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((schedule) => (
                    <tr key={schedule.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{schedule.name}</div>
                        <div className="text-sm text-gray-500">{schedule.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{new Date(schedule.preferred_date).toLocaleDateString()}</div>
                        <div className="text-sm text-gray-500">{schedule.preferred_time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">{schedule.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(schedule.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => deleteSchedule(schedule.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No call schedules found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {filteredSchedules.length > itemsPerPage && (
            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200">
              <div className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredSchedules.length)} of {filteredSchedules.length} schedules
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(filteredSchedules.length / itemsPerPage) }, (_, i) => (
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
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredSchedules.length / itemsPerPage)))}
                  disabled={currentPage === Math.ceil(filteredSchedules.length / itemsPerPage)}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CallSchedulesPage;