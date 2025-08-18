import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ children, colorClass }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className={`w-16 h-16 flex items-center justify-center mb-4 ${colorClass}`}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon, title, description, animationDelay }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      whileHover={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {icon} 
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <AnimatedIcon colorClass="text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zM15 11.5V13h2v-1.5zm-5.5 0V13h2v-1.5zm-3 0V13h2v-1.5zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm-2 9H9V7h1zm4 0h-1V7h1z"/>
          </svg>
        </AnimatedIcon>
      ),
      title: 'Synchronized Environment',
      description: 'Work with talented teams in a supportive and dynamic workplace.',
    },
    {
      icon: (
        <AnimatedIcon colorClass="text-green-500">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6z"/>
          </svg>
        </AnimatedIcon>
      ),
      title: 'Growth Opportunities',
      description: 'Enhance your skills through mentorship, real-world projects, and continuous learning.',
    },
    {
      icon: (
        <AnimatedIcon colorClass="text-pink-500">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            <path d="M12 12.72L9.41 10.13L8 11.54L12 15.54L18 9.54L16.59 8.13L12 12.72z" fill="#fff"/> 
            
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
          </svg>
        </AnimatedIcon>
      ),
      title: 'Meaningful Work',
      description: 'Be a part of projects that make a difference in the industry and beyond.',
    },
    {
      icon: (
        <AnimatedIcon colorClass="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/>
          </svg>
        </AnimatedIcon>
      ),
      title: 'Work-Life Balance',
      description: 'We value your well-being and provide flexibility to help you thrive.',
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="bg-white py-16 px-4 italic ">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-gray-800 mb-12 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          Shape Your Future. Achieve More with Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              animationDelay={0.4 + index * 0.2} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;