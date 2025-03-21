import React, { useState } from 'react';
import { Briefcase, BookmarkCheck, Mail, ChevronRight, Star, ArrowLeft } from 'lucide-react';

interface UserDashboardProps {
  onBack: () => void;
}

export function UserDashboard({ onBack }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('applied');

  const tabs = [
    { id: 'applied', label: 'Applied Jobs', icon: Briefcase, count: 12 },
    { id: 'saved', label: 'Saved Jobs', icon: BookmarkCheck, count: 8 },
    { id: 'messages', label: 'Cold Messages', icon: Mail, count: 15 }
  ];

  // Sample data - replace with real data later
  const appliedJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp Inc.', date: '2024-03-15', status: 'Under Review' },
    { id: 2, title: 'Full Stack Developer', company: 'InnovateTech', date: '2024-03-10', status: 'Interview Scheduled' },
    { id: 3, title: 'Backend Engineer', company: 'DataFlow Systems', date: '2024-03-05', status: 'Application Sent' }
  ];

  const savedJobs = [
    { id: 4, title: 'React Developer', company: 'StartupX', matchScore: 95 },
    { id: 5, title: 'Frontend Architect', company: 'TechGiant', matchScore: 88 },
    { id: 6, title: 'UI Engineer', company: 'DesignCo', matchScore: 92 }
  ];

  const messages = [
    { id: 7, to: 'John Doe', company: 'TechCorp', date: '2024-03-15', status: 'Replied' },
    { id: 8, to: 'Jane Smith', company: 'InnovateTech', date: '2024-03-12', status: 'Sent' },
    { id: 9, to: 'Mike Johnson', company: 'DataFlow', date: '2024-03-08', status: 'No Response' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      {/* Navigation Bar */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Jobs
            </button>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300">
              Your Dashboard
            </h1>
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800'
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              <span>{tab.label}</span>
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-white/20">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 p-6">
          {/* Applied Jobs Tab */}
          {activeTab === 'applied' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Applied Jobs</h2>
              <div className="grid gap-4">
                {appliedJobs.map(job => (
                  <div key={job.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{job.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        job.status === 'Interview Scheduled' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' :
                        job.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Applied on {new Date(job.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Jobs Tab */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Saved Jobs</h2>
              <div className="grid gap-4">
                {savedJobs.map(job => (
                  <div key={job.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{job.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-gray-700 dark:text-gray-300">{job.matchScore}% Match</span>
                      </div>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cold Messages Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cold Messages</h2>
              <div className="grid gap-4">
                {messages.map(message => (
                  <div key={message.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{message.to}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{message.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        message.status === 'Replied' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' :
                        message.status === 'No Response' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400'
                      }`}>
                        {message.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Sent on {new Date(message.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 