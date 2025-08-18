import React from 'react'
import { Handshake, Headset, HelpCircle } from 'lucide-react';
import ContactUsPage from './components/ContactUsPage';
import { motion } from 'framer-motion'
import { maillottie } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const enquiryTypes = [
    {
      icon: <Handshake size={48} strokeWidth={1.5} />,
      title: 'Partner Enquiry',
      description: 'Interested in partnering? Explore partnership possibilities with us. Lets create synergies together for mutual success.',
      buttonText: 'Get In Touch',
      buttonLink: '/contact/partner',
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-500',
    },
    {
      icon: <Headset size={48} strokeWidth={1.5} />,
      title: 'Product Support',
      description: 'Lost in the digital wilderness? Fear not! Our support wizards have GPS for your tech jungle. Get started and find your way to smooth sailing!',
      buttonText: 'Get Started',
      buttonLink: '/contact/support',
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-500',
    },
    {
      icon: <HelpCircle size={48} strokeWidth={1.5} />,
      title: 'Sales Enquiry',
      description: 'Curious about unleashing the sales magic? Lets turn questions into answers—Contact sales, let the wizardry begin!',
      buttonText: 'Contact Sales',
      buttonLink: '/contact/sales',
      iconBgColor: 'bg-purple-100',
      iconTextColor: 'text-purple-500',
    },
  ];
  const handlePage = ()=>{
    window.location.href = '#contact';
  }
  return (
    <>
      <div id="contactpage">
        <div>
          <section className="italic bg-gradient-to-br  flex items-center justify-center px-6">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-8">
              <motion.div
                className="flex-1 text-center md:text-left mt-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium drop-shadow-lg leading-tight">
                  What can we help you with?
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lgmax-w-lg">
                  Reach out to explore endless possibilities with{" "}
                  <span className="text-blue-400 font-semibold">
                    Roriri Software Solutions!
                  </span>
                </p>

                <motion.button 
                
                onClick={handlePage}
                  className="mt-6 px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-300 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
  <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* className="w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px]" */}
                <DotLottieReact
                  className="w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px]"
                  src={maillottie}
                  loop
                  autoplay
                />
              </motion.div>


            </div>
          </section>
          <div className="italic top-7/12 left-25  flex items-center justify-center  px-4 sm:px-6  font-inter">
            <div className="max-w-7xl mx-auto w-full bg-white rounded-3xl  p-8 sm:p-12 relative overflow-hidden">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {enquiryTypes.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className={`p-4 rounded-full ${item.iconBgColor} ${item.iconTextColor} mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 flex-grow">
                      {item.description}
                    </p>
                    <Link
              to={item.buttonLink}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              {item.buttonText}
            </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <ContactUsPage />
        <div className=" bg-white italic  text-gray-900 font-inter py-8 px-4 sm:px-6  flex flex-col items-center">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Lost? Don't worry, we're not <br />
              <span className="text-red-600">hiding</span>! Find us here!
            </h1>
          </div>

          <div className="flex lg:px-30  w-full rounded-lg  overflow-hidden">
            <div className="w-full  min-h-[300px] bg-white  md:min-h-[450px]  flex items-center rounded-xl justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11487.327837261768!2d77.57889418196686!3d8.522276781053657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04692c8b82209f%3A0xa00060055fec4e1!2sRORIRI%20SOFTWARE%20SOLUTIONS%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1735800795252!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ backgroundColor: 'white' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RORIRI SOFTWARE SOLUTIONS PVT. LTD. Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact