import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface AuthModalsProps {
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  showSignupModal: boolean;
  setShowSignupModal: (show: boolean) => void;
  onSignup: (formData: { email: string; password: string; firstName: string; lastName: string }) => Promise<void>;
  onLogin: (formData: { email: string; password: string }) => Promise<void>;
  onForgotPassword: (email: string) => Promise<void>;
}

export function AuthModals({
  showLoginModal,
  setShowLoginModal,
  showSignupModal,
  setShowSignupModal,
  onSignup,
  onLogin,
  onForgotPassword
}: AuthModalsProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin({
      email: formData.email,
      password: formData.password
    });
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSignup(formData);
  };
  
  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onForgotPassword(forgotPasswordEmail);
    setShowForgotPassword(false);
    setForgotPasswordEmail('');
  };

  // Add the forgot password modal
  if (showLoginModal && showForgotPassword) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md relative">
          <button
            onClick={() => {
              setShowForgotPassword(false);
              setForgotPasswordEmail('');
            }}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-6 text-white">Reset Password</h2>
          <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="w-1/2 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Back to Login
              </button>
              <button
                type="submit"
                className="w-1/2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Update the login modal to include forgot password link
  if (showLoginModal) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md relative">
          <button
            onClick={() => setShowLoginModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div className="text-right">
              <button 
                type="button" 
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Keep the existing signup modal
  if (showSignupModal) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md relative">
          <button
            onClick={() => setShowSignupModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
}