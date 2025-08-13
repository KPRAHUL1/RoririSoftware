import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy
      </motion.h1>

      <div className="max-w-4xl bg-white rounded-lg shadow-xl p-8 sm:p-10 lg:p-12">
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          At RoririSoft.com, your privacy is our priority. As a web app and ERP development company, we are dedicated to safeguarding the personal information you entrust to us. This Privacy Policy explains how we collect, use, and protect your data when you visit our website or utilize our services.
        </motion.p>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Personal Information:</h3>
          <p className="text-gray-600 mb-4">
            We may collect personal details such as your name, email address, phone number, and company information when you interact with our website or services.
          </p>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Usage Data:</h3>
          <p className="text-gray-600">
            We also gather data about your interactions with our website, including your IP address, browser type, device details, and the pages you visit.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To deliver and maintain our services effectively.</li>
            <li>To communicate updates about our products and services.</li>
            <li>To enhance our website and services based on user feedback and behavior.</li>
            <li>To analyze trends, monitor website performance, and prevent fraud or abuse.</li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
          <p className="text-gray-600">
            We employ robust security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Services</h2>
          <p className="text-gray-600">
            We may engage third-party services, such as analytics providers and payment processors, to support our operations. These third parties access your information only as needed to perform their services and are required to ensure its confidentiality and security.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookies</h2>
          <p className="text-gray-600">
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage or disable cookies through your browser settings.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Personal Information:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request updates or corrections to your data.</li>
            <li>Request the deletion of your personal information.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            For any questions or requests regarding your data, please contact us using the information provided below.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes To This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant updates will be communicated by posting the revised policy on our website.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
          <p className="text-gray-600">
            For any inquiries, concerns, or requests related to this Privacy Policy, please contact us at: Email: <a href="mailto:privacy@roririsoft.com" className="text-blue-600 hover:underline">privacy@roririsoft.com</a>
          </p>
          <p className="text-gray-600 mt-2">
            By using our website or services, you consent to the terms outlined in this Privacy Policy.
          </p>
        </motion.section>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
