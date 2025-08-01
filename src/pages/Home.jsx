import React, { useState } from 'react';
import { motion as Motion , AnimatePresence } from 'framer-motion';
import TextType from '../components/ui/TextType/TypeWriter';
import SplitText from '../components/ui/SplitText/splitText';
import CountUp from '../components/ui/CountUp/CountUp';
import TargetCursor from '../components/ui/TargetCursor/TargetCursor';
import { ArrowRight } from 'lucide-react';
import Marquees from '../components/ui/Marquee/Marquee';
import ScrollVelocity from '../components/ui/ScrollVelocity/ScrollVelocity';
import Whatwedo from './WhatweDo/Whatwedo';
import TestimonialPage from './Founderpage';
import CallToAction from './Contact/components/CalltoAction';
import MarketingSection from './MarcetingSection/MarketingSection';
import { Link, useNavigate } from 'react-router-dom';
import AboutSection from './About/components/AboutSection';
import CompanyHighlightsSection from './About/components/CompanyHighlightsSection';
import Products from './Product/components/ProductCard';
const Home = () => {
     const [showWorkshopAd, setShowWorkshopAd] = useState(true);
  const navigate = useNavigate();
  
  return (
    <>   <AnimatePresence>
                {showWorkshopAd && (
                    <Motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-3 md:p-4 text-center text-sm md:text-base flex items-center justify-center space-x-4 rounded-b-lg shadow-lg z-10"
                    >
                        <a
                            href="https://www.linkedin.com/company/roririsoft/" // Replace with actual LinkedIn/Instagram/Registration link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-grow flex items-center justify-center hover:underline cursor-pointer"
                        >
                            🎉 Don't miss our "Future IT Professionals Workshop"! Click here to register!
                        </a>
                        <Motion.button
                            onClick={() => setShowWorkshopAd(false)}
                            className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Dismiss advertisement"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </Motion.button>
                    </Motion.div>
                )}
            </AnimatePresence>
     <div className="absolute    ">
     
      <div className=" ">
        <Link to={'/'}> 
        <img
          src="izhtech_animation.gif"
          alt="Animation"
          className=" md:h-[600px] h-72 hidden md:block " 
        />
       </Link>
      </div>

      
      
    </div>
    <div className='flex flex-col-reverse md:flex-row bg-gray-50'>  
      
      <div className="relative   left-0 w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] md:w-[600px] md:h-[600px] flex items-center justify-center">
        <img
          src="hero1.897db1b8.png"
          alt="Hand"
          className="absolute lg:w-full lg:h-full  object-contain z-10 lg:mt-70 mt-32 md:mt-72"
        />
        <Motion.img
          src="hero2.a3ba59f7.png"
          alt="Globe"
          className="absolute xl:w-[40%] xl:h-[30%] h-36 w-36 object-contain z-10 xl:ml-28"
          style={{ top: '25%', left: '30%' }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
      <div className='flex flex-col  justify-center p-5 z-10'>
       <h1 className='text-6xl '>Innovation at the Core of</h1>
       <TextType className='text-[#f8acff] z-50'
  text={["Every Solution.", "Evaluate Your Business.", "Paving A Way ToSuccess."]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
<div className='mt-5 z-10'>
  <SplitText
  text="Partner with us to enhance your business through our diverse services and discover the transformative power of our
   innovative products and trial solutions."
  className="text-lg text-gray-500 font-semibold md:mr-28"
  delay={50}
  duration={0.3}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
/>
</div>
<div className="flex flex-col sm:flex-row z-10 justify-center items-center gap-4 lg:gap-6 mt-10">
   <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <button className="cursor-target flex from-purple-500 px-3 py-2 
      bg-gradient-to-r
      text-white
      rounded-lg
    to-blue-500
    hover:from-purple-600 // Keep this
    hover:to-blue-600 " onClick={()=>navigate('/contact')}>Book a free Consulting <ArrowRight/></button>
    </div>
{
  [{count:'100',name:'Projects'},{count:'60',name:'Employees'},{count:'7',name:'Years'}].map((item,index)=>(
    <>
    <Motion.div key={index}
  className="bg-white cursor-target shadow-lg rounded-2xl p-4 w-[200px] sm:w-[160px] md:w-[180px] flex flex-col items-center justify-center transition-transform hover:scale-[1.05] hover:shadow-xl border border-gray-100 dark:border-zinc-700"
  initial={{ opacity: 0, y: -20 }} // Changed y from 20 to -20
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
>
  <div className="text-gray-800 text-3xl sm:text-4xl font-bold flex items-baseline ">
    <CountUp
      from={0}
      to={item.count}
      duration={2}
      separator=","
      enableScrollSpy
      scrollSpyDelay={200}
    />
    <span>+</span>
  </div>
  <p className="text-gray-600 text-sm sm:text-base mt-1">
    {item.name}
  </p>
</Motion.div>
    </>
  ))
}

    </div>
      </div>
    
    </div>
  <Marquees/>
<Whatwedo/>
<AboutSection/>
 <CompanyHighlightsSection/>
<ScrollVelocity
texts={['RORIRI SOFT ★','TECHNOLOGIES ★']}
  velocity={100} 
  className="custom-scroll-text"
/>
<Products/>

<MarketingSection/>
<TestimonialPage/>
<CallToAction/>

    </>
   
  );
};

export default Home;
