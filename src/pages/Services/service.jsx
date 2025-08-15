import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 
import { team1 } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { brand, development1, erp1, intern, mobile } from '../../assets/services/service';



const ServiceAccordionItem = ({ title, description, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <ExternalLink size={20} className="mr-2 text-gray-500" />
          {title}
        </span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 pl-7">
          {description}
        </p>
      )}
    </div>
  );
};


const ServicesPage = () => {
  const navigate = useNavigate();
  const servicesData = [
    
    {
      id: 'mobile-dev',
      path:'/services/mobile-app-development',
      title: 'Mobile App Development',
      description: 'We focus on seamless mobile experiences for effective customer connection, building innovative and user-friendly applications.',
      imageSrc: mobile, 
      accordionItems: [
        { title: 'UI/UX Design', description: 'Crafting intuitive and engaging user interfaces and experiences for mobile applications.', initiallyOpen: true },
        { title: 'iOS App Development', description: 'Building high-performance and feature-rich applications for Apple\'s iOS ecosystem.' },
        { title: 'Android App Development', description: 'Developing robust and scalable Android applications for a wide range of devices.' },
        { title: 'Cross-Platform Development', description: 'Efficiently building apps that run seamlessly on multiple platforms (iOS, Android) using frameworks like React Native or Flutter.' },
      ],
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      path:'/services/web-app-development',
      description: 'Crafting responsive, high-performance, and secure web applications tailored to your business needs.',
      imageSrc: development1, 
      accordionItems: [
        { title: 'Frontend Development', description: 'Building engaging and interactive user interfaces using modern frameworks like React, Angular, and Vue.js.', initiallyOpen: true },
        { title: 'Backend Development', description: 'Developing robust and scalable server-side logic and APIs with Node.js, Python, Java, and more.' },
        { title: 'Full-Stack Development', description: 'Comprehensive development covering both frontend and backend for end-to-end solutions.' },
        { title: 'E-commerce Solutions', description: 'Creating powerful online stores and e-commerce platforms to boost your sales.' },
      ],
    },
    {
      id: 'erp-solutions',
      title: 'ERP Solutions',
      path:'/services/erp-solutions',
      description: 'Streamlining your business operations with custom Enterprise Resource Planning (ERP) systems for enhanced efficiency and productivity.',
      imageSrc: erp1,
      accordionItems: [
        { title: 'Custom ERP Development', description: 'Tailored ERP solutions designed to fit your specific business processes and requirements.', initiallyOpen: true },
        { title: 'ERP Integration Services', description: 'Seamless integration of ERP systems with existing software and third-party applications.' },
        { title: 'ERP Consulting', description: 'Expert guidance and support for choosing, implementing, and optimizing your ERP system.' },
      ],
    },
    {
      id: 'internship',
      title: 'InternShip',
      path:'/services/internship',
      description: 'Boosting your online presence and driving growth with data-driven digital marketing strategies.',
      imageSrc: intern, 
      accordionItems: [
        { title: 'Search Engine Optimization (SEO)', description: 'Improving your website\'s visibility on search engines to attract more organic traffic.', initiallyOpen: true },
        { title: 'Social Media Marketing (SMM)', description: 'Engaging your audience and building brand awareness across various social media platforms.' },
        { title: 'Content Marketing', description: 'Creating valuable and relevant content to attract, engage, and retain a clearly defined audience.' },
        { title: 'Pay-Per-Click (PPC) Advertising', description: 'Managing effective paid advertising campaigns to generate immediate leads and sales.' },
      ],
    },
    {
      id: 'branding',
      path:'/services/it-consulting',
      title: 'Branding & Graphic Works',
      description: 'We develop strategic brand identities through research-based design and cohesive visual systems.',
      imageSrc: brand, 
      accordionItems: [
        { title: 'Business Card Design', description: 'A memorable business card is a powerful networking tool. We design cards that leave a lasting impression.', initiallyOpen: true },
        { title: 'Letterhead Design', description: 'Professional letterhead design for your business correspondence, enhancing your brand\'s credibility.' },
        { title: 'Social Media Graphics', description: 'Engaging social media graphics tailored to your brand, designed to capture attention and boost engagement.' },
      ],
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };


  return (
    <div className="min-h-screen italic  bg-white text-gray-800">
     
<section className="bg-white py-12 sm:py-16 lg:py-20">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
        <div>

      
      <div className="flex flex-col gap-5 mb-3 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-900 leading-tight max-w-2xl">
          Our Services
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
          Leave us a little info, and we'll be in touch.
        </p>
        
       
      </div>
       <button
          onClick={() => navigate('/contact')}
          className="inline-block bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-4 sm:px-6 py-3 sm:py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Contact Us
        </button>
      </div>
        <DotLottieReact
          className=" sm:w-80 sm:h-60 lg:w-96 lg:h-64 xl:w-[28rem] xl:h-80"
          src={team1}
          loop
          autoplay
        />
    
   
    </div>
</section>

      {servicesData.map((service, index) => (
        <motion.section
          key={service.id}
          className={`py-16 px-4 sm:px-6 lg:px-8 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
            <motion.div className={`flex justify-center ${index % 2 === 0 ? '' : 'order-1 lg:order-2'}`} variants={imageVariants}>
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full max-w-lg h-auto rounded-lg shadow-xl"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Unavailable"; }}
              />
            </motion.div>

            <motion.div className={`p-4 ${index % 2 === 0 ? '' : 'order-2 lg:order-1'}`} variants={itemVariants}>
              <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Our Services</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.accordionItems.map((item, itemIndex) => (
                  <ServiceAccordionItem
                    key={itemIndex}
                    title={item.title}
                    description={item.description}
                    initiallyOpen={item.initiallyOpen}
                  />
                ))}
              </div>
              <button onClick={()=>navigate(service.path)} className="mt-8 bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition duration-300 text-base font-medium">
                Know more
              </button>
            </motion.div>
          </div>
        </motion.section>
      ))}


      
      <section className="bg-gray-900 italic  text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Let's Collaborate</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Send us an email.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 mb-8">
            We're a team of creatives who are excited about unique ideas and
            help digital and fin-tech companies to create amazing identity.
          </p>
          <button
            onClick={() => navigate('/contact')} 
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-medium"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
