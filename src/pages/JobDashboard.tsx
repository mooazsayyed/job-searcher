import React, { useState } from 'react';
import { MapPin, Briefcase, ChevronRight, Star, Building2, Sun, Moon, Bookmark, LayoutDashboard } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { JobDetails } from './JobDetails';
import { UserDashboard } from './UserDashboard';

interface JobDashboardProps {
  searchQuery: {
    title: string;
    location: string;
    experience: string;
  };
  setSearchQuery: React.Dispatch<React.SetStateAction<{
    title: string;
    location: string;
    experience: string;
  }>>;
  onSearch: (e: React.FormEvent) => void;
  onBack: () => void;
}

export function JobDashboard({ searchQuery, setSearchQuery, onSearch, onBack }: JobDashboardProps) {
  const { theme, toggleTheme } = useTheme();
  const [filters, setFilters] = useState({
    industry: '',
    jobType: '',
    salaryRange: '',
    workPreference: ''
  });
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleViewDetails = (jobId: number) => {
    setSelectedJob(jobId);
  };

  const handleBackToListings = () => {
    setSelectedJob(null);
  };

  const handleSaveJob = (jobId: number) => {
    setSavedJobs(prev => {
      if (prev.includes(jobId)) {
        return prev.filter(id => id !== jobId);
      }
      return [...prev, jobId];
    });
  };

  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  const handleBackFromDashboard = () => {
    setShowDashboard(false);
  };

  if (showDashboard) {
    return <UserDashboard onBack={handleBackFromDashboard} />;
  }

  if (selectedJob !== null) {
    return <JobDetails onBack={handleBackToListings} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
                Back
              </button>
            </div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">
              JobSeeker
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className="relative group"
                onClick={handleDashboardClick}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-4 py-2 bg-white dark:bg-gray-900 rounded-lg leading-none flex items-center space-x-2 border border-gray-200 dark:border-blue-500/10">
                  <LayoutDashboard className="h-5 w-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-200 dark:group-hover:text-blue-100 transition duration-200" />
                  <span className="text-blue-600 group-hover:text-blue-500 dark:text-blue-200 dark:group-hover:text-blue-100 transition duration-200">
                    Dashboard
                  </span>
                </div>
              </button>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button className="px-4 py-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Login
              </button>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-4 py-2 bg-white dark:bg-gray-900 rounded-lg leading-none flex items-center border border-gray-200 dark:border-blue-500/10">
                  <span className="text-blue-600 group-hover:text-blue-500 dark:text-blue-200 dark:group-hover:text-blue-100 transition duration-200">
                    Sign Up
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Search Bar */}
        <div className="mb-8">
          <form onSubmit={onSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors" />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="pl-10 w-full h-12 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20"
                  value={searchQuery.title}
                  onChange={(e) => setSearchQuery({ ...searchQuery, title: e.target.value })}
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors" />
                <input
                  type="text"
                  placeholder="Location"
                  className="pl-10 w-full h-12 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20"
                  value={searchQuery.location}
                  onChange={(e) => setSearchQuery({ ...searchQuery, location: e.target.value })}
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Star className="absolute left-3 top-3.5 h-5 w-5 text-blue-600 group-hover:text-blue-500 dark:text-blue-400 dark:group-hover:text-blue-300 transition-colors" />
                <select
                  className="pl-10 pr-10 w-full h-12 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20 appearance-none"
                  value={searchQuery.experience}
                  onChange={(e) => setSearchQuery({ ...searchQuery, experience: e.target.value })}
                >
                  <option value="">Experience Level</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                  <option value="lead">Lead Level</option>
                  <option value="manager">Manager Level</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* Two Column Layout */}
        <div className="flex gap-6">
          {/* Left Sidebar - Filters */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 p-5 space-y-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">Filters</h3>
                <button className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Clear All</button>
              </div>
              
              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Industry</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-full h-10 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20 text-sm pl-4 pr-10 appearance-none cursor-pointer"
                      value={filters.industry}
                      onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                    >
                      <option value="" className="text-gray-500">All Industries</option>
                      <option value="tech" className="py-2">Technology</option>
                      <option value="finance" className="py-2">Finance</option>
                      <option value="healthcare" className="py-2">Healthcare</option>
                      <option value="education" className="py-2">Education</option>
                      <option value="retail" className="py-2">Retail</option>
                      <option value="manufacturing" className="py-2">Manufacturing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Type</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-full h-10 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20 text-sm pl-4 pr-10 appearance-none cursor-pointer"
                      value={filters.jobType}
                      onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                    >
                      <option value="" className="text-gray-500">All Types</option>
                      <option value="full-time" className="py-2">Full Time</option>
                      <option value="part-time" className="py-2">Part Time</option>
                      <option value="contract" className="py-2">Contract</option>
                      <option value="internship" className="py-2">Internship</option>
                      <option value="temporary" className="py-2">Temporary</option>
                      <option value="freelance" className="py-2">Freelance</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Salary Range</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-full h-10 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20 text-sm pl-4 pr-10 appearance-none cursor-pointer"
                      value={filters.salaryRange}
                      onChange={(e) => setFilters({ ...filters, salaryRange: e.target.value })}
                    >
                      <option value="" className="text-gray-500">Any Range</option>
                      <option value="0-50k" className="py-2">$0 - $50,000</option>
                      <option value="50k-100k" className="py-2">$50,000 - $100,000</option>
                      <option value="100k-150k" className="py-2">$100,000 - $150,000</option>
                      <option value="150k-200k" className="py-2">$150,000 - $200,000</option>
                      <option value="200k+" className="py-2">$200,000+</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Preference Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Work Preference</label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <select
                      className="w-full h-10 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/40 dark:hover:border-blue-500/20 text-sm pl-4 pr-10 appearance-none cursor-pointer"
                      value={filters.workPreference}
                      onChange={(e) => setFilters({ ...filters, workPreference: e.target.value })}
                    >
                      <option value="" className="text-gray-500">Any</option>
                      <option value="remote" className="py-2">Remote</option>
                      <option value="hybrid" className="py-2">Hybrid</option>
                      <option value="onsite" className="py-2">On-site</option>
                      <option value="flexible" className="py-2">Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Filters Button */}
              <button className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium mt-4">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Main Content - Job Listings */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                  <thead className="bg-gray-50 dark:bg-gray-900/80">
                    <tr>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Job Title</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Match Score</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {/* Sample Job Listing */}
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Senior Frontend Developer</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Posted 2 days ago</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">TechCorp Inc.</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Technology</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          San Francisco, CA
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center">
                          <div className="h-2 w-24 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700 dark:text-white">95%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button 
                            onClick={() => handleViewDetails(1)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleSaveJob(1)}
                            className={`p-2 rounded-lg transition-all ${
                              savedJobs.includes(1)
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                            title={savedJobs.includes(1) ? "Remove from Saved" : "Save Job"}
                          >
                            <Bookmark className={`h-5 w-5 ${savedJobs.includes(1) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Second Job Listing */}
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Full Stack Developer</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Posted 1 week ago</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">InnovateTech Solutions</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Software</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          New York, NY
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center">
                          <div className="h-2 w-24 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700 dark:text-white">88%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button 
                            onClick={() => handleViewDetails(2)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleSaveJob(2)}
                            className={`p-2 rounded-lg transition-all ${
                              savedJobs.includes(2)
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                            title={savedJobs.includes(2) ? "Remove from Saved" : "Save Job"}
                          >
                            <Bookmark className={`h-5 w-5 ${savedJobs.includes(2) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Third Job Listing */}
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Backend Engineer</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Posted 3 days ago</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">DataFlow Systems</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Cloud Computing</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          Seattle, WA
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center">
                          <div className="h-2 w-24 bg-gray-200 dark:bg-gray-800 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-700 dark:text-white">92%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button 
                            onClick={() => handleViewDetails(3)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleSaveJob(3)}
                            className={`p-2 rounded-lg transition-all ${
                              savedJobs.includes(3)
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                            title={savedJobs.includes(3) ? "Remove from Saved" : "Save Job"}
                          >
                            <Bookmark className={`h-5 w-5 ${savedJobs.includes(3) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Add more job listings here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}