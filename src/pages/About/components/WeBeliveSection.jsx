import React from 'react';
import { video2} from '../../../assets/office/office'
const WeBelieveInSection = () => {
  return (
    <div className="italic min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id='about'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div className="flex flex-col justify-center text-center md:text-left p-4 relative">
       
          <div className="absolute top-0 left-0 w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="absolute top-4 left-4 w-2 h-2 bg-red-300 rounded-full"></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-blue-800">
            We Believe in
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4 max-w-prose">
            At Roriri Soft tech, our core belief revolves around harnessing the transformative power of
            software to redefine and elevate business landscapes...
          </p>
          <p className="text-gray-600 text-base sm:text-lg max-w-prose">
            With a proven track record spanning three years in TirunelVeli.
          </p>
        </div>

         <div className="relative flex justify-center items-center p-4">
          <div className="relative w-full max-w-lg rounded-lg overflow-hidden shadow-xl">
            
             <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}> 
              <video
  src={video2}
  controls
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
>
  Your browser does not support the video tag.
</video>
            </div>
            
            <svg
              className="absolute bottom-0 left-0 w-full h-auto"
              viewBox="0 0 600 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'translateY(50%)' }} 
            >
              <path
                d="M0 100 C 150 200, 450 0, 600 100 L 600 200 L 0 200 Z"
                fill="#3B82F6" 
                opacity="0.8"
              />
              
              <path
                d="M580 90 L595 100 L580 110 L580 105 L560 105 L560 95 L580 95 Z"
                fill="#3B82F6" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieveInSection;
