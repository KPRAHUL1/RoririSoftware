import React from 'react';

const InternshipProgramsPage = () => {

  const programs = [
    {
      name: 'React Js Developer',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-blue-500"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <path d="M16.24 7.76l-2.12 2.12M7.76 16.24l2.12-2.12M16.24 16.24l-2.12-2.12M7.76 7.76l2.12 2.12" />
        </svg>
      ), 
    },
    {
      name: 'Mobile App Developer',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-blue-500"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      ), 
    },
    {
      name: 'UI/UX Designer',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-purple-500"
        >
          <path d="M15 18l-6-6 6-6" />
          <path d="M6 12h12" />
        </svg>
      ), 
    },
    {
      name: 'Data Analyst',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-red-500"
        >
          <path d="M3 3v18h18" />
          <path d="M18 17l-5-5-4 4-2-2" />
        </svg>
      ), 
    },
    {
      name: 'Digital Marketing',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-yellow-500"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ), 
    },
    {
      name: 'HR Management',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-green-500"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87m-3-1.13a4 4 0 01-1 3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ), 
    },
  ];

  return (
    <div className="italic  flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 mt-10 mb-5">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-12 text-gray-800 text-center">
        Our <span className="text-green-600">Internship</span> Programs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 border-2 border-green-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            {program.icon}
            <span className="ml-4 text-lg font-semibold text-gray-800">
              {program.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipProgramsPage;
