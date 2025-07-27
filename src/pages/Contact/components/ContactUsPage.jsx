import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react'; // Social icons and send icon

const ContactUsPage = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly below and invisible
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6, // Overall duration for the container animation
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Section: Text Content and Social Media */}
        <Motion.div
          className="flex flex-col justify-center text-center lg:text-left p-4"
          variants={containerVariants}
          initial="hidden" // Initial state when not in view
          whileInView="visible" // Animate to 'visible' when in view
          viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of component is in view, only once
        >
          <Motion.p className="text-purple-700 font-semibold text-lg mb-2" variants={itemVariants}>
            Contact Us
          </Motion.p>
          <Motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900" variants={itemVariants}>
            Get in touch with <br /> us today
          </Motion.h1>
          <Motion.p className="text-gray-600 text-base sm:text-lg mb-10 max-w-prose" variants={itemVariants}>
            Reach out to explore endless possibilities with Roniri Software Solutions!
          </Motion.p>

          <Motion.h2 className="text-2xl font-bold text-gray-800 mb-6" variants={itemVariants}>
            Follow Us:
          </Motion.h2>
          <Motion.div className="flex justify-center lg:justify-start space-x-4" variants={itemVariants}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <Facebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <Instagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-3 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-3 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <Youtube size={24} />
            </a>
          </Motion.div>
        </Motion.div>

        {/* Right Section: Contact Form */}
        <Motion.div
          className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-xl shadow-lg w-full "
          variants={formVariants}
          initial="hidden" // Initial state when not in view
          whileInView="visible" // Animate to 'visible' when in view
          viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of component is in view, only once
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out bg-white"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subjects" className="sr-only">Subjects</label>
              <input
                type="text"
                id="subjects"
                name="subjects"
                placeholder="Subjects"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out bg-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Message"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out bg-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              Send Message <Send size={20} className="ml-2" />
            </button>
          </form>
        </Motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;
