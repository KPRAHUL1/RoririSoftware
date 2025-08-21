import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard'
import JobOpeningsSection from './components/JobOpeningsSection';
import { job } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Career = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 ">
      
   <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen px-4"
>
  {/* LEFT CONTENT */}
  <div className="flex flex-col text-center md:text-left md:w-1/2">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-purple-700 mb-4 tracking-tight leading-tight">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-block"
      >
        Become a
      </motion.span>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
        className="inline-block text-indigo-800 italic ml-2 sm:ml-5"
      >
        𝐑𝐎𝐑𝐈𝐑𝐈'𝐚𝐧
      </motion.span>
    </h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6"
    >
      Discover, Innovate, and Grow Together
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7 }}
      className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
    >
      At RORIRI Soft, we believe in building not just careers, but futures. Join a team that fosters creativity,
      embraces challenges, and celebrates success. Whether you're a seasoned professional or just starting out,
      we offer opportunities to innovate, learn, and make an impact.
    </motion.p>

    <a href="#JobOpeningsSection" className="mx-auto md:mx-0">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5, type: "spring", stiffness: 150 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center"
      >
        <span>Explore JOB Openings</span>
      </motion.button>
    </a>
  </div>

  {/* RIGHT LOTTIE */}
  <div className="flex justify-center md:w-1/2">
    <DotLottieReact
      className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
      src={job}
      loop
      autoplay
    />
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