// src/components/JobApplicationForm.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";

const JobApplicationForm = ({ isOpen, onClose, jobTitle = '', allJobTitles = [] }) => {
   const form = useRef();
      
          const sendEmail = (e) => {
              e.preventDefault();
              emailjs.sendForm(
                  'service_56cjqno',
                  'template_vtlhv9j',
                  form.current,
                  'cA6QaDp7Pj9_tpHXR'
              )
                  .then((result) => {
                      alert("Message sent successfully!");
                  }, (error) => {
                      alert("Failed to send message.");
                      console.error(error.text);
                  });
                };
  const [formData, setFormData] = useState({
    resume: null,
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingFor: jobTitle, // Pre-select if provided, otherwise default
    currentLocation: '',
    experience: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    // Reset form data when the modal opens or a new jobTitle is passed
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        applyingFor: jobTitle,
        resume: null, // Clear file input
        fullName: '',
        email: '',
        phoneNumber: '',
        currentLocation: '',
        experience: '',
      }));
      setErrors({});
      setIsSubmitting(false);
      setSubmissionSuccess(false);
    }
  }, [isOpen, jobTitle]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error for the field being changed
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) { // Basic 10 digit number validation
      newErrors.phoneNumber = 'Phone number is invalid (10 digits required)';
    }
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.currentLocation.trim()) newErrors.currentLocation = 'Current Location is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    else if (isNaN(formData.experience) || parseInt(formData.experience) < 0) {
      newErrors.experience = 'Experience must be a positive number';
    }
    if (!formData.applyingFor.trim()) newErrors.applyingFor = 'Applying For field is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // In a real application, you would send this formData to your backend API
    console.log('Form Data Submitted:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmissionSuccess(true);
      // You might clear the form here or handle navigation etc.
      // setTimeout(() => onClose(), 2000); // Close after showing success
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please try again.');
      setSubmissionSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-md lg:max-w-lg relative max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Job Application Form
            </h2>

            {submissionSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
              >
                <svg className="w-20 h-20 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-xl font-semibold text-gray-700 mb-4">Application Submitted Successfully!</p>
                <p className="text-gray-600">Thank you for your interest. We will review your application and get back to you soon.</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Upload Resume */}
                <div>
                  <label htmlFor="resume" className="block text-gray-700 text-sm font-semibold mb-2">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-500
                               file:mr-4 file:py-2 file:px-4
                               file:rounded-full file:border-0
                               file:text-sm file:font-semibold
                               file:bg-purple-50 file:text-purple-700
                               hover:file:bg-purple-100 cursor-pointer"
                  />
                  <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOC, DOCX</p>
                  {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel" // Use tel for phone numbers
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>

                {/* Applying For (Dropdown) */}
                <div>
                  <label htmlFor="applyingFor" className="block text-gray-700 text-sm font-semibold mb-2">
                    Applying For
                  </label>
                  <select
                    id="applyingFor"
                    name="applyingFor"
                    value={formData.applyingFor}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white appearance-none pr-8"
                  >
                    {/* If allJobTitles are provided, map them */}
                    {allJobTitles.length > 0 ? (
                      allJobTitles.map(job => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))
                    ) : (
                      // Fallback if no specific job titles are passed
                      <option value={jobTitle || ""}>
                         {jobTitle || "Select a job role"}
                      </option>
                    )}
                  </select>
                  {errors.applyingFor && <p className="text-red-500 text-xs mt-1">{errors.applyingFor}</p>}
                </div>

                {/* Current Location */}
                <div>
                  <label htmlFor="currentLocation" className="block text-gray-700 text-sm font-semibold mb-2">
                    Current Location
                  </label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    placeholder="Enter your current location"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {errors.currentLocation && <p className="text-red-500 text-xs mt-1">{errors.currentLocation}</p>}
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-gray-700 text-sm font-semibold mb-2">
                    Experience (in years)
                  </label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="0"
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cursor-pointer px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    CLOSE
                  </motion.button>
                  <motion.button
                    type="submit" ref={form} onClick={sendEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="cursor-pointer px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      'SUBMIT APPLICATION'
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobApplicationForm;