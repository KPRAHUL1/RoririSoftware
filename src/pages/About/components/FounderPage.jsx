import React from 'react';
import { Linkedin } from 'lucide-react';
import founder from '../../../assets/founderimage/founder.png';

const FounderProfileSection = () => {
  return (
  <> 
  
    <div className="italic  min-h-screen bg-white flex-col flex gap-10 py-12 px-4 sm:px-6 lg:px-16">
        <div className='text-start flex flex-col gap-5 pl-5'>
            <h1 className='text-6xl font-medium text-blue-800'>Founder</h1>
            <p className='text-3xl '>The visionary force behind RORIRI Soft Tech</p>
        </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl w-full">
        
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-80 sm:w-full sm:h-full lg:w-96 lg:h-full   border-gray-200">
            <img
              src={founder}
              alt="MR.Ragupathi R - CEO & Founder"
              className="w-full h-full "
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x400/cccccc/333333?text=Image+Unavailable";
              }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            MR. Ragupathi R
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-500  mb-4">
            CEO & Founder
          </p>
          <p className="text-gray-600 text-base sm:text-lg mb-4 w-full">
            Meet MR. Ragupathi R, the force behind Roriri Software Technologies' success. He started with just two people and built a large Roriri family. In Nallanthapuram, Kalakad, he's seen as a tech icon for the youth. His hard work and smart leadership have driven tremendous growth, backed by bold strategies and vision.
          </p>
          <p className="text-gray-600 text-base sm:text-lg mb-6 w-full">
            As the driving force behind our innovation, his forward-thinking approach positioned Roriri Soft Tech on the cutting edge. We owe our growth and success to his consistent leadership, inspiring every Roririan to chase excellence.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://linkedin.com/in/ragupathi-r-69a80b39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-200 flex items-center gap-2"
            >
              <Linkedin size={28} />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
 
  );
};

export default FounderProfileSection;
