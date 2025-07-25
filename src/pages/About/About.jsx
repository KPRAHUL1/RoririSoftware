import {motion as Motion } from 'framer-motion'
import React from 'react'
import FounderSection from '../Founder/Founderpage';
import banner from "../../assets/about/image.png"
const solutions = [
  {
    title: "Solutions made Simple",
    description: "At RoririSoft, we specialize in transforming complex challenges into elegant, user-friendly software solutions. Our expertise spans across various domains, ensuring that we deliver products that are not just functional but also intuitive and scalable. We believe in simplifying technology to empower businesses and individuals.",
  },
  // Add more solution items if applicable
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
  return (
<>
  <section className="  bg-cover bg-center" >
      <div className=" inset-0  bg-opacity-60 flex items-center justify-center ">
        <img src={banner} alt="" />
        <Motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center absolute"
        >
          <h1 className="text-3xl  md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Welcome to RoririSoft
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Innovating the future with cutting-edge software solutions.
          </p>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-roriri-purple hover:bg-opacity-80 transition-opacity text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
          >
            Learn More
          </Motion.button>
        </Motion.div>
      </div>
       <section className="py-16 md:py-24 bg-roriri-dark px-4">
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
              <h2 className="text-4xl md:text-5xl font-bold text-roriri-purple mb-6 leading-tight">
                {solution.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
          {/* Image from the right side of 'Solutions Made Simple' */}
          <img
            src="/path/to/solution-man-laptop.jpg" // Replace with actual image path
            alt="Man working on laptop"
            className="rounded-xl shadow-2xl w-full max-w-md md:max-w-lg"
          />
        </Motion.div>
      </div>
    </section>
    </section>
    <FounderSection/>
</>
  )
}

export default About