import React from 'react'
import InternshipRegistrationForm from './components/Form'
import hero from '../../assets/images/image.png'
const Internship = () => {
  return (
    <>
    <div>
      <div className="flex flex-col lg:flex-row max-w-7xl my-10 bg-white rounded-lg overflow-hidden w-full items-center">

      {/* Left Section: Image with Green Circle Background */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-0 relative min-h-[300px] lg:min-h-[500px]">
        {/* Green circle background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] sm:w-[500px] sm:h-[500px]  z-0 flex items-center justify-center overflow-hidden">
          {/* Image of the person */}
          <img
            src={hero}// Placeholder image URL
            alt="Happy intern celebrating with a laptop"
            className="w-full h-full object-cover z-10"
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://placehold.co/400x500/CCCCCC/333333?text=Image+Not+Found";
            }}
          />
        </div>
        {/* The actual image is within the circle, so no separate image tag needed here unless it's a different image */}
      </div>

      {/* Right Section: Content */}
      <div className="flex-1 p-6 sm:p-10 lg:p-16 flex flex-col justify-center text-center lg:text-left relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Elevate your Career With our <br />
          <span className="text-green-600">Internship Program</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          As the first in Tamil Nadu, we offer a unique dashboard to track student tasks, progress, and performance.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-green-600 cursor-target hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center gap-2">
            Register Now
            {/* Arrow icon using inline SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        {/* Decorative hexagon shape in the background */}
        <div className="hidden lg:block absolute right-[-50px] top-1/2 -translate-y-1/2 w-48 h-48 bg-green-100 opacity-50 rounded-lg transform rotate-45 z-0"></div>
      </div>
    </div>
      <img src="image.png" alt="" />
    </div>
    <InternshipRegistrationForm/>
    </>
  )
}

export default Internship