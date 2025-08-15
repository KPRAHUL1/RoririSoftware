
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import jobData from './Job_Details/jobData';
import JobApplicationForm from './components/JobApplicationForm';

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const foundJob = jobData.find(j => j.id === jobId);
        if (!foundJob) throw new Error('Job not found');
        setJob(foundJob);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  if (loading) return <div className="flex items-center justify-center min-h-screen italic  text-gray-700">Loading job details...</div>;

  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
      <p>Error: {error}</p>
      <Link to="/careers" className="mt-4 text-blue-600 hover:underline">Go back to Careers Page</Link>
    </div>
  );

  if (!job) return <div className="flex items-center justify-center min-h-screen text-gray-700">Job details could not be loaded.</div>;

  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 50 }
  };
    const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8">
        
         <div className="container mx-auto p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
          >
            Role Description:
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.1 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-8"
          >
            {job.roleDescription}
          </motion.p>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Qualifications:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
            className="list-none space-y-3 mb-8"
          >
            {job.qualifications.map((qualification, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {qualification}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Skills Required:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.5, staggerChildren: 0.08 }}
            className="list-none space-y-3 mb-8"
          >
            {job.skillsRequired.map((skill, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {skill}
              </motion.li>
            ))}
          </motion.ul>

          <motion.h2
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-5"
          >
            Responsibilities:
          </motion.h2>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ delay: 0.7, staggerChildren: 0.1 }}
            className="list-none space-y-3 mb-8"
          >
            {job.responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                variants={sectionVariants}
                className="flex items-start text-gray-700 text-base md:text-lg"
              >
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {responsibility}
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>

        <div className="lg:w-96 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-28 bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{job.title}</h3>
            <div className="space-y-3 text-gray-700 mb-6">
              <div><span className="font-medium mr-2">Workplace:</span> {job.workplace}</div>
              <div><span className="font-medium mr-2">Location:</span> {job.location}</div>
              <div><span className="font-medium mr-2">Job Type:</span> {job.jobType}</div>
              <div><span className="font-medium mr-2">Experience:</span> {job.experience}</div>
            </div>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              APPLY NOW
            </motion.button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-purple-900 bg-opacity-80 flex justify-center items-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => setIsModalOpen(false)}
    >
     
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        style={{
          background: `radial-gradient(circle at center, rgba(255,255,255,0.3), rgba(0,0,0,0.8))`,
          mixBlendMode: 'overlay',
        }}
      ></motion.div>

      <motion.div
        className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-md lg:max-w-lg relative max-h-[90vh] overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Job Application Form
        </h2>
        <JobApplicationForm
          isOpen={isModalOpen}   
          onClose={() => setIsModalOpen(false)}
          jobTitle={job.title}
        />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default JobDescriptionPage;
