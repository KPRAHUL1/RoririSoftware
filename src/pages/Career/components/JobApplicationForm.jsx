import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailCheck, CircleUserRound, MapPin, Loader2, Send } from "lucide-react";


const JobApplicationForm = ({ isOpen, onClose, jobTitle = '', allJobTitles = [] }) => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    applyingFor: jobTitle,
    currentLocation: '',
    experience: '',

  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.applyingFor.trim()) {
  newErrors.applyingFor = 'Job title is required';
}
    if (!formData.currentLocation.trim()) {
      newErrors.currentLocation = 'currentLocation is required';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'experience is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "510e84f9-6c6a-4bf5-85fb-8a6bba4b6b45", 
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          applyingFor: jobTitle,
          currentLocation: formData.currentLocation,
          experience: formData.experience,

          from_name: formData.name,
          to: "roririsoftpvtltd@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', applyingFor: jobTitle, currentLocation: '', experience: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);

      
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Applingfor:${jobTitle}\n` +
        `CurrentLocation:\n${formData.currentLocation}` +
        `Experience: ${formData.experience}\n`
      );

      window.open(`mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('fallback');
      setFormData({ name: '', phone: '', email: '', applyingFor: jobTitle, currentLocation: '', experience: '' });
    } finally {
      setIsSubmitting(false);
    }
  };



  useEffect(() => {
    
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        applyingFor: jobTitle,
        resume: null, 
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
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) { 
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
          className="fixed italic  inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
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


              <div className="bg-white rounded-3xl shadow-xl p-8">
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
               
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <div>
                      <label className=" mt-5 block text-sm font-medium text-gray-700 mb-2">
                        Full Name 
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className=" mt-5 block text-sm font-medium text-gray-700 mb-2">
                        Phone Number 
                      </label>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="mt-5 block text-sm font-medium text-gray-700 mb-2">
                        Email Address 
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applying JopTitle
                    </label>
                    <input
                      type="text"
                      name="applyingFor"
                      value={formData.applyingFor}
                      onChange={handleChange}
                      placeholder="Enter your Jop"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.applyingFor && (
                      <p className="mt-1 text-sm text-red-500">{errors.applyingFor}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Location
                    </label>
                    <input
                    type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      placeholder="Enter Your Location"
                      rows="5"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.currentLocation && (
                      <p className="mt-1 text-sm text-red-500">{errors.currentLocation}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience
                    </label>
                    <input
                    type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Enter Your Experience"
                      rows="5"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-500">{errors.experience}</p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Apply</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobApplicationForm;