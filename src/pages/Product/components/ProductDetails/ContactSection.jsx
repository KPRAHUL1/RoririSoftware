import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const ContactSection = ({ productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    inquiryType: 'demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        inquiryType: 'demo'
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="italic bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">
          Your inquiry about {productName} has been submitted successfully.
        </p>
        <p className="text-sm text-gray-500">
          Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Contact Information */}
        <div className="space-y-6 ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg">
              Contact our team to learn more about {productName} and how it can benefit your organization.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p className="text-gray-600">+91 7338941579</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-purple-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className=" font-semibold text-gray-900">Email Us</h4>
                <p className="text-xs md:text-lg text-gray-600">roririsoftpvtltd@gmail.com</p>
              </div>
            </div>

            
          </div>

          {/* Response Time */}
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-gray-900">Quick Response</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              We typically respond to inquiries within 2-4 hours during business hours.
            </p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
          
          <div className="space-y-4">
            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I'm interested in:
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="demo">Product Demo</option>
                <option value="pricing">Pricing Information</option>
                <option value="trial">Free Trial</option>
                <option value="consultation">Technical Consultation</option>
                <option value="partnership">Partnership Opportunities</option>
              </select>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Company and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;