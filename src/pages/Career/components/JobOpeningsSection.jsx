import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ job, animationDelay }) => {
  return (
    <motion.div
      className="bg-white italic  rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 flex flex-col items-start text-left"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      whileHover={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        y: -5 
      }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 leading-tight">
        {job.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-600 text-sm mb-4">
        <span className="font-medium">{job.experience}</span> • {job.location}
      </p>

      <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow">
        {job.description}
      </p>
<motion.a
  href={`/jobs/${job.id}`} 
  whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }} 
  whileTap={{ scale: 0.95 }}
  className="mt-auto bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
>
  <span>APPLY</span>
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    ></path>
  </svg>
</motion.a>
    </motion.div>
  );
};


const JobOpeningsSection = () => {
  const jobPostings = [
    {
        id: 'fullstack-developer',
      title: 'Fullstack Developer',
      tags: ['Full time', 'Office'],
      experience: '2 Years+',
      location: 'Tirunelveli, Kalakad',
      description: 'Strong problem-solving skills and understanding of backend technologies (e.g., Node.js, Express).',
    },
    {
        id:'technical-trainer',
      title: 'Technical Trainer',
      tags: ['Full time', 'Office'],
      experience: '0-1 Year',
      location: 'Tirunelveli, Kalakad',
      description: 'Strong verbal and written communication for delivering content and interacting with trainees',
    },
    {
        id:'network-engineer',
      title: 'Network Engineer',
      tags: ['Full time', 'Office'],
      experience: '0-1 Year',
      location: 'Tirunelveli, Kalakad',
      description: 'Installing Network Hardware, Set up routers, switches, firewalls, and other network devices.',
    },
    {
        id:'business-development-executive',
      title: 'Business Development Executive',
      tags: ['Full time', 'Office'],
      experience: '2 Years+',
      location: 'Tirunelveli, Kalakad',
      description: 'Research and analyze market trends, competitors, and industry developments.',
    },
    {
        id:'python-developer',
      title: 'Python Developer',
      tags: ['Full time', 'Office'],
      experience: '2 Years+',
      location: 'Tirunelveli, Kalakad',
      description: 'Proficiency in Python and frameworks like Django or Flask. Experience with database systems (e.g., PostgreSQL, MySQL, or MongoDB).',
    },
    
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="bg-white-50 py-16 px-4"> 
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-gray-800 mb-12 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Currently We are Hiring for
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPostings.map((job, index) => (
            <JobCard
              key={job.title + index} 
              job={job}
              animationDelay={0.4 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpeningsSection;