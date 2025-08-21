import React from 'react';
import RotatingText from '../../components/ui/RotatingText/Rotating';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { lottie2 } from '../../assets/lottiefiles/lettie';
const servicesData = [
  {
    id: 1,
    title: 'ERP Solutions',
    path:'erp-solutions',
    description: 'Provides ERP solutions for organizations to streamline processes.',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    path:'mobile-app-development',
    description: 'Develops mobile apps to enhance your digital presence.',
  },
  {
    id: 3,
    title: 'Web Development',
    path:'web-app-development',
    description: 'Builds custom web applications tailored to your business needs.',
  },
  {
    id: 6,
    title: 'IT Consulting',
    path:'it-consulting',
    description: 'Offers expert IT consulting to optimize your operations.',
  },
];

const Whatwedo = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen italic flex xl:flex-row justify-evenly items-center flex-col-reverse gap-5 bg-white text-gray-800 font-inter  py-16 px-4 sm:px-6 lg:px-8">
      <div className="italic relative max-w-7xl mx-auto">
        <div className="text-center   mb-12">
          <h2 className="text-purple-600 text-lg font-semibold uppercase tracking-wide">
            What we do?
          </h2>
          <h1 className="mt-2 text-xl flex flex-col items-center sm:text-xl lg:text-6xl font-medium  text-gray-900">
            Innovative Solutions for <br className="hidden " /> 
            <RotatingText
  texts={['Business Success & Growth', 'Digital Excellence', 'Future-Proof Your Business']}
  mainClassName="px-2 sm:px-2 md:px-3   overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg "
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={3000}
/>
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {servicesData.map((service) => (
            <div onClick={()=>navigate(`/services/${service?.path}`)}
              key={service.id}
              className={`
                relative bg-white rounded-xl shadow-lg p-6 group cursor-target border-2 border-purple-600
                hover:shadow-xl transition-all duration-300 ease-in-out
              `}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <svg
                  className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-600 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div> 
      <div className=''>
    <DotLottieReact
          className=" sm:w-[400px] p-3 sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
          src={lottie2}
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Whatwedo;
