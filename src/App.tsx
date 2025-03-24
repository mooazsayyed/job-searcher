import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronRight, Star, Building2, Clock, DollarSign, Percent, Upload, MessageSquare } from 'lucide-react';
import { JobDashboard } from './pages/JobDashboard';
import { ThemeProvider } from './context/ThemeContext';
import { AuthModals } from './components/AuthModals';
import axios from 'axios';

type View = 'landing' | 'listings';

function App() {
  const [view, setView] = useState<View>('landing');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    title: '',
    location: '',
    experience: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setView('listings');
  };

  const handleBack = () => {
    setView('landing');
  };

  return (
    <ThemeProvider>
      {view === 'landing' ? (
        <LandingPage
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          showSignupModal={showSignupModal}
          setShowSignupModal={setShowSignupModal}
          setView={setView}  // Add this line
        />
      ) : (
        <JobDashboard
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          onBack={handleBack}
        />
      )}
    </ThemeProvider>
  );
}

// Update the LandingPage props interface
interface LandingPageProps {
  searchQuery: any;
  setSearchQuery: any;
  onSearch: (e: React.FormEvent) => void;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  showSignupModal: boolean;
  setShowSignupModal: (show: boolean) => void;
  setView: (view: View) => void;  // Add this line
}

function LandingPage({
  searchQuery,
  setSearchQuery,
  onSearch,
  showLoginModal,
  setShowLoginModal,
  showSignupModal,
  setShowSignupModal,
  setView  // Add this line
}: LandingPageProps) {
  // Sample featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      matchPercentage: 95,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'InnovateTech',
      location: 'New York, NY',
      matchPercentage: 92,
    },
    {
      id: 3,
      title: 'React Developer',
      company: 'StartupX',
      location: 'Austin, TX',
      matchPercentage: 88,
    },
  ];

  // How it works steps
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your CV',
      description: 'Upload your CV or enter your skills manually to get started',
    },
    {
      icon: Search,
      title: 'Get Matched',
      description: 'Receive job listings tailored to your skills and experience',
    },
    {
      icon: MessageSquare,
      title: 'Connect',
      description: 'Reach out to recruiters with personalized cold messages',
    },
  ];

  const handleSignup = async (formData: { email: string; password: string; firstName: string; lastName: string }) => {
    try {
      // Log the formData to verify what's being sent
      console.log('Sending signup data:', formData);

      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,  // Make sure these match exactly
        lastName: formData.lastName     // with the backend model
      });

      if (response.data.success) {
        setShowSignupModal(false);
        localStorage.setItem('token', response.data.token);
        setView('listings');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Show the specific validation error to the user
      const errorMessage = (error as any).response?.data?.message || 'Registration failed. Please try again.';
      alert(errorMessage);
    }
  };

  // Add login handler
  const handleLogin = async (formData: { email: string; password: string }) => {
    try {
      console.log('Sending login data:', formData);
      
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email,
        password: formData.password
      });
      
      if (response.data.token) {
        setShowLoginModal(false);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setView('listings');
      }
    } catch (error) {
      console.error('Login failed:', error);
      const errorMessage = (error as any).response?.data?.message || 'Login failed. Please try again.';
      alert(errorMessage);
    }
  };

  // Add forgot password handler
  const handleForgotPassword = async (email: string) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      alert(response.data.message || 'Password reset instructions sent to your email.');
    } catch (error) {
      console.error('Forgot password request failed:', error);
      const errorMessage = (error as any).response?.data?.message || 'Failed to process request. Please try again.';
      alert(errorMessage);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 animate-gradient">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            JobSeeker
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignupModal(true)}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-4 py-2 bg-gray-900 rounded-lg leading-none flex items-center">
                <span className="text-blue-200 group-hover:text-blue-100 transition duration-200">
                  Sign Up
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Animated blobs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 mb-6">
              Find the most relevant jobs
              <br />
              tailored just for you!
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-delay">
            Connect with opportunities that match your skills and aspirations
          </p>

          {/* Search Form */}
          <form onSubmit={onSearch} className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-blue-500/20 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="pl-10 w-full h-12 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40"
                    value={searchQuery.title}
                    onChange={(e) => setSearchQuery({ ...searchQuery, title: e.target.value })}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-10 w-full h-12 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40"
                    value={searchQuery.location}
                    onChange={(e) => setSearchQuery({ ...searchQuery, location: e.target.value })}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Star className="absolute left-3 top-3.5 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <select
                    className="pl-10 pr-10 w-full h-12 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2363B3ED%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.75rem_center] bg-no-repeat"
                    value={searchQuery.experience}
                    onChange={(e) => setSearchQuery({ ...searchQuery, experience: e.target.value })}
                  >
                    <option value="">Experience Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                    <option value="lead">Lead Level</option>
                    <option value="manager">Manager Level</option>
                    <option value="director">Director Level</option>
                    <option value="executive">Executive Level</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Upload CV Section */}
            <div className="mt-6 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <label className="flex items-center justify-center w-full h-12 rounded-lg bg-gray-900/50 border border-blue-500/20 text-white cursor-pointer hover:border-blue-500/40 transition-all">
                  <Upload className="h-5 w-5 mr-2 text-blue-400" />
                  <span>Upload CV</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-4 bg-gray-900 rounded-lg leading-none flex items-center justify-center">
                <span className="text-blue-200 group-hover:text-blue-100 transition duration-200 text-lg font-semibold">
                  Find my best Matchs
                </span>
                <ChevronRight className="ml-2 h-5 w-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </button>
          </form>
        </div>
      </div>

      {/* Featured Job Matches Section */}
      <div>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 mb-12">
              Top Job Matches for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJobs.map(job => (
                <div key={job.id} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-blue-500/20">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="text-blue-300">{job.company}</p>
                      <div className="flex items-center text-gray-400 mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-blue-300">{job.matchPercentage}% Match</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-blue-500/20 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 mb-12">
              Companies Hiring Now
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {['LinkedIn', 'Google', 'Amazon', 'Microsoft', 'Apple'].map((company, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative p-6 bg-gray-900/50 backdrop-blur-lg rounded-lg border border-blue-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-300">{company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 mb-8">
              🚀 Get Started & Find Your Dream Job Today!
            </h2>
            <button
              onClick={onSearch}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all text-xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
            >
              <span className="flex items-center justify-center">
                Find My Matches
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </section>
      </div>
      <AuthModals
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
        onSignup={handleSignup}
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
      />
    </div>
  );
}

export default App;

