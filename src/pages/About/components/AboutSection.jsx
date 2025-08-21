
import React from 'react';
import { motion as Motion } from 'framer-motion';
import './About.css'
import { Send } from 'lucide-react';
const cardData = [
  {
    id: 1, 
    number: '01',
    title: 'Over 7+ Years of',
    subtitle: 'Driving Innovation Excellence',
    description: 'Pioneering transformative solutions for over 7 years, delivering innovation, quality, and success across industries with cutting-edge technology expertise.',
  },
  {
    id: 2, 
    number: '02',
    title: '80+ Clients',
    subtitle: 'Trusting Us',
    description: 'Our diverse client base spans across industries, each benefiting from our innovative solutions and dedication to success.',
  },
  {
    id: 3, 
    number: '03',
    title: 'Global Reach',
    subtitle: 'Expanding Our Footprint',
    description: 'With projects spanning continents, we cater to a diverse clientele, bringing innovative solutions to businesses worldwide.',
  },
  {
    id: 4,
    number: '04',
    title: 'Expert Team',
    subtitle: 'Driven by Passion',
    description: 'Our team comprises dedicated professionals and innovators, constantly pushing boundaries to deliver exceptional results.',
  },
  {
    id: 5, 
    number: '05',
    title: 'Customer Satisfaction',
    subtitle: 'Our Top Priority',
    description: 'We pride ourselves on exceeding client expectations, ensuring every project delivers tangible value and fosters long-term partnerships.',
  },
  {
    id: 6, 
    number: '06',
    title: 'Future-Ready Solutions',
    subtitle: 'Embracing Tomorrow Today',
    description: 'We invest in cutting-edge technologies to provide scalable and future-proof solutions, keeping our clients ahead of the curve.',
  },
];

const cardVariants = {
  offscreen: {
    y: 100, 
    opacity: 0,
    scale: 0.9 
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      staggerChildren: 0.1 
    }
  }
};

const AboutSection = () => {
  return (
    <div className='min-h-screen italic flex flex-col justify-center items-center py-16 px-4 bg-gray-50'> {/* Changed background to slightly off-white */}
      <div className='flex flex-col md:flex-row w-full max-w-7xl items-center md:items-start space-y-12 md:space-y-0 md:space-x-12'> {/* Increased max-w and space-x */}
        
        <Motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col items-center md:items-start md:w-1/2 p-4 text-center md:text-left'
        >
          <h1 className='text-purple-600 text-lg font-medium mb-2  tracking-wide'>AboutUs</h1> {/* Added uppercase and tracking */}
          <h2 className='text-4xl sm:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-gray-900'>The Story of <span className='text-purple-700'>Roriri Soft</span></h2> {/* Increased font size and weight */}
          <p className='text-lg sm:text-xl text-gray-600 mb-8 max-w-md'>A Growing Company with Clear Vision, dedicated to innovative solutions and client success.</p> {/* Adjusted text color and max-width */}

          <div className='w-full bg-gray-200 h-64 sm:h-80 lg:h-[450px] rounded-xl mb-8 flex justify-center items-center overflow-hidden shadow-lg'> {/* Increased height and added shadow/rounded */}
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // More professional placeholder image
              alt="Roriri Soft Team"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <Motion.a href='/about'
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-xl'
          >
            Visit more
          </Motion.a>
        </Motion.div>

       <div className="flex flex-col md:w-1/2 p-4 md:mt-40 space-y-8 max-h-[80vh] md:max-h-[80vh] overflow-y-auto hide-scrollbar pr-2  snap-y snap-mandatory scroll-py-8">{/* Increased max-h, added pr-2 for scrollbar room */}
          {cardData.map((card) => (
            <Motion.div
              key={card.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }} 
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)" }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }} 
              className='relative cursor-target bg-white p-8 rounded-xl shadow-xl  border border-gray-100 ' 
            >
              <span className='absolute -top-6 -right-6 text-[12rem] sm:text-[14rem] lg:text-[16rem] font-extrabold text-purple-100 opacity-50 z-0 select-none pointer-events-none'>
                {card.number}
              </span>
              <h3 className='relative z-10 text-xl font-semibold mb-2 text-gray-800'>{card.title}</h3>
              <p className='relative z-10 text-purple-600 text-lg font-medium mb-4'>{card.subtitle}</p>
              <p className='relative z-10 text-gray-600'>{card.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a855f7; /* Tailwind purple-500 */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9333ea; /* Tailwind purple-600 */
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #a855f7 #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;