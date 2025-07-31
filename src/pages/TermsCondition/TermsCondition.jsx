import { motion } from 'framer-motion';
const TermsAndConditions = () => {
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
        Terms and Conditions
      </motion.h1>

      <div className="max-w-4xl bg-white rounded-lg shadow-xl p-8 sm:p-10 lg:p-12">
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          These terms and conditions outline the rules and regulations for using our website and the services provided by RoririSoft.com, a web app and ERP development company. By accessing or using our website and services, you agree to these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website or services.
        </motion.p>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Use of Website</h2>
          <p className="text-gray-600">
            You agree to use our website and services solely for lawful purposes and in compliance with these terms and conditions.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Intellectual Property</h2>
          <p className="text-gray-600">
            All content, trademarks, and intellectual property displayed on our website are owned by RoririSoft.com or its licensors. You are not permitted to use, reproduce, modify, or distribute any content from our website without prior written consent.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Privacy Policy</h2>
          <p className="text-gray-600">
            Your use of our website and services is subject to our Privacy Policy, which details how we collect, use, and protect your personal information.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Links</h2>
          <p className="text-gray-600">
            Our website may include links to third-party websites or services not controlled or owned by RoririSoft.com. We are not responsible for the content, privacy practices, or terms of use of any third-party websites or services.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-gray-600">
            While we strive to provide accurate and up-to-date information, RoririSoft.com makes no guarantees about the completeness, accuracy, reliability, or availability of the information, products, or services on our website. Your use of our website and services is at your own risk. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            RoririSoft.com shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or services.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
          <p className="text-gray-600">
            These terms and conditions are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
        </motion.section>

        <motion.section
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of our website and services constitutes acceptance of the revised terms.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:info@roririsoft.com" className="text-blue-600 hover:underline">info@roririsoft.com</a>.
          </p>
          <p className="text-gray-600 mt-2">
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please discontinue your use of our website and services.
          </p>
        </motion.section>
      </div>
    </div>
  );
};
export default TermsAndConditions