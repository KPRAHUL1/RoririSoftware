import React from 'react';
import { motion as Motion } from 'framer-motion';
import { java1, dataanalyt1, testing1, node1, ui1, flutter1, angular1, react1,itcon } from '../../../assets/services/service';
import ServicesContact from './ServicesContact';
import { useNavigate } from 'react-router-dom';

const IT_Consulting = () => {

    const navigate=useNavigate();
    const gocontact = () =>
    {
        navigate("/contact")
    }
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };
    const processStepVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="font-inter antialiased bg-gray-50 italic ">

            <Motion.section
                className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="absolute inset-0 z-0">
                    <img src={itcon} alt="IT Consulting Background" className="w-full h-full object-cover opacity-30" onError={(e) => { e.target.onerror = null; e.target.src = {itcon}; }} />
                </div>
                <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2 rounded-lg">IT Consulting</p>
                    <Motion.h1
                        className="text-4xl md:text-6xl font-medium leading-tight mb-6 rounded-lg"
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
                        At Roriri Software Solutions, our IT consulting services offer invaluable support in navigating dynamic tech environments. Efficient IT consulting Solutions tailored to your needs.
                    </Motion.p>
                    <Motion.button onClick={() => window.scrollTo({ top: document.getElementById('servicescontact').offsetTop, behavior: 'smooth' })}
                        className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book a free consulting
                    </Motion.button>
                </div>
            </Motion.section>
            <Motion.section
                className="py-16 md:py-24 bg-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">IT Consulting services that we offer</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto rounded-lg">
                        Hire our skilled programmers at Roriri Software Solutions to outsource your projects. With growing business needs, screening applicants becomes challenging.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <img src={react1} alt="React Developer" className=" rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=React'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">React Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                At Roriri Software Solutions, we are providing the best ReactJS Developer for your IT needs. Need a React Developer? Look no further. We train to provide the best and most perfect React developer for you.
                            </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quot
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src={angular1} alt="Angular Developer" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Angular'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Angular Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                Transform your business with Roriri Software Solutions' expert Angular developers. Our skilled professionals create dynamic, scalable web applications using Angular's powerful framework.    </p>
                            {/* <Motion.button
                                className=" cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src={flutter1} alt="Flutter Developer" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Flutter'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Flutter Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                Roriri Software Solutions brings you cutting-edge mobile app development with our expert Flutter developers. Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.           </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.4 }}
                        >
                            <img src={ui1} alt="UI/UX Designer" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=UI/UX'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">UI/UX Designer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                At Roriri Software Solutions, our creative UI/UX designers craft exceptional digital experiences that captivate users and drive engagement. We combine aesthetic excellence with user-centered design principles to create intuitive interfaces. 
                             </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.5 }}
                        >
                            <img src={node1} alt="Node JS Developer" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55 " onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=NodeJS'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Node JS Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                Roriri Software Solutions offers expert Node.js developers who build scalable, high-performance server-side applications. Our Node.js specialists leverage JavaScript's power to create efficient APIs, real-time applications, and microservices architectures.         </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.6 }}
                        >
                            <img src={dataanalyt1} alt="Data Analyst" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Data'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Data Analyst</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                                Unlock the power of your data with Roriri Software Solutions' expert data analysts. Our professionals transform raw data into actionable insights that drive strategic business decisions. Using advanced analytics tools and statistical methods. 
                            </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.7 }}
                        >
                            <img src={testing1} alt="Software Tester" className="rounded-2xl absolute top-4 right-4 w-15 h-15 opacity-55" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Tester'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Software Tester</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">
                         Ensure flawless software quality with Roriri Software Solutions' dedicated testing professionals. Our experienced software testers employ comprehensive testing methodologies including manual, automated, and performance testing to identify and eliminate bugs before deployment. 
                         </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>


                        <Motion.div
                            className="bg-gray-100 p-8 rounded-xl shadow-lg text-left relative overflow-hidden group border border-gray-200"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.8 }}
                        >
                            <img src={java1} alt="Java Developer" className="rounded-2xl absolute top-4 right-4 w-15 h-15  opacity-55 " onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E7FF/312E81?text=Java'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 rounded-lg">Java Developer</h3>
                            <p className="text-gray-700 mb-6 rounded-lg">

                             Roriri Software Solutions provides enterprise-grade Java development services with our seasoned Java developers. Our experts build robust, scalable applications using Java's powerful ecosystem, including Spring Framework, microservices architecture, and cloud-native solutions.
                             </p>
                            {/* <Motion.button
                                className="cursor-pointer inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold hover:text-blue-800 transition duration-300"
                                whileHover={{ x: 5 }}
                            >
                                Get Quote
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Motion.button> */}
                        </Motion.div>
                    </div>
                </div>
            </Motion.section>

            <Motion.section
                className="py-16 md:py-24 bg-blue-800 text-white rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly text-center md:text-left">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-4 rounded-lg">Struggling with IT intricacies? Roriri Software Solutions offers clarity and ease.</h2>
                        <p className="text-lg md:text-xl opacity-90 rounded-lg">
                            Connect with us to simplify your journey.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Motion.button onClick={gocontact}
                            className="cursor-pointer bg-white text-blue-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Talk to us
                        </Motion.button>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight rounded-lg">Our IT Consulting process</h2>
                    <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto rounded-lg">
                        Our IT Consulting process at Roriri Software Solutions involves a meticulous approach tailored to your needs.
                        We begin by thoroughly assessing your requirements and challenges. 
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
            <ServicesContact/>

        </div>
    );
};

export default IT_Consulting;
