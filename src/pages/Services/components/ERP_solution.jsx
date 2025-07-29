import React from 'react';
import { motion as Motion } from 'framer-motion';

// Main App Component
const ERPSolutions = () => {
    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Animation variants for cards/items
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };
    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };
      const lineVariants = {
        hidden: { height: 0 },
        visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <div className="font-inter antialiased bg-gray-50">
            {/* Hero Section */}
            <Motion.section
                className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <Motion.h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 rounded-lg"
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
                        <Motion.button
                            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center mx-auto md:mx-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Start
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </Motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                        {/* Placeholder for the ERP illustration image */}
                        <Motion.img
                            src="https://placehold.co/600x400/6D28D9/FFFFFF?text=ERP+Illustration"
                            alt="ERP Illustration"
                            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/6D28D9/FFFFFF?text=ERP+Illustration'; }}
                        />
                    </div>
                </div>
            </Motion.section>

            {/* Seamless Integration Section */}
            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 relative">
                        {/* Placeholder for the team image */}
                        <Motion.img
                            src="https://placehold.co/500x350/E0E7FF/312E81?text=Team+Working"
                            alt="Team Working"
                            className="w-full rounded-2xl shadow-xl transform -rotate-3"
                            initial={{ opacity: 0, rotate: -10, x: -50 }}
                            animate={{ opacity: 1, rotate: -3, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/E0E7FF/312E81?text=Team+Working'; }}
                        />
                        {/* Placeholder for the code snippet image */}
                        <Motion.img
                            src="https://placehold.co/300x200/B8B8F0/312E81?text=Code+Snippet"
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

            {/* How ERP Transforms Section */}
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

            {/* Why Your Business Needs ERP Section */}
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
                        {/* Centralized Control Card */}
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

                        {/* Save Time and Eliminate Errors Card */}
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

                        {/* Make Smarter Decisions Card */}
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

                        {/* Scale Seamlessly Card */}
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

                        {/* Boost Team Collaboration Card (adjusting layout for 2-column or 3-column) */}
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

            {/* What We Do in ERP Section */}
             <Motion.section
                className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">What We Do in ERP</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Our Progress</h2>

                    <div className="relative flex flex-col items-center">
                        {/* Vertical line for timeline - now animated */}
                        <Motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full z-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={lineVariants}
                        ></Motion.div>

                        {/* Timeline Items */}
                        {[
                            { title: "ERP Consulting and Strategy", description: "Analyze your operations to define the best-fit ERP strategy." },
                            { title: "Custom ERP Development", description: "Build modular, scalable systems to suit your workflows." },
                            { title: "Integration and Migration", description: "Ensure seamless data flow across existing tools and systems." },
                            { title: "Cloud and On-Premise Deployment", description: "Flexible hosting options tailored to your security and budget needs." },
                            { title: "Ongoing Support and Upgrades", description: "Keep your ERP systems updated and optimized for peak performance." }
                        ].map((item, index) => (
                            <Motion.div
                                key={index}
                                className={`flex items-center w-full my-6 md:my-8 z-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.15 + 0.5 }}
                            >
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
                                    <Motion.div
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 rounded-lg">{item.title}</h3>
                                        <p className="text-gray-700 rounded-lg">{item.description}</p>
                                    </Motion.div>
                                </div>
                                <div className="hidden md:flex w-1/12 justify-center">
                                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} md:text-right`}>
                                  
                                </div>
                            </Motion.div>
                        ))}
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
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">Contact Us</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight rounded-lg">Get in touch with us today</h2>
                        <p className="text-gray-700 text-lg mb-8 rounded-lg">
                            Reach out to explore endless possibilities with Roriri Software Solutions!
                        </p>
                        <div className="flex items-center justify-center lg:justify-start mb-8">
                            <img src="https://placehold.co/40x40/FFFFFF/000000?text=Logo" alt="Roriri Logo" className="h-10 w-10 mr-3 rounded-lg" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/40x40/FFFFFF/000000?text=Logo'; }} />
                            <span className="text-2xl font-semibold text-gray-900 rounded-lg">Roriri Software Solutions</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 rounded-lg">Follow Us:</h3>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Motion.a
                                href="#"
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
                            </Motion.a>
                            <Motion.a
                                href="#"
                                className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-700 transition duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92 0 4.204.286c-.718.286-1.228.78-1.738 1.291S.78 3.486.504 4.204C.228 4.92.132 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.156 2.132.432 2.849.286.718.78 1.228 1.291 1.738s1.011.995 1.738 1.291c.718.286 1.573.382 2.849.432C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.132-.156 2.849-.432.718-.286 1.228-.78 1.738-1.291s.995-1.011 1.291-1.738c.286-.718.382-1.573.432-2.849.06-1.277.072-1.684.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.156-2.132-.432-2.849-.286-.718-.78-1.228-1.291-1.738S20.514.78 19.797.504C19.08 0 18.225.132 16.947.072 15.667.014 15.26 0 12 0zm0 2.16c3.2 0 3.58.01 4.85.071 1.17.055 1.8.196 2.22.35.42.154.72.365.93.575.21.21.42.51.575.93.154.42.295 1.05.35 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.071 4.85c-.055 1.17-.196 1.8-.35 2.22-.154.42-.365.72-.575.93-.21.21-.51.42-.93.575-.42.154-1.05.295-2.22.35-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.071c-1.17-.055-1.8-.196-2.22-.35-.42-.154-.72-.365-.93-.575-.21-.21-.42-.51-.575-.93-.154-.42-.295-1.05-.35-2.22C2.16 15.67 2.15 15.29 2.15 12s.01-3.58.071-4.85c.055-1.17.196-1.8.35-2.22.154-.42.365-.72.575-.93.21-.21.51-.42.93-.575.42-.154 1.05-.295 2.22-.35C8.33 2.16 8.71 2.15 12 2.15zm0 3.65c-3.48 0-6.3 2.82-6.3 6.3s2.82 6.3 6.3 6.3 6.3-2.82 6.3-6.3-2.82-6.3-6.3-6.3zm0 10.3c-2.26 0-4.1-1.84-4.1-4.1s1.84-4.1 4.1-4.1 4.1 1.84 4.1 4.1-1.84 4.1-4.1 4.1zm5.5-9.3c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2z" clipRule="evenodd" /></svg>
                            </Motion.a>
                            <Motion.a
                                href="#"
                                className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-500 transition duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.611 10.27v-1.1h-2.735v1.1h2.735zM19.611 13.73v-1.1h-2.735v1.1h2.735zM19.611 17.19v-1.1h-2.735v1.1h2.735zM19.611 20.65v-1.1h-2.735v1.1h2.735zM19.611 6.81v-1.1h-2.735v1.1h2.735zM19.611 3.35v-1.1h-2.735v1.1h2.735zM16.151 10.27v-1.1h-2.735v1.1h2.735zM16.151 13.73v-1.1h-2.735v1.1h2.735zM16.151 17.19v-1.1h-2.735v1.1h2.735zM16.151 20.65v-1.1h-2.735v1.1h2.735zM16.151 6.81v-1.1h-2.735v1.1h2.735zM16.151 3.35v-1.1h-2.735v1.1h2.735zM12.691 10.27v-1.1h-2.735v1.1h2.735zM12.691 13.73v-1.1h-2.735v1.1h2.735zM12.691 17.19v-1.1h-2.735v1.1h2.735zM12.691 20.65v-1.1h-2.735v1.1h2.735zM12.691 6.81v-1.1h-2.735v1.1h2.735zM12.691 3.35v-1.1h-2.735v1.1h2.735zM9.231 10.27v-1.1h-2.735v1.1h2.735zM9.231 13.73v-1.1h-2.735v1.1h2.735zM9.231 17.19v-1.1h-2.735v1.1h2.735zM9.231 20.65v-1.1h-2.735v1.1h2.735zM9.231 6.81v-1.1h-2.735v1.1h2.735zM9.231 3.35v-1.1h-2.735v1.1h2.735zM5.771 10.27v-1.1h-2.735v1.1h2.735zM5.771 13.73v-1.1h-2.735v1.1h2.735zM5.771 17.19v-1.1h-2.735v1.1h2.735zM5.771 20.65v-1.1h-2.735v1.1h2.735zM5.771 6.81v-1.1h-2.735v1.1h2.735zM5.771 3.35v-1.1h-2.735v1.1h2.735z" /></svg>
                            </Motion.a>
                            <Motion.a
                                href="#"
                                className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.612 5.33C19.462 4.673 18.93 4.14 18.273 3.99C16.74 3.633 12 3.633 12 3.633S7.26 3.633 5.727 3.99C5.07 4.14 4.538 4.673 4.388 5.33C4.031 6.86 4.031 12 4.031 12S4.031 17.14 4.388 18.67C4.538 19.33 5.07 19.86 5.727 20.01C7.26 20.367 12 20.367 12 20.367S16.74 20.367 18.273 20.01C18.93 19.86 19.462 19.33 19.612 18.67C19.969 17.14 19.969 12 19.969 12S19.969 6.86 19.612 5.33ZM9.99 15.39V8.61L15.39 12L9.99 15.39Z" /></svg>
                            </Motion.a>
                        </div>
                    </div>
                    <Motion.div
                        className="lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-lg w-full max-w-md lg:max-w-none"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <form className="space-y-6">
                            <Motion.input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                variants={inputVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: 0.1 }}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Motion.input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                    variants={inputVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ delay: 0.2 }}
                                />
                                <Motion.input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                    variants={inputVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ delay: 0.3 }}
                                />
                            </div>
                            <Motion.input
                                type="text"
                                placeholder="Subjects"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                                variants={inputVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: 0.4 }}
                            />
                            <Motion.textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 resize-y"
                                variants={inputVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: 0.5 }}
                            ></Motion.textarea>
                            <Motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Motion.button>
                        </form>
                    </Motion.div>
                </div>
            </Motion.section>
        </div>
    );
};

export default ERPSolutions;
