import React from 'react';
import { Linkedin } from 'lucide-react'; 
import image from '../assets/image.png'
import founder from '../assets/founderimage/image.png'
const TestimonialPage = () => {
  return (
    <div className="italic flex items-center flex-col lg:flex-row min-h-screen bg-gray-50 justify-center py-12 px-4 sm:px-6 lg:px-20 gap-10 font-inter">
      <div className=" mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex-shrink-0">
          <img
            src={founder} 
            alt="Natarajan B"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/384x384/E0E0E0/333333?text=Profile+Image"; }}
          />
        </div>

        <div className="flex-1 text-center lg:text-left relative">

          <blockquote className="text-xl sm:text-2xl font-normal text-gray-900 leading-tight mb-6 mt-8 lg:mt-0">
            &ldquo; Growing with Roriri Software, I see how curiosity and problem-solving within our team drive the most significant technological advancements.&ldquo;
          </blockquote>

          <p className="text-xl font-semibold text-gray-800">
            Mr. Ragupathi R
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Founder & Managing Directer
          </p>

         
        </div>
        </div>
         <div className=" ">
           
            <img src={image} alt="" className='w-lvh  hidden lg:block'/>
          </div>
      
    </div>
  );
};

export default TestimonialPage;
