import { motion as Motion } from 'framer-motion'
import React from 'react'
import banner from "../../assets/about/image.png"
import TextType from '../../components/ui/TextType/TypeWriter';
import WeBelieveInSection from './components/WeBeliveSection';
import FounderProfileSection from './components/FounderPage';
import { team1, team2, team3, garden, team4 } from '../../assets/teams/team.js'
import { games, land1, office1, office2 } from '../../assets/landscap/landscape.js';
import { officeimg } from '../../assets/office/office.js';
import garden1 from '../../assets/roriri/Garden.jpg'
import { saleslottie } from '../../assets/lottiefiles/lettie.js';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const solutions = [
  {
    title: "Solution made Simple",
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <section className=" italic  bg-cover bg-center " >
        <div className=" inset-0  bg-opacity-60 flex items-center mt-3 md:mt-0 justify-center ">
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
            <Motion.a
              href='#about'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r  to-blue-500
    hover:from-purple-600 // Keep this
    hover:to-blue-600 hover:bg-opacity-80 transition-opacity text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
            >
              Learn More
            </Motion.a>
          </Motion.div>
        </div>
        <WeBelieveInSection />
        <Motion.section
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="p-4 flex flex-col gap-4">
              <img
                src={garden1}
                alt="Farm view 1"
                className="rounded-lg object-cover h-64 w-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/D1D5DB/1F2937?text=Farm+View+1'; }}
              />
              <img
                src={land1}
                alt="Farm view 2"
                className="rounded-lg object-cover h-64 w-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/1F2937?text=Farm+View+2'; }}
              />
            </div>


            <div className="p-8 flex flex-col justify-center">
              <Motion.h1
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl font-normal text-green-700 mb-4"
              >
                South India's First Farm-Based IT Company
              </Motion.h1>
              <Motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-700 text-5xl font-medium mb-6"
              >
                A Harmony of Technology and Nature
              </Motion.p>
              <Motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-gray-600"
              >
                Nestled within 8 acres of lush greenery, surrounded by a thriving ecosystem of coconut trees and the scenic beauty of the Western Ghats, our company stands as a unique blend of innovation and nature.
                <br /><br />
                As South India’s first farm-based IT company, we take pride in fostering sustainable practices while driving technological excellence.
              </Motion.p>

            </div>
          </div>
        </Motion.section>
        <section className="py-5 md:py-10  px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <Motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:w-1/2"
            >
              {solutions.map((solution, index) => (
                <Motion.div key={index} variants={itemVariants} className="mb-8 p-3 rounded-lg">
                  <h2 className="text-4xl md:text-5xl font-medium  mb-6 leading-tight">
                    <p>A tale of tech brilliance and growth</p>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                </Motion.div>
              ))}
            </Motion.div>
            <Motion.div
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className=" flex justify-center lg:justify-end"
            >
              <DotLottieReact
                className=" sm:w-[400px] p-3 sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
                src={saleslottie}
                loop
                autoplay
              />

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
              src={team4}
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
              src={officeimg}
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

      <Motion.section
        className="py-16 md:py-24 bg-gray-100 rounded-lg shadow-md mx-auto my-12 max-w-screen-xl px-4"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 leading-tight rounded-lg">Our Culture</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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

          </div>
        </div>
      </Motion.section>

      <FounderProfileSection />
    </>
  )
}

export default About