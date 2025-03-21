import React from 'react';
import { MapPin, Building2, Briefcase, DollarSign, Clock, Link, Mail, Copy, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface JobDetailsProps {
  onBack: () => void;
}

export function JobDetails({ onBack }: JobDetailsProps) {
  const { theme } = useTheme();

  const handleCopyMessage = () => {
    const message = `Hi [Hiring Manager's Name],

I came across the Senior Frontend Developer position at TechCorp Inc. and I'm very interested in the role. With my experience in React, TypeScript, and modern frontend development, I believe I can contribute significantly to your team.

I've attached my resume for your review. I would welcome the opportunity to discuss how my skills align with your needs.

Best regards,
[Your Name]`;

    navigator.clipboard.writeText(message);
  };

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
                Back to Listings
              </button>
            </div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 ml-auto mr-8">
              JobSeeker
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Job Details */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Senior Frontend Developer</h1>
                  <div className="flex items-center space-x-8 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 px-6 py-3 rounded-lg border border-gray-200 dark:border-blue-500/10">
                    <div className="flex items-center whitespace-nowrap">
                      <Building2 className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400" />
                      <span className="font-medium">TechCorp Inc.</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                      <MapPin className="h-5 w-5 mr-2 text-green-500 dark:text-green-400" />
                      <span className="font-medium">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                      <DollarSign className="h-5 w-5 mr-2 text-yellow-500 dark:text-yellow-400" />
                      <span className="font-medium">$120,000 - $180,000</span>
                    </div>
                    <div className="flex items-center whitespace-nowrap">
                      <Clock className="h-5 w-5 mr-2 text-purple-500 dark:text-purple-400" />
                      <span className="font-medium">Full Time</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4 shrink-0">
                  <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium flex items-center whitespace-nowrap">
                    <Link className="h-4 w-4 mr-1.5" />
                    Apply
                  </button>
                  <button className="px-3 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-lg transition-colors text-sm font-medium flex items-center border border-gray-200 dark:border-blue-500/10 whitespace-nowrap">
                    <Mail className="h-4 w-4 mr-1.5" />
                    Contact
                  </button>
                </div>
              </div>

              {/* Top Skills Labels */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
                    AI/ML
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                    AWS
                  </span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">
                    Docker
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Job Description</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We are looking for an experienced Frontend Developer to join our team. The ideal candidate will have strong experience with React, TypeScript, and modern frontend development practices.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">Requirements</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>5+ years of experience with React and TypeScript</li>
                  <li>Strong understanding of modern frontend development practices</li>
                  <li>Experience with state management solutions (Redux, MobX, etc.)</li>
                  <li>Proficiency in CSS and modern styling solutions</li>
                  <li>Experience with testing frameworks (Jest, React Testing Library)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Match Analysis & Contact */}
          <div className="space-y-6">
            {/* Match Analysis */}
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Match Analysis</h2>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume Match</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">95%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Matching Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Redux', 'CSS', 'Jest'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Cold Message */}
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 dark:border-blue-500/10 p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact & Message</h2>
              <div className="space-y-6">
                {/* Contact List */}
                <div className="space-y-3">
                  {[
                    { name: 'Sarah Johnson', role: 'Hiring Manager', email: 'sarah.j@techcorp.com' },
                    { name: 'Michael Chen', role: 'Tech Lead', email: 'michael.c@techcorp.com' },
                    { name: 'Emily Rodriguez', role: 'HR Manager', email: 'emily.r@techcorp.com' }
                  ].map((contact, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-blue-500/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all cursor-pointer group"
                    >
                      <div>
                        <div className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {contact.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{contact.role}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{contact.email}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md">
                          <Link className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md">
                          <Mail className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Template */}
                <div className="relative">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message Template</label>
                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        Save Template
                      </button>
                      <button className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        Load Template
                      </button>
                    </div>
                  </div>
                  <textarea
                    className="w-full h-40 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-blue-500/10 text-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm leading-relaxed"
                    defaultValue={`Hi [Contact Name],

I came across the Senior Frontend Developer position at TechCorp Inc. and I'm very interested in the role. With my experience in React, TypeScript, and modern frontend development, I believe I can contribute significantly to your team.

I've attached my resume for your review. I would welcome the opportunity to discuss how my skills align with your needs.

Best regards,
[Your Name]`}
                  />
                  <button
                    onClick={handleCopyMessage}
                    className="absolute bottom-4 right-4 p-2.5 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 