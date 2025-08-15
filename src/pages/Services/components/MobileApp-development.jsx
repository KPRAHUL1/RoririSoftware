import React, { useState, useEffect } from 'react';
import TimelinePage from './Timeline';
import Marquee from "react-fast-marquee";
import { useNavigate } from 'react-router-dom';
import { Briefcase, ShoppingBag, GraduationCap, PiggyBank, Users, Heart } from "lucide-react";
const MobileAppDevelopmentPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

const specializations = [
  { name: "Lifestyle", color: "from-pink-400 to-purple-500", icon: Heart },
  { name: "Finance", color: "from-orange-400 to-red-500", icon: PiggyBank },
  { name: "Education", color: "from-cyan-400 to-blue-500", icon: GraduationCap },
  { name: "Social Network", color: "from-purple-400 to-pink-500", icon: Users },
  { name: "E-Commerce", color: "from-blue-500 to-purple-600", icon: ShoppingBag },
  { name: "Business", color: "from-gray-600 to-gray-800", icon: Briefcase },
];

  const slides = [
    {
      type: 'android',
      title: 'Android Mobile App Development:',
      description: `Roriri Soft Tech excels in Android mobile app development, creating dynamic and user-friendly applications tailored to the Android platform. Our team leverages the latest technologies and follows best practices to design and develop innovative Android apps that cater to diverse business needs. From conceptualization to deployment, we ensure a seamless development process, incorporating engaging UI/UX designs, robust functionalities, and optimal performance. Our Android app development services encompass a wide range of industries, providing scalable and feature-rich solutions that resonate with the specific requirements of our clients.`,
      phoneContent: (
        <div className="relative w-64 h-[500px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
          
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-2">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              
              <div className="flex justify-between items-center px-6 py-3 bg-white">
                <span className="text-black font-semibold">9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                </div>
              </div>
              
              
              <div className="px-6 py-4 h-full bg-gradient-to-br from-gray-50 to-white relative">
                
                <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-gray-800 to-black rounded-full"></div>
                
                
                <div className="absolute top-32 right-16 w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-b from-orange-300 to-orange-400"></div>
                </div>
                
              
                <div className="relative z-10 mt-8">
                  <h1 className="text-2xl font-bold text-black leading-tight mb-4">
                    Define<br />
                    yourself in<br />
                    your unique<br />
                    way.
                  </h1>
                </div>
                
                
                <div className="absolute bottom-20 left-6 right-6">
                  <button className="w-full bg-black text-white py-4 rounded-xl font-semibold flex items-center justify-center">
                    Get Started
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      type: 'ios',
      title: 'iOS Mobile App Development:',
      description: `In the realm of iOS mobile app development, Roriri Soft Tech stands out as a proficient and experienced provider. Our dedicated team specializes in crafting high-quality iOS applications that align with the design principles and standards set by Apple. We employ cutting-edge tools and technologies to build visually appealing and functionally superior iOS apps. Whether it's for iPhones, iPads, or other Apple devices, our development process prioritizes user experience, performance optimization, and adherence to Apple's guidelines. Roriri Soft Tech ensures that iOS apps developed meet the highest standards of quality, delivering a seamless and intuitive experience for end-users.`,
      phoneContent: (
        <div className="relative w-64 h-[500px]">
          
          <div className="absolute top-10 left-5 w-56 h-56 bg-gradient-to-br from-teal-300 via-blue-400 to-purple-500 rounded-full opacity-80"></div>
          
         
          <div className="relative z-10 w-full h-full bg-black rounded-[2.5rem] shadow-2xl overflow-hidden p-2">
            <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden">
             
              <div className="flex justify-between items-center px-4 py-3 text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">○</span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-4 bg-green-500 rounded"></div>
                  <div className="w-1 h-4 bg-green-500 rounded"></div>
                  <div className="w-1 h-4 bg-gray-500 rounded"></div>
                  <div className="w-1 h-4 bg-gray-500 rounded"></div>
                </div>
              </div>

              
              <div className="grid grid-cols-4 gap-4 px-6 py-4">
                {['Deposit', 'Referral', 'Gold Trading', 'Margin'].map((item) => (
                  <div key={item} className="text-center">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg mx-auto mb-1"></div>
                    <span className="text-xs text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4 px-6 py-2">
                {['Investment', 'Savings', 'Linked Money', 'More'].map((item) => (
                  <div key={item} className="text-center">
                    <div className="w-8 h-8 bg-teal-500 rounded-lg mx-auto mb-1"></div>
                    <span className="text-xs text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

           
              <div className="px-6 py-4 bg-white mx-4 rounded-t-3xl mt-4 flex-1">
        
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">P</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">P2P Trading</p>
                      <p className="text-sm text-gray-500">High Traded Volume</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>

               
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">C</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Credit/Debit Card</p>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>

                
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Recent Coin</h3>
                  
                 
                  <div className="space-y-3">
                    {[
                      { symbol: 'BTC/BUSD', price: '40,058.83', change: '+1.2%', color: 'text-green-500' },
                      { symbol: 'SOL/BUSD', price: '2,058.83', change: '-0.8%', color: 'text-red-500' },
                      { symbol: 'BTC', price: '40,058.83', change: '+2.1%', color: 'text-green-500' }
                    ].map((coin) => (
                      <div key={coin.symbol} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-orange-600">
                              {coin.symbol.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{coin.symbol}</p>
                            <p className="text-sm text-gray-500">{coin.price}</p>
                          </div>
                        </div>
                        <span className={`text-sm font-medium ${coin.color}`}>
                          {coin.change}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

               
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 px-6 py-3">
                  <div className="flex justify-around">
                    {['Home', 'Markets', 'Trade', 'Futures', 'Wallet'].map((item) => (
                      <div key={item} className="text-center">
                        <div className="w-6 h-6 bg-gray-600 rounded mx-auto mb-1"></div>
                        <span className="text-xs text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`
  };

  return (
    <div className="min-h-screen italic  bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={backgroundStyle}
      />
      
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-200 to-red-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

     
      <div className="relative z-10 text-center py-20 px-6">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-blue-600 font-medium text-lg mb-4">Mobile App Development</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transforming Ideas into<br />
            Innovative <span className="text-blue-600">Mobile Apps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Welcome to Roriri Soft Tech, your go-to destination for unparalleled mobile app development 
            services in Kalakad. As a dynamic software company, we specialize in transforming your 
            ideas and plans into innovative applications that resonate with the latest industry trends.
          </p>
          <button onClick={()=>navigate('/contact')} className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25">
            Book a free consulting
          </button>
        </div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div 
          className={`text-center mb-16 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">Our Specialization</h2>
          
    
        </div>
      </div>

      <div className="relative z-10 py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-16 items-center p-12">
                    
                    <div className={`space-y-6 ${slide.type === 'ios' ? 'lg:order-2' : ''}`}>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {slide.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>
                      {/* <div className="pt-6">
                        <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                          Learn More
                        </button>
                      </div> */}
                    </div>

                    
                    <div className={`flex justify-center ${slide.type === 'ios' ? 'lg:order-1' : ''}`}>
                      <div className="transform hover:scale-105 transition-transform duration-500">
                        {slide.phoneContent}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex justify-center mt-8 space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          
          <button
            onClick={() => setCurrentSlide(currentSlide === 0 ? 1 : 0)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-gray-600 text-xl">←</span>
          </button>
          <button
            onClick={() => setCurrentSlide(currentSlide === 1 ? 0 : 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-gray-600 text-xl">→</span>
          </button>
        </div>
      </div>

      
   
      <TimelinePage/>
            <div className="w-full bg-gray-100 py-10">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {specializations.map((spec) => {
          const Icon = spec.icon;
          return (
            <div
              key={spec.name}
              className={`bg-gradient-to-r ${spec.color} text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 m-3 flex items-center space-x-3`}
            >
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon className="text-white w-5 h-5" />
              </div>
              <span>{spec.name}</span>
            </div>
          );
        })}
      </Marquee>
    </div>
    </div>
  );
};

export default MobileAppDevelopmentPage;