import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter italic">
      <div className="max-w-7xl mx-auto w-full bg-gray-900 rounded-3xl p-8 sm:p-20 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden">
        <div className="absolute top-4 left-6 w-3 h-3 rounded-full bg-red-500 opacity-70 blur-sm"></div>
        <div className="absolute top-8 left-10 w-2 h-2 rounded-full bg-red-700 opacity-80 blur-sm"></div>

        <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:mr-8">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
            Interested to discover how your business can achieve strategic outcomes with Roriri Software Solutions?
          </h2>
        </div>

        <div className="flex-shrink-0">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
