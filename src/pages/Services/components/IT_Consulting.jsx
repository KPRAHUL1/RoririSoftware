import React from 'react';
import { motion as Motion } from 'framer-motion';

// Main App Component for IT Consulting Page
const IT_Consulting = () => {
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

    // Animation variants for process steps
    const processStepVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="font-inter antialiased bg-gray-50">

            <Motion.section
                className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for background image */}
                    <img src="https://placehold.co/1920x1080/1A202C/FFFFFF?text=IT+Consulting+Background" alt="IT Consulting Background" className="w-full h-full object-cover opacity-30" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/1A202C/FFFFFF?text=IT+Consulting+Background'; }} />
                </div>
                <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2 rounded-lg">IT Consulting</p>
                    <Motion.h1
                        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 rounded-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Transforming challenges into opportunities with dynamic IT consulting services
                    </Motion.h1>
                    <Motion.p
                        className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl rounded-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        At ALO Infotech, our IT consulting services offer invaluable support in navigating dynamic tech environments. Efficient IT consulting Solutions tailored to your needs. From CV Screening to onboarding, we find the right fit for your team. Streamline your hiring process with our expertise.
                    </Motion.p>
                    <Motion.button
                        className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a free consulting
                    </Motion.button>
                </div>
            </Motion.section>

            {/* IT Consulting Services We Offer Section */}
            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">IT Consulting services that we offer</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto rounded-lg">
                        Hire our skilled programmers at ALO Infotech to outsource your projects. With growing business needs, screening applicants becomes challenging. We provide committed experts to manage your business, ensuring high-quality results within deadlines. Achieve strategic goals with our technical expertise, data-driven scope, and project management skills.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card: React Developer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=React" alt="React Developer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=React'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">React Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                At ALO Infotech, we are providing the best ReactJS Developer for your IT needs. Need a React Developer? Look no further. We train to provide the best and most perfect React developer for you. With expertise tailored to your needs, our React developers ensure seamless integration and top-notch performance. Partner with ALO Infotech for skilled React developers tailored to your needs.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Angular Developer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=Angular" alt="Angular Developer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Angular'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Angular Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Flutter Developer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=Flutter" alt="Flutter Developer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Flutter'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Flutter Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: UI/UX Designer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.4 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=UI/UX" alt="UI/UX Designer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=UI/UX'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">UI/UX Designer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Node JS Developer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.5 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=NodeJS" alt="Node JS Developer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=NodeJS'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Node JS Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Data Analyst */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.6 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=Data" alt="Data Analyst" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Data'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Data Analyst</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Software Tester */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.7 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=Tester" alt="Software Tester" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Tester'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Software Tester</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>

                        {/* Service Card: Java Developer */}
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.8 }}
                        >
                            <img src="https://placehold.co/100x100/E0E7FF/312E81?text=Java" alt="Java Developer" className="absolute top-4 right-4 w-20 h-20 opacity-20 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Java'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Java Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                {/* Placeholder description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Motion.button
                                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button>
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>

            {/* Call to Action Section */}
            <Motion.section
                className="py-16 md:py-24 bg-blue-800 text-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 rounded-lg">Struggling with IT intricacies? ALO Infotech offers clarity and ease.</h2>
                        <p className="text-lg md:text-xl opacity-90 rounded-lg">
                            Connect with us to simplify your journey.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Motion.button
                            className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Talk to us
                        </Motion.button>
                    </div>
                </div>
            </Motion.section>

            {/* Our IT Consulting Process Section */}
            <Motion.section
                className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Our IT Consulting process</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto rounded-lg">
                        Our IT Consulting process at ALO Infotech involves a meticulous approach tailored to your needs. We begin by thoroughly assessing your requirements and challenges. Leveraging our expertise, we craft customized solutions to optimize your IT infrastructure. Our team, renowned for providing IT consulting services, will resource the best developers for your organization.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Process Step 1: CV Screening */}
                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={processStepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="absolute top-4 left-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-200 transition-colors duration-300">1</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-14 rounded-lg">CV Screening</h3>
                            <p className="text-gray-700 ml-14 rounded-lg">
                                During CV screening, our IT consultants assesses qualifications to match ideal candidates with your needs.
                            </p>
                        </Motion.div>

                        {/* Process Step 2: Recruitment Process */}
                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={processStepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="absolute top-4 left-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-200 transition-colors duration-300">2</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-14 rounded-lg">Recruitment Process</h3>
                            <p className="text-gray-700 ml-14 rounded-lg">
                                Our Efficient recruitment process ensures optimal candidate selection, aligning skills with company objectives.
                            </p>
                        </Motion.div>

                        {/* Process Step 3: Selection Process */}
                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={processStepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="absolute top-4 left-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-200 transition-colors duration-300">3</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-14 rounded-lg">Selection Process</h3>
                            <p className="text-gray-700 ml-14 rounded-lg">
                                Our selection process meticulously identifies top talents, ensuring a skilled workforce aligned with company values.
                            </p>
                        </Motion.div>

                        {/* Process Step 4: Onboarding */}
                        <Motion.div
                            className="bg-white p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={processStepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="absolute top-4 left-4 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-blue-200 transition-colors duration-300">4</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-14 rounded-lg">Onboarding</h3>
                            <p className="text-gray-700 ml-14 rounded-lg">
                                Our Smooth onboarding process integrates new hires seamlessly, fostering a positive and productive work environment.
                            </p>
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>

        </div>
    );
};

export default IT_Consulting;
