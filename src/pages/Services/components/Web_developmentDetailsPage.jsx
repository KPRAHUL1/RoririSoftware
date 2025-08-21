import React from 'react';
import { motion as Motion} from 'framer-motion';
import { development1 } from '../../../assets/services/service';
import { development2 } from '../../../assets/services/service';
import { development3 } from '../../../assets/services/service';
import { development4 } from '../../../assets/services/service';
import { static1 } from '../../../assets/services/service';
import { dynamic2 } from '../../../assets/services/service';
import { ec1 } from '../../../assets/services/service';
import { multi1 } from '../../../assets/services/service';
import ServicesContact from './ServicesContact';


const WebDevelopment = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const processLineVariants = {
        hidden: { height: 0 },
        visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <div className="font-inter antialiased bg-gray-50">

            <Motion.section
                className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-screen-xl relative z-10">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <Motion.h1
                            className="text-4xl md:text-6xl font-medium leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Web Applications
                        </Motion.h1>
                        <Motion.p
                            className="text-md md:text-lg mb-8 opacity-90 rounded-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            At Roriri Software Solutions, we redefine the standards of website development. 
                            As trendsetters and game changers in the industry, we specialize in crafting innovative and 
                            customized websites tailored to meet your business needs.
                            
                        </Motion.p>
                        <Motion.button
                            onClick={() => window.scrollTo({ top: document.getElementById('servicescontact').offsetTop, behavior: 'smooth' })}
                            className="cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center mx-auto md:mx-0"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </Motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                        <Motion.img
                            src={development1}
                            alt="Website Mockup 1"
                            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"
                            initial={{ opacity: 0, x: 50, rotate: 10 }}
                            animate={{ opacity: 1, x: 0, rotate: 3 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x350/E0E7FF/312E81?text=Website+Mockup+1'; }}
                        />
                        <Motion.img
                            src={development4}
                            alt="Website Mockup 2"
                            className="absolute bottom-0 left-0 w-2/3 md:w-1/2 rounded-xl shadow-2xl transform -rotate-6 hover:rotate-0 transition duration-500 translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8"
                            initial={{ opacity: 0, x: -50, rotate: -10 }}
                            animate={{ opacity: 1, x: 0, rotate: -6 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x280/B8B8F0/312E81?text=Website+Mockup+2'; }}
                        />
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
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 relative">
                        <Motion.img
                            src={development3}
                            alt="Web Development Service"
                            className="w-full rounded-2xl shadow-xl transform rotate-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/500x300/E0E7FF/312E81?text=Web+Dev+Image+1'; }}
                        />
                        <Motion.img
                            src={development2}
                            alt="Web Development Service Detail"
                            className="absolute bottom-0 right-0 w-2/3 md:w-1/2 rounded-2xl shadow-2xl transform -rotate-3 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/B8B8F0/312E81?text=Web+Dev+Image+2'; }}
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2 rounded-lg">Trendsetter And Game Changer</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight rounded-lg">Roriri Website Development Services</h2>
                        <p className="text-gray-700 text-lg mb-8 rounded-lg">
                            Transform your online presence with Roriri's website development services - where innovation meets excellence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Scalable Solutions",
                                "Advanced Security",
                                "Speed-Optimized Design",
                                "Seamless Integrations",
                                "Accessibility Focused",
                                "Data-Driven Insights"
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
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Our Web Development Services</h2>

                    <Motion.div
                        className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 bg-white p-8 rounded-xl shadow-lg"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 rounded-lg">Static and Informational Websites</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 justify-center md:justify-start">
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Informational Websites</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Portfolio Websites</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Nonprofit Websites</span>
                            </div>
                            <p className="text-gray-700 text-lg rounded-lg">
                                These websites focus on delivering static content that provides essential information about businesses, individuals, or organizations. They are straightforward, lightweight, and ideal for creating a professional or informative online presence without frequent updates.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <Motion.img
                                src={static1}
                                alt="Static Website Example"
                                className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.2 }}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E0E7FF/312E81?text=Static+Website'; }}
                            />
                        </div>
                    </Motion.div>
                    <Motion.div
                        className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-24 bg-white p-8 rounded-xl shadow-lg"
                        variants={sectionVariants}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pl-12">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 rounded-lg">Dynamic and Content-Driven Websites</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 justify-center md:justify-start">
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Blogging</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Social Networking</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>News & Media</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Educational</span>
                            </div>
                            <p className="text-gray-700 text-lg rounded-lg">
                                Dynamic websites are designed to update content in real-time or based on user interactions. They include features like blogs, social connections, multimedia content, and learning resources. These websites prioritize user engagement and regular updates.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-start">
                            <Motion.img
                                src={dynamic2}
                                alt="Dynamic Website Example"
                                className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.2 }}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E0E7FF/312E81?text=Dynamic+Website'; }}
                            />
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 bg-white p-8 rounded-xl shadow-lg"
                        variants={sectionVariants}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 rounded-lg">E-Commerce and Interactive Websites</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 justify-center md:justify-start">
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>E-Commerce Websites</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Web Applications</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Membership Websites</span>
                            </div>
                            <p className="text-gray-700 text-lg rounded-lg">
                                These websites enable online transactions, provide interactive tools, or offer exclusive access to members. They are built to manage user data, integrate payment systems, and handle dynamic content for seamless interaction and commerce.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <Motion.img
                                src={ec1}
                                alt="E-Commerce Website Example"
                                className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.2 }}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E0E7FF/312E81?text=Ecommerce+Website'; }}
                            />
                        </div>
                    </Motion.div>

                    <Motion.div
                        className="flex flex-col md:flex-row-reverse items-center justify-between bg-white p-8 rounded-xl shadow-lg"
                        variants={sectionVariants}
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pl-12">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 rounded-lg">Multimedia & Campaign-Focused Websites</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 justify-center md:justify-start">
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Entertainment Websites</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Landing Pages</span>
                                <span className="flex items-center text-gray-700 font-medium rounded-lg"><svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>Marketing Campaign Websites</span>
                            </div>
                            <p className="text-gray-700 text-lg rounded-lg">
                                Focused on specific purposes like entertainment, proMotions, or marketing campaigns, these websites use multimedia elements, clear calls-to-action, and interactive features to captivate users and achieve specific goals.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-start">
                            <Motion.img
                                src={multi1}
                                alt="Multimedia Website Example"
                                className="w-full max-w-md rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.2 }}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E0E7FF/312E81?text=Multimedia+Website'; }}
                            />
                        </div>
                    </Motion.div>
                </div>
            </Motion.section>
          <Motion.section
    className="py-16 md:py-24 bg-white text-black rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={sectionVariants}
>
    <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our Process
        </h2>

        <div className="relative flex flex-col items-center">
            
            <Motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full z-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={processLineVariants}
            ></Motion.div>

            {[
                { title: "Strategy", description: "At Roriri Software Solutions, we understand your goals, plan strategically, and ensure successful project execution." },
                { title: "Design", description: "Roriri Software Solutions designs intuitive, visually appealing websites ensuring seamless experiences aligned with your brand." },
                { title: "Development", description: "This stage transforms designs into functional websites, enhancing user experience and ensuring seamless functionality and performance." },
                { title: "Testing", description: "After development, testing ensures bug fixes, smooth usability, and compatibility across platforms and screen sizes." },
                { title: "Deployment", description: "After testing and approval, the website is deployed live, becoming accessible for users to explore." },
                { title: "Maintenance", description: "After launch, ongoing maintenance ensures issue resolution, updates, and enhanced functionality for optimal performance." }
            ].map((item, index) => (
                <Motion.div
                    key={index}
                    className={`flex flex-col md:flex-row items-center w-full my-6 md:my-8 z-10 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                >
                    
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left`}>
                        <Motion.div
                            className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
                        </Motion.div>
                    </div>
                    <div className="hidden md:flex w-1/12 justify-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
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
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Why Choose Roriri as Your Website Partner</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto rounded-lg">
                        We are committed to delivering innovative solutions.
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
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Innovative Solutions</h3>
                            <p className="text-gray-700 rounded-lg">
                                We leverage the latest tools and technologies to create websites that stand out and keep you ahead of the competition.
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
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Customized Design</h3>
                            <p className="text-gray-700 rounded-lg">
                                Every business is unique, and so is every website we build. We ensure your website reflects your brand's identity and values.
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
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">User-Centric Approach</h3>
                            <p className="text-gray-700 rounded-lg">
                                Our designs focus on delivering seamless user experiences, ensuring your customers stay engaged and satisfied.
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
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">Responsive and Scalable</h3>
                            <p className="text-gray-700 rounded-lg">
                                We build websites that work perfectly across all devices and are scalable for your future growth.
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
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 pr-12 rounded-lg">SEO-Optimized</h3>
                            <p className="text-gray-700 rounded-lg">
                                Our websites are designed with SEO best practices to improve visibility and attract more traffic.
                            </p>
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>
          <ServicesContact/>
            
        </div>
    );
};

export default WebDevelopment;
