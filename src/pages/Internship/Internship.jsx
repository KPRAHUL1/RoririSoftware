import InternshipRegistrationForm from './components/Form'
import certificate from '../../assets/certificate/image.png'
import TextType from '../../components/ui/TextType/TypeWriter';
import brand from '../../assets/brand/image.png';
import internship from "../../assets/internship/image.png"
import CircularGallery from '../../components/ui/CircularGallary/CircularGallary';
import InternshipProgramsPage from './components/InternShipProgramPage';
import WhatSetsUsApartPage from './components/SetupPage';
import Certification from './components/Certifiaction';
import { contactlottie } from '../../assets/lottiefiles/lettie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Internship = () => {

  return (
    <>
  
    <div className='italic flex flex-col'>
 
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 px-8  ">
        

      <div className=" flex flex-col justify-center text-center px-3 lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-gray-900 leading-tight mb-4">
          Elevate your Career With our <br />
        <TextType textColors={'#ffffff'}
           text={['Intern ship Program.','Work Shop Program.','Skill Develop Program.']} className='text-green-500' />


         
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
          As the first in Tamil Nadu, we offer a unique dashboard to track student tasks, progress, and performance.
        </p>
        <div className="flex justify-center lg:justify-start">
          <a href='#contact' className="cursor-pointer bg-green-500 cursor-target hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 flex items-center gap-2">
            Register Now
        
          </a>
        </div>
      </div>
         <div className="flex items-center ">
          <DotLottieReact
            className=" sm:w-[400px]  sm:h-[400px]  lg:w-[500px] lg:h-[600px]"
            src={contactlottie}
            loop
            autoplay
          />
        </div>

    </div> 
    <section className=" py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-5 items-center justify-center">
     
      <div className="flex flex-wrap items-center gap-2 justify-center my-10 ">
        <h2 className="text-xl sm:text-1xl font-semibold text-gray-500  text-center">
        Recognized By
      </h2>
          <span className="text-green-600 font-bold text-3xl">Start Up India</span>
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
        <h1 className='text-center text-black text-5xl font-normal '>Intern <span className='text-green-400'>To</span> Our Employees</h1>
  <CircularGallery bend={3} textColor="black" borderRadius={0.05} scrollEase={0.02} />
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4 text-green-600">
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
          <a href='#contact' className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out self-center md:self-start">
            Register Now
          </a>
        </div>
      </div>
    </div>
    <Certification/>
     <div className="min-h-screen bg-black text-white flex flex-col items-center py-3 justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-lg font-normal text-gray-500 leading-tight mb-4">
            Our Valid <br />
            <span className="text-green-500 text-5xl">Internship</span> <br />
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
          <div className=" p-4 rounded-lg shadow-2xl border-4 bg-white border-green-400">
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
    <InternshipRegistrationForm />
     </div>
    </>
  )
}

export default Internship