'use client';
import React from 'react';
import { motion as Motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhatSetsUsApartPage = () => {
  const features = [
    {
      title: 'Expert Mentorship',
      icon: (
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      ),
      extra: [
        <circle key="1" cx="9" cy="7" r="4" />,
        <path key="2" d="M23 21v-2a4 4 0 00-3-3.87m-3-1.13a4 4 0 01-1 3.87" />,
        <path key="3" d="M16 3.13a4 4 0 010 7.75" />,
      ],
    },
    {
      title: 'Guidance & 6 Hours/Day',
      icon: <circle cx="12" cy="12" r="10" />,
      extra: <polyline points="12 6 12 12 16 14" />,
    },
    {
      title: 'Placement Support',
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    },
    {
      title: 'Module wise Analysis',
      icon: (
        <>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </>
      ),
    },
  ];

  const handleRegister = () => {
    window.location.href = '#contact';
  };

  return (
    <div className="italic min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <Motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Motion.div
          className="flex flex-col justify-center text-center md:text-left p-4 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-gray-800">
            What Sets Us <span className="text-green-600">Apart</span> ?
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-prose">
            Our 1-week Foundational Program equips internship students with key skills and
            confidence to thrive in real-world projects.
          </p>
          <Motion.button onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out self-center md:self-start"
          >
            Register Now 
          </Motion.button>
        </Motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
          {features.map((feature, i) => (
            <Motion.div
              key={i}
              className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center hover:shadow-xl transition"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-green-600 mb-3"
              >
                {feature.icon}
                {feature.extra}
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </div>
  );
};

export default WhatSetsUsApartPage;
