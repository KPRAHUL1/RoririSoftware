import React from 'react';
import { motion } from 'framer-motion';

const RoririProductsPage = () => {
  // Framer Motion variants for animations
  const textContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Section: Text Content and Buttons */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left p-4"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4" variants={textItemVariants}>
            RORIRI <br /> Products
          </motion.h1>
          <motion.p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-prose" variants={textItemVariants}>
            Partner with us to enhance your business through our diverse services
            and discover the transformative power of our innovative products and
            trial solutions.
          </motion.p>
          <motion.div className="flex justify-center lg:justify-start space-x-4" variants={textItemVariants}>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center">
              View <span className="ml-2">↗</span>
            </button>
            <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center">
              Get Demo <span className="ml-2">↗</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section: Stylized Illustration */}
        <motion.div
          className="flex justify-center items-center p-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <iframe  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Unavailable"; }} className="w-full md:h-[500px] h-full" src="https://lottie.host/embed/2e757309-7fa3-43fc-b4d3-91cb3a949e03/KNDvImeYpL.lottie"></iframe>
          {/* Replace the placeholder image URL with your actual roririsoft.com_products.html.jpg */}
          {/* <img src="roririsoft.com_products.html.jpg" alt="Product Illustration" className="w-full max-w-lg h-auto object-contain" /> */}
        </motion.div>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default RoririProductsPage;
