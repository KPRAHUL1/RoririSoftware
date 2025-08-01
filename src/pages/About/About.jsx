import {motion as Motion } from 'framer-motion'
import React from 'react'
import banner from "../../assets/about/image.png"
import TextType from '../../components/ui/TextType/TypeWriter';
import WeBelieveInSection from './components/WeBeliveSection';
import FounderProfileSection from './components/FounderPage';
import {team1,team2,team3,garden} from '../../assets/teams/team.js'
import { office1,office2 } from '../../assets/landscap/landscape.js';
const solutions = [
  {
    title: "Solutions made Simple",
    description: "At RoririSoft, we specialize in transforming complex challenges into elegant, user-friendly software solutions. Our expertise spans across various domains, ensuring that we deliver products that are not just functional but also intuitive and scalable. We believe in simplifying technology to empower businesses and individuals.",
  },
];
const About = () => {
      const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
      const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Animation variants for cards/items
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

  return (
<>
  <section className="  bg-cover bg-center " >
      <div className=" inset-0  bg-opacity-60 flex items-center justify-center ">
        <img src={banner} alt="" />
        <Motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center absolute"
        >
          <h1 className="text-3xl  md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4">
            About RoririSoft
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 hidden md:block">
           In a world of constant evolution, Roriri Soft is your steadfast partner, guiding you through tech transformations 
          </p>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r  to-blue-500
    hover:from-purple-600 // Keep this
    hover:to-blue-600 hover:bg-opacity-80 transition-opacity text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
          >
            Learn More
          </Motion.button>
        </Motion.div>
      </div>
      <WeBelieveInSection/>
       <section className="py-5 md:py-10 bg-roriri-dark px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2"
        >
          {solutions.map((solution, index) => (
            <Motion.div key={index} variants={itemVariants} className="mb-8 p-6 rounded-lg">
              <h2 className="text-4xl md:text-5xl font-medium  mb-6 leading-tight">
               <TextType  text={[solution.title,'A tale of tech bri lliance and growth']}/>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                {solution.description}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
        <Motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
         <iframe src="https://lottie.host/embed/668d66da-99b3-4368-8748-64b9f2ee3960/XHC896Aftd.lottie"  className="h-full  w-full lg:h-[600px]"></iframe>
        </Motion.div>
      </div>
    </section>
    </section>
     <Motion.section
                className="relative bg-white py-16 md:py-24 overflow-hidden rounded-b-lg shadow-lg"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-screen-xl">
                    <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-4 rounded-lg">We are</p>
                    <Motion.h1
                        className="text-4xl md:text-6xl font-medium leading-tight mb-8 text-gray-900 rounded-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        A team balanced, fuels in creativity and drives unstoppable success
                    </Motion.h1>

                    {/* Images from the "We are" section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <Motion.img
                            src={team1}
                            alt="Team Collaboration"
                            className="w-full rounded-xl shadow-lg object-cover h-64 md:h-80"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                           
                        />
                        <Motion.img
                            src="https://placehold.co/600x400/B8B8F0/312E81?text=Team+Image+2"
                            alt="Team Meeting"
                            className="w-full rounded-xl shadow-lg object-cover h-64 md:h-80"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/B8B8F0/312E81?text=Team+Image+2'; }}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
                        <Motion.img
                            src={office1}
                            alt="Office Life 1"
                            className="w-full rounded-xl shadow-lg object-cover h-64"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E7FF/312E81?text=Office+Life+1'; }}
                        />
                        <Motion.img
                            src={office2}
                            alt="Office Life 2"
                            className="w-full rounded-xl shadow-lg object-cover h-64"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/B8B8F0/312E81?text=Office+Life+2'; }}
                        />
                        <Motion.img
                            src="https://placehold.co/400x300/E0E7FF/312E81?text=Office+Life+3"
                            alt="Office Life 3"
                            className="w-full rounded-xl shadow-lg object-cover h-64"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E7FF/312E81?text=Office+Life+3'; }}
                        />
                    </div>
                </div>
            </Motion.section>

            {/* Our Culture Section */}
            <Motion.section
                className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 leading-tight rounded-lg">Our Culture</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Work life Balance Card */}
                        <Motion.div
                            className="bg-white p-6 rounded-xl shadow-lg text-left"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1 }}
                        >
                            <img src={team2} alt="Work life Balance" className="w-full h-48 object-cover rounded-lg mb-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E7FF/312E81?text=Work+Life+Balance'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Work life Balance</h3>
                        </Motion.div>

                        {/* Placeholder Card 1 */}
                        <Motion.div
                            className="bg-white p-6 rounded-xl shadow-lg text-left"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2 }}
                        >
                            <img src={team3} alt="Culture Image 1" className="w-full h-48 object-cover rounded-lg mb-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/B8B8F0/312E81?text=Culture+Image+1'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Team Activities</h3>
                        </Motion.div>

                        {/* Placeholder Card 2 */}
                        <Motion.div
                            className="bg-white p-6 rounded-xl shadow-lg text-left"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src={garden} alt="Culture Image 2" className="w-full h-48 object-cover rounded-lg mb-4" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E7FF/312E81?text=Culture+Image+2'; }} />
                            <h3 className="text-xl font-semibold text-gray-900 rounded-lg">Relaxation Zones</h3>
                        </Motion.div>

                        {/* Life at #roriri section */}
                        <div className="lg:col-span-3 flex flex-col items-center justify-center py-8">
                            <h3 className="text-3xl font-medium text-gray-900 mb-8 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Life at #roriri</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                <Motion.img
                                    src="https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+1"
                                    alt="Life at Roriri 1"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.1 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+1'; }}
                                />
                                <Motion.img
                                    src="https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+2"
                                    alt="Life at Roriri 2"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.2 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+2'; }}
                                />
                                <Motion.img
                                    src="https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+3"
                                    alt="Life at Roriri 3"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.3 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+3'; }}
                                />
                                <Motion.img
                                    src="https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+4"
                                    alt="Life at Roriri 4"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.4 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+4'; }}
                                />
                                <Motion.img
                                    src="https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+5"
                                    alt="Life at Roriri 5"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.5 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/B8B8F0/312E81?text=Life+at+Roriri+5'; }}
                                />
                                <Motion.img
                                    src="https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+6"
                                    alt="Life at Roriri 6"
                                    className="w-full rounded-xl shadow-lg object-cover h-64"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: 0.6 }}
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/E0E7FF/312E81?text=Life+at+Roriri+6'; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Motion.section>

    <FounderProfileSection/>
</>
  )
}

export default About