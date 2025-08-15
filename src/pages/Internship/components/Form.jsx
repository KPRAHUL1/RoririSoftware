import { useState } from 'react';
import { facebook, instagram, linkedin, youtube } from '../../../assets/icons/icon';
import { MailCheck, CircleUserRound, MapPin, Loader2, Send } from "lucide-react";


const InternshipRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    qualification: '',
    college: '',
    year: '',
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

    if (!formData.program.trim()) {
      newErrors.program = 'program is required';
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = 'qualification is required';
    }
    if (!formData.college.trim()) {
      newErrors.college = 'college is required';
    }
    if (!formData.year.trim()) {
      newErrors.year = 'year is required';
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
          program: formData.program,
          qualification: formData.qualification,
          college: formData.college,
          year: formData.year,
          message: formData.message,
          from_name: formData.name,
          to: "roririsoftpvtltd@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', program: '', qualification: '', college: '', year: '', message: '' });
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
        `Program ${formData.program}\n` +
        `Qualification ${formData.qualification}\n` +
        `College ${formData.college}\n` +
        `Year ${formData.year}\n` +
        `Message:\n${formData.message}`
      );

      window.open(`mailto:roririsoftpvtltd@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setSubmitStatus('fallback');
      setFormData({ name: '', phone: '', email: '', program: '', qualification: '', college: '', year: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="italic min-h-screen  flex items-center lg:p-10 p-5 justify-center font-sans mb-5" id='contact'>
      <div className=" w-full flex flex-col lg:flex-row  rounded-xl  overflow-hidden lg:p-5">
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center ">
          <h2 className="text-green-600 text-lg font-semibold mb-2">Contact Us</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get in touch with us <br />today
          </h1>
          <p className="text-gray-600 text-lg">
            Reach out to explore endless possibilities with Ronri Software Solutions!
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4 rounded-lg">Follow Us:</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/roriri_it_park/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={instagram} />
            </a>
            <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={linkedin} />
            </a>
            <a href="https://www.youtube.com/@Roriri_soft" target="_blank" rel="noopener noreferrer" className="h-12 w-12 p-1 rounded-full text-white hover:scale-110 transition-transform duration-200">
              <img src={youtube} />
            </a>
          </div>
        </div>

        <div className="bg-green-100 rounded-3xl shadow-xl p-8">
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

            <div>
              <label className="block text-sm  font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                disabled={isSubmitting}
                className={`w-full bg-white px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
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
                  className={`w-full bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.phone ? 'border-red-500' : 'border-gray-300'
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
                  className={`w-full bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Program
                </label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  placeholder="Enter your program"
                  disabled={isSubmitting}
                  className={`bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.program && (
                  <p className="mt-1 text-sm text-red-500">{errors.program}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qualification
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="Enter your qualification"
                  disabled={isSubmitting}
                  className={`bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.qualification && (
                  <p className="mt-1 text-sm text-red-500">{errors.qualification}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  College Name
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your College Name"
                  disabled={isSubmitting}
                  className={`bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.college && (
                  <p className="mt-1 text-sm text-red-500">{errors.college}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter your year"
                  disabled={isSubmitting}
                  className={`bg-white  px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.year && (
                  <p className="mt-1 text-sm text-red-500">{errors.year}</p>
                )}
              </div>
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
                className={`w-full bg-white px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Register Now</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipRegistrationForm;
