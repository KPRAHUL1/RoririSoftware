import React from 'react'
import contact from "../../assets/whatwedo/17.3dc54da2.svg"
import { Handshake, Headset, HelpCircle } from 'lucide-react';
import ContactUsPage from './components/ContactUsPage';

const Contact = () => {
     const enquiryTypes = [
    {
      icon: <Handshake size={48} strokeWidth={1.5} />,
      title: 'Partner Enquiry',
      description: 'Interested in partnering? Explore partnership possibilities with us. Lets create synergies together for mutual success.',
      buttonText: 'Get In Touch',
      buttonLink: '/contact-partner',
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-500',
    },
    {
      icon: <Headset size={48} strokeWidth={1.5} />,
      title: 'Product Support',
      description: 'Lost in the digital wilderness? Fear not! Our support wizards have GPS for your tech jungle. Get started and find your way to smooth sailing!',
      buttonText: 'Get Started',
      buttonLink: '/support',
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-500',
    },
    {
      icon: <HelpCircle size={48} strokeWidth={1.5} />,
      title: 'Sales Enquiry',
      description: 'Curious about unleashing the sales magic? Lets turn questions into answers—Contact sales, let the wizardry begin!',
      buttonText: 'Contact Sales',
      buttonLink: '/contact-sales',
      iconBgColor: 'bg-purple-100',
      iconTextColor: 'text-purple-500',
    },
  ];
  return (
  <>
  <div>
    <div className='flex flex-col '>
         <div className="relative">
  <img src={contact} alt="Contact" className="w-full  object-cover" />

  <div className="absolute xl:top-50 xl:left-30 top-5 sm:top-10  p-2  text-center ">
    <h1 className="text-lg sm:text-xl md:text-5xl font-bold text-white drop-shadow-md">
      What can we help you with?
    </h1>
    <p className="mt-4 md:text-lg text-sm  text-white/90 drop-shadow-sm">
      Reach out to explore endless possibilities with Roriri Software Solutions!
    </p>
  </div>
</div>
<div className=" top-7/12 left-25  flex items-center justify-center  px-4 sm:px-6  font-inter">
      <div className="max-w-7xl mx-auto w-full bg-white rounded-3xl  p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-6 left-8 w-3 h-3 rounded-full bg-red-300 opacity-70 blur-sm"></div>
        <div className="absolute top-10 left-12 w-2 h-2 rounded-full bg-red-400 opacity-80 blur-sm"></div>

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
              <a
                href={item.buttonLink}
                className="inline-block bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
       
    </div>
<ContactUsPage/>
       
  </div>
   <div className=" bg-white  text-gray-900 font-inter py-8 px-4 sm:px-6  flex flex-col items-center">
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
          style={{  backgroundColor:'white' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RORIRI SOFTWARE SOLUTIONS PVT. LTD. Location"
        ></iframe>
      </div>
    </div>
    </div>
    
  </>
  )
}

export default Contact