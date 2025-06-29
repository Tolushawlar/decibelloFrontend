import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiCall } from '../../utils/api';

const RegisterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, ] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'signin') {
      try {
        const response = await apiCall('/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          // Store user data in localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', 'sample-token'); // Store token if provided
          
          toast.success(`Welcome back, ${data.user.name}!`);
          // Navigate to dashboard based on account type
          navigate('/dashboard');
        } else {
          toast.error(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      }
    } else {
      // Registration logic
      try {
        const userData = {
          name: name,
          email: email,
          password: password,
          first_name: name.split(' ')[0] || '',
          last_name: name.split(' ').slice(1).join(' ') || '',
          bio: company ? `Works at ${company}` : '',
          account_type: 'user'
        };

        const response = await apiCall('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
        
        if (response.ok) {
          toast.success('Registration successful! You can now sign in.');
          setActiveTab('signin');
        } else {
          const data = await response.json();
          toast.error(data.message || 'Registration failed');
        }
      } catch (error) {
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-light pt-32 pb-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            className={`w-1/2 py-4 text-center font-medium ${
              activeTab === 'signin' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 py-4 text-center font-medium ${
              activeTab === 'register' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'signin' ? (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-dark mb-6">Welcome Back</h2>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Sign In
              </button>
              
              <div className="mt-4 text-center">
                <Link to="/user-registration/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <>
                <h2 className="text-2xl font-bold text-dark mb-6">Create an Account</h2>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                {/* <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div> */}
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the Terms of Service and Privacy Policy
                    </span>
                  </label>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={agreeMarketing}
                      onChange={(e) => setAgreeMarketing(e.target.checked)}
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      I would like to receive marketing communications about Decibello products, services, and events
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Create Account
                </button>
              </>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
