import React from 'react';
import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { erp1, erp2, erp3 } from '../../../assets/services/service';
import { facebook, instagram, linkedin, youtube } from '../../../assets/icons/icon';
import LogoWeb from '../../../assets/logo/LogoWeb.png';
import { MailCheck, CircleUserRound, MapPin, Loader2, Send } from "lucide-react";

const ERPSolutions = () => {
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
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <div className="font-inter italic  antialiased bg-gray-50">
            {/* Hero Section */}
            <Motion.section
                className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
                    <div className="md:w-1/2   mb-10 md:mb-0">
                        <Motion.h1
                            className="text-4xl md:text-6xl font-medium leading-tight mb-4 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            ERP Solutions
                        </Motion.h1>
                        <Motion.p
                            className="text-lg md:text-xl mb-8 opacity-90 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Running a business involves managing a lot – finance, inventory, HR, sales, and more. That's where our Enterprise Resource Planning (ERP) solutions come in. We simplify the chaos by bringing everything into one system, so you can focus on growing your business.
                        </Motion.p>
                        <Motion.a
                            className=" bg-gradient-to-r  from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={'#contact'}
                        >
                            Get Start
                            {/* <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg> */}
                        </Motion.a>

                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                        <Motion.img
                            src={erp1}
                            alt="ERP Illustration"
                            className="w-full max-w-md md:max-w-lg rounded-xl "
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/6D28D9/FFFFFF?text=ERP+Illustration'; }}
                        />
                    </div>
                </div>
            </Motion.section>

            <Motion.section id='start'
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 relative">
                        <Motion.img
                            src={erp2}
                            alt="Team Working"
                            className="w-full rounded-2xl shadow-xl transform -rotate-3"
                            initial={{ opacity: 0, rotate: -10, x: -50 }}
                            animate={{ opacity: 1, rotate: -3, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/E0E7FF/312E81?text=Team+Working'; }}
                        />
                        <Motion.img
                            src={erp3}
                            alt="Code Snippet"
                            className="absolute bottom-0 right-0 w-2/3 md:w-1/2 rounded-2xl shadow-2xl transform rotate-6 -translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"
                            initial={{ opacity: 0, rotate: 10, x: 50 }}
                            animate={{ opacity: 1, rotate: 6, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/B8B8F0/312E81?text=Code+Snippet'; }}
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">Enterprise Resource Planning (ERP) Solutions</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight rounded-lg">Empower Your Business with Seamless Integration</h2>
                        <p className="text-gray-700 text-lg mb-8 rounded-lg">
                            Our ERP solutions are built to unify your processes, minimize complexity, and enable smarter, faster decision-making – tailored to your industry needs.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Reaching out to world with low cost",
                                "Easy Management",
                                "Customization",
                                "Better access to critical information",
                                "Reducing Time",
                                "Built for Growth"
                            ].map((item, index) => (
                                <Motion.div
                                    key={index}
                                    className="flex items-start rounded-lg"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <p className="text-gray-800 font-medium rounded-lg">{item}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Motion.section>

            <Motion.section
                className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">How ERP Transforms</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Your Business Solutions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="flex justify-center mb-4">
                                <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">30% Faster Decision-Making</h3>
                            <p className="text-gray-700 rounded-lg">Real-time data integration across all departments.</p>
                        </Motion.div>

                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex justify-center mb-4">
                                <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">50% Reduction In Manual Errors</h3>
                            <p className="text-gray-700 rounded-lg">Automation of repetitive, error-prone tasks.</p>
                        </Motion.div>

                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex justify-center mb-4">
                                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.54-.33 1.154-.54 1.8-.643z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">2x Operational Efficiency</h3>
                            <p className="text-gray-700 rounded-lg">Streamlined workflows and optimized resources.</p>
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>

            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">Streamline. Optimize. Scale.</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Why Your Business Needs ERP</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto rounded-lg">
                        In today's competitive landscape, managing multiple business functions with precision is vital for growth. Our ERP solutions are designed to unify processes, enhance productivity, and deliver real-time insights, enabling your organization to stay ahead.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <Motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="absolute top-4 right-4 text-6xl font-extrabold text-gray-200 opacity-75 group-hover:text-purple-200 transition-colors duration-300">01</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Centralized Control</h3>
                            <p className="text-gray-700 rounded-lg">
                                Manage all your operations – finance, inventory, HR, and more – from a single, integrated platform. No more juggling multiple tools or silos; ERP puts everything in one place for complete oversight.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="absolute top-4 right-4 text-6xl font-extrabold text-gray-200 opacity-75 group-hover:text-indigo-200 transition-colors duration-300">02</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Save Time and Eliminate Errors</h3>
                            <p className="text-gray-700 rounded-lg">
                                Automate repetitive processes, reduce manual entry, and eliminate costly errors. Free up your team to focus on strategic growth while ensuring operational accuracy.
                            </p>
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="absolute top-4 right-4 text-6xl font-extrabold text-gray-200 opacity-75 group-hover:text-green-200 transition-colors duration-300">03</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Make Smarter Decisions with Real-Time Insights</h3>
                            <p className="text-gray-700 rounded-lg">
                                Gain instant access to actionable data and analytics. Monitor performance, track KPIs, and make informed decisions to drive your business forward.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="absolute top-4 right-4 text-6xl font-extrabold text-gray-200 opacity-75 group-hover:text-orange-200 transition-colors duration-300">04</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Scale Seamlessly as You Grow</h3>
                            <p className="text-gray-700 rounded-lg">
                                Whether you're a startup or scaling into an enterprise, ERP solutions adapt to your changing needs. Add functionalities and users effortlessly without disrupting your operations.
                            </p>
                        </Motion.div>

                        <Motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group col-span-1 md:col-span-1 lg:col-span-1"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="absolute top-4 right-4 text-6xl font-extrabold text-gray-200 opacity-75 group-hover:text-blue-200 transition-colors duration-300">05</span>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Boost Team Collaboration</h3>
                            <p className="text-gray-700 rounded-lg">
                                Unify your team with tools that keep everyone connected and informed. From project management to task tracking, ERP fosters seamless communication and efficient collaboration.
                            </p>
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>
          <Motion.section
  className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={sectionVariants}
>
  <div className="container mx-auto text-center">
    <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">
      What We Do in ERP
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
      Our Progress
    </h2>

    <div className="relative flex flex-col items-center">
      {/* Vertical line */}
      <Motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={lineVariants}
      />

      {[
        { title: "ERP Consulting and Strategy", description: "Analyze your operations to define the best-fit ERP strategy." },
        { title: "Custom ERP Development", description: "Build modular, scalable systems to suit your workflows." },
        { title: "Integration and Migration", description: "Ensure seamless data flow across existing tools and systems." },
        { title: "Cloud and On-Premise Deployment", description: "Flexible hosting options tailored to your security and budget needs." },
        { title: "Ongoing Support and Upgrades", description: "Keep your ERP systems updated and optimized for peak performance." }
      ].map((item, index) => (
        <Motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center w-full my-6 md:my-8 z-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          {/* Content box */}
          <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} text-center md:text-left`}>
            <Motion.div
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </Motion.div>
          </div>

          {/* Middle icon */}
          <div className="flex md:w-1/12 justify-center my-4 md:my-0">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Empty space for alignment (desktop only) */}
          <div className={`hidden md:block w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`} />
        </Motion.div>
      ))}
    </div>
  </div>
</Motion.section>
            <Motion.section id="contact"
                className="py-16 md:py-24 bg-gray-50 rounded-lg mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between" id='contact'>
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">Contact Us</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight rounded-lg">Get in touch with us today</h2>
                        <p className="text-gray-700 text-lg mb-8 rounded-lg">
                            Reach out to explore endless possibilities with Roriri Software Solutions!
                        </p>
                        <div className="flex items-center justify-center lg:justify-start mb-8">
                            <img src={LogoWeb} alt="Roriri Logo" className="h-15 w-40 mr-3 rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/FFFFFF/000000?text=Logo'; }} />

                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 rounded-lg">Follow Us:</h3>
                        <Motion.div className="flex justify-center lg:justify-start space-x-4">
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
                        </Motion.div>
                    </div>
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
                                    placeholder="Enter your subject"
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
                                className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
            </Motion.section>
        </div>
    );
};

export default ERPSolutions;
