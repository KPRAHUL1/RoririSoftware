import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'; // Icons for accordion and external link
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Dummy Navigation Component (Approximated from images)



// Accordion Item Component
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

  // Data for all service sections
  const servicesData = [
    {
      id: 'branding',
      path:'/services/it-consulting',
      title: 'Branding & Graphic Works',
      description: 'We develop strategic brand identities through research-based design and cohesive visual systems.',
      imageSrc: 'izhtech.com_service (1).jpg', // Actual image from uploaded files
      accordionItems: [
        { title: 'Business Card Design', description: 'A memorable business card is a powerful networking tool. We design cards that leave a lasting impression.', initiallyOpen: true },
        { title: 'Letterhead Design', description: 'Professional letterhead design for your business correspondence, enhancing your brand\'s credibility.' },
        { title: 'Social Media Graphics', description: 'Engaging social media graphics tailored to your brand, designed to capture attention and boost engagement.' },
      ],
    },
    {
      id: 'mobile-dev',
      path:'/services/mobile-app-development',
      title: 'Mobile App Development',
      description: 'We focus on seamless mobile experiences for effective customer connection, building innovative and user-friendly applications.',
      imageSrc: 'izhtech.com_service (2).jpg', // Actual image from uploaded files
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
      imageSrc: 'https://placehold.co/600x400/D1E7DD/000000?text=Web+Development', // Placeholder image
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
      imageSrc: 'https://placehold.co/600x400/D1E7DD/000000?text=ERP+Solutions', // Placeholder image
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
      imageSrc: 'https://placehold.co/600x400/D1E7DD/000000?text=Digital+Marketing', // Placeholder image
      accordionItems: [
        { title: 'Search Engine Optimization (SEO)', description: 'Improving your website\'s visibility on search engines to attract more organic traffic.', initiallyOpen: true },
        { title: 'Social Media Marketing (SMM)', description: 'Engaging your audience and building brand awareness across various social media platforms.' },
        { title: 'Content Marketing', description: 'Creating valuable and relevant content to attract, engage, and retain a clearly defined audience.' },
        { title: 'Pay-Per-Click (PPC) Advertising', description: 'Managing effective paid advertising campaigns to generate immediate leads and sales.' },
      ],
    },
  ];

  // Framer Motion variants for scroll-triggered animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2 // Stagger children elements within the section
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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative bg-white py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center pt-28">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-40 h-40 bg-green-200 rounded-full opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-900">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Leave us a little info, and we'll be in touch.
          </p>
          <button
            onClick={() => navigate('/contact')} // Navigate to contact page
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-lg font-medium"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Dynamic Service Sections */}
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
            {/* Image and Content order alternating */}
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


      {/* Let's Collaborate Section */}
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-gray-400 uppercase mb-2">Let's Collaborate</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Send us an email.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 mb-8">
            We're a team of creatives who are excited about unique ideas and
            help digital and fin-tech companies to create amazing identity.
          </p>
          <button
            onClick={() => navigate('/contact')} // Navigate to contact page
            className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-medium"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Back to top & Follow Us (from original image, simplified) */}
      {/* These elements are typically part of a global layout or footer,
          and are removed from here to keep the service page content focused. */}
    </div>
  );
};

export default ServicesPage;
