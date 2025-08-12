import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard'
import JobOpeningsSection from './components/JobOpeningsSection';
import JobApplicationForm from './components/JobApplicationForm';
const Career = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" z-10 flex flex-col md:flex-row gap-5 h-screen items-center"
      >
         <iframe src="https://lottie.host/embed/61a72e2e-67db-4441-83e7-13ff833a4663/UZaKn8T5Dg.lottie" className='h-full w-full md:h-[400px] md:w-[400px]'></iframe>
      <div className="flex flex-col">
                 <h1 className="text-5xl  md:text-6xl font-medium text-purple-700 mb-4 tracking-tight leading-tight">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mr-2 "
          >
            Become a
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-block text-indigo-800 italic ml-5"
          >
            𝐑𝐎𝐑𝐈𝐑𝐈'𝐚𝐧
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-2xl md:text-3xl text-gray-700 mb-8"
        >
          Discover, Innovate, and Grow Together
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          At RORIRI Soft, we believe in building not just careers, but futures. Join a team that fosters creativity,
          embraces challenges, and celebrates success. Whether you're a seasoned professional or just starting out,
          we offer opportunities to innovate, learn, and make an impact.
        </motion.p>
<a href="#JobOpeningsSection">
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
         
        >
          <span>Explore JOB Openings</span>
          <svg
            className="w-5 h-5 ml-2"
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
        </motion.button>
        </a>
        </div> 

      </motion.div>
       <div style={{position:'relative',top:'40px'
       }}>
        <FeatureCard/>
    </div>
    <div id='JobOpeningsSection'>
        <JobOpeningsSection/>
        </div>
        
    </div>
   
  );
};

export default Career;