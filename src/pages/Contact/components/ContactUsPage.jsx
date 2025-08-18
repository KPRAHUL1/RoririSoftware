import React, {useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { facebook, instagram, linkedin, youtube } from '../../../assets/icons/icon';
import { MailCheck, CircleUserRound, MapPin,  Loader2 } from "lucide-react";


const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          to: "roririsoftpvtltd@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
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
        `Message:\n${formData.message}`
      );

      window.open(`mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('fallback');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <div className="italic min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id='contact'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <Motion.div
            className="flex flex-col justify-center text-center lg:text-left p-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
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
              <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/roriri_it_park/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://www.youtube.com/@Roriri_soft" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full hover:scale-110 transition-transform duration-200">
                <img src={youtube} alt="YouTube" />
              </a>
            </Motion.div>
          </Motion.div>

         
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>

            
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
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number 
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your pnone number"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    Subject 
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message 
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
      );
};

      export default ContactUsPage;
