import React from 'react'
import InternshipRegistrationForm from './components/Form'
import certificate from '../../assets/certificate/image.png'
import TextType from '../../components/ui/TextType/TypeWriter';
import brand from '../../assets/brand/image.png';
import internship from "../../assets/internship/image.png"
import CircularGallery from '../../components/ui/CircularGallary/CircularGallary';
import InternshipProgramsPage from './components/InternShipProgramPage';
import WhatSetsUsApartPage from './components/SetupPage';
const Internship = () => {

  return (
    <>
  
    <div className='flex flex-col'>
 
      <div className="flex flex-col md:flex-row items-center gap-3   ">
        <div className="flex items-center w-fit">
      <iframe
  src="https://lottie.host/embed/0ca277e9-edcb-4d84-9658-acb2a601682a/WKanSlAvri.lottie"
  className="w-full max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] lg:w-[600px] object-cover rounded-xl mx-auto"
/>

</div>


      <div className=" flex flex-col justify-center text-center px-3 lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-gray-900 leading-tight mb-4">
          Elevate your Career With our <br />
        <TextType textColors={'#ffffff'}
           text={['Intern ship Program.','Work Shop Program.','Skill Develop Program.']} className='text-blue-500' />


         
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          As the first in Tamil Nadu, we offer a unique dashboard to track student tasks, progress, and performance.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="bg-blue-500 cursor-target hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center gap-2">
            Register Now
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
      </div>
         
    </div> 
    <section className=" py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-5 items-center justify-center">
     
      <div className="flex flex-wrap items-center gap-2 justify-center my-10 ">
        <h2 className="text-xl sm:text-1xl font-semibold text-gray-500  text-center">
        Recognized By
      </h2>
          <span className="text-blue-600 font-bold text-3xl">Start Up India</span>
      </div>
        <div className="flex flex-col items-center">
          <img
            src={brand}
            alt={brand}
            className=" w-[500px] h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x50/cccccc/333333?text=DPIIT"; }}
          />
        </div>
 
    </section>
      <img src="image.png" alt="" className='' />
   
    <WhatSetsUsApartPage/>
      <InternshipProgramsPage/>
       <div style={{ height: '600px', position: 'relative' }} className=''>
        <h1 className='text-center text-black text-5xl font-normal '>Intern <span className='text-blue-400'>To</span> Our Employees</h1>
  <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02}/>
    </div>
   
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center items-center p-4">
          <img
            src={internship}
            alt="Internship Student"
            className="w-full max-w-md h-auto rounded-lg"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/cccccc/333333?text=Image+Unavailable"; }}
          />       
        </div>
        <div className="flex flex-col justify-center text-center md:text-left p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-blue-600">
            Project <span className="text-gray-800">Internship</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Develop your Final year project in a real IT environment!
          </p>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-prose">
            Our 3-month Project Internship allows students to work on their projects
            within our IT-enabled campus. Get expert guidance from professional
            developers, hands-on experience, and exposure to a collaborative environment
            designed to enhance your technical and professional skills.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out self-center md:self-start">
            Register Now →
          </button>
        </div>
      </div>
    </div>
     <div className="min-h-screen bg-black text-white flex flex-col items-center py-3 justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-lg font-normal text-gray-500 leading-tight mb-4">
            Our Valid <br />
            <span className="text-blue-500 text-5xl">Internship</span> <br />
           <span className='text-5xl text-white'> Certifications
            </span>
          </h1>
          <div className="mt-8 md:mt-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-4">
              Recognized By
            </h3>
             <div className="flex flex-col items-center">
          <img
            src={brand}
            alt={brand}
            className=" w-[500px] h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x50/cccccc/333333?text=DPIIT"; }}
          />
        </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" p-4 rounded-lg shadow-2xl border-4 bg-white border-blue-400">
            <img
              src={certificate}
              alt="Internship Completion Certificate Sample"
              className="max-w-full h-auto rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x350/cccccc/333333?text=Certificate+Unavailable"; }}
            />
          </div>
        </div>
      </div>
    </div>
    <InternshipRegistrationForm/>
     </div>
    </>
  )
}

export default Internship