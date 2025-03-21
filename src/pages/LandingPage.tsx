import React from 'react';
import { Upload, Search, MessageSquare, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 mb-6">
              Find the Perfect Job for You
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Upload your CV and let AI match you with your dream job
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-lg font-medium shadow-lg shadow-blue-500/30">
                Upload CV
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-lg font-medium border border-gray-200 dark:border-blue-500/10">
                Show Matches
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Job Matches Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 mb-12">
            Top Job Matches for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredJobs.map(job => (
              <div key={job.id} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-blue-500/10">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{job.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.matchPercentage}% Match
                    </span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-blue-500/10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 mb-12">
            Companies Hiring Now
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Replace these divs with actual company logos */}
            {['LinkedIn', 'Google', 'Amazon', 'Microsoft', 'Apple'].map((company, index) => (
              <div key={index} className="h-12 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-400 dark:text-gray-500">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 mb-8">
            🚀 Get Started & Find Your Dream Job Today!
          </h2>
          <button 
            onClick={onGetStarted}
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-all text-xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
          >
            <span className="flex items-center justify-center">
              Find My Matches
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
} 