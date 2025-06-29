import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboardPage from './admin/AdminDashboardPage';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string>('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('User data:', user);
    const role = user.account_type || user.accountType || 'user';
    console.log('User role:', role);
    setUserRole(role);
    setLoading(false);
    
    if (role !== 'admin') {
      setTimeout(() => navigate('/dashboard/profile'), 100);
    }
  }, [navigate]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (userRole === 'admin') {
    return <AdminDashboardPage />;
  }
  
  return null;
};

export default DashboardPage;