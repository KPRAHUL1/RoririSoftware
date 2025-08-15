import React, { useState, useEffect, useRef } from 'react';

const TimelinePage = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        setScrollProgress(progress);
      }

      const items = document.querySelectorAll('.timeline-item');
      const newVisibleItems = new Set();
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisibleItems.add(index);
        }
      });
      
      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
     {
      number: '01',
      title: 'Strategy & Planning',
      description: "At Roriri Software Solutions, we conduct thorough research and planning, collaborating closely to turn your vision into reality.",
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
          
          <div className="absolute left-6 bottom-6">
            <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg">
              
              <div className="w-20 h-12 bg-gray-900 rounded mx-auto mt-1">
                <div className="w-full h-full bg-green-400 rounded p-2">
                  <div className="w-full h-2 bg-green-600 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-green-600 rounded mb-1"></div>
                  <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                </div>
              </div>
              
              <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          
          
          <div className="absolute left-8 bottom-20">
            <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-8 bg-blue-600 rounded mx-auto mt-1"></div>
          </div>
          
          
          <div className="absolute top-6 right-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-4 border-gray-400 rounded-full relative animate-spin" style={{ animationDuration: `${3 + i}s` }}>
                <div className="absolute inset-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
          
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            24/7
          </div>
        </div>
      )
    },
     {
      number: '02',
      title: 'Design & Development',
      description: "We create innovative, user-centric mobile apps that drive growth, enhance engagement, and exceed user expectations for customer satisfaction.",
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
         
          <div className="absolute left-6 bottom-6">
            <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg">
              
              <div className="w-20 h-12 bg-gray-900 rounded mx-auto mt-1">
                <div className="w-full h-full bg-green-400 rounded p-2">
                  <div className="w-full h-2 bg-green-600 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-green-600 rounded mb-1"></div>
                  <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                </div>
              </div>
              
              <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          
         
          <div className="absolute left-8 bottom-20">
            <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-8 bg-blue-600 rounded mx-auto mt-1"></div>
          </div>
          
         
          <div className="absolute top-6 right-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-4 border-gray-400 rounded-full relative animate-spin" style={{ animationDuration: `${3 + i}s` }}>
                <div className="absolute inset-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
          
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            24/7
          </div>
        </div>
      )
    },
     {
      number: '03',
      title: 'Testing',
      description: "We maintain high quality standards, ensuring thorough testing for bug-free, seamless, and flawless mobile app experiences before delivery.",
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
         
          <div className="absolute left-6 bottom-6">
            <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg">
             
              <div className="w-20 h-12 bg-gray-900 rounded mx-auto mt-1">
                <div className="w-full h-full bg-green-400 rounded p-2">
                  <div className="w-full h-2 bg-green-600 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-green-600 rounded mb-1"></div>
                  <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                </div>
              </div>
             
              <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          
          
          <div className="absolute left-8 bottom-20">
            <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-8 bg-blue-600 rounded mx-auto mt-1"></div>
          </div>
          
          
          <div className="absolute top-6 right-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-4 border-gray-400 rounded-full relative animate-spin" style={{ animationDuration: `${3 + i}s` }}>
                <div className="absolute inset-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
         
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            24/7
          </div>
        </div>
      )
    },
     {
      number: '04',
      title: 'Launch',
      description: "After thorough testing, we confidently launch your app, meeting specifications, and provide an installation guide for easy deployment.",
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
          
          <div className="absolute left-6 bottom-6">
            <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg">
            
              <div className="w-20 h-12 bg-gray-900 rounded mx-auto mt-1">
                <div className="w-full h-full bg-green-400 rounded p-2">
                  <div className="w-full h-2 bg-green-600 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-green-600 rounded mb-1"></div>
                  <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                </div>
              </div>
             
              <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          
         
          <div className="absolute left-8 bottom-20">
            <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-8 bg-blue-600 rounded mx-auto mt-1"></div>
          </div>
          
          
          <div className="absolute top-6 right-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-4 border-gray-400 rounded-full relative animate-spin" style={{ animationDuration: `${3 + i}s` }}>
                <div className="absolute inset-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
         
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            24/7
          </div>
        </div>
      )
    },
    {
      number: '05',
      title: 'User Adoption',
      description: 'Post-launch, we drive user adoption with targeted marketing, training, and ongoing support to ensure smooth integration and success.',
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 overflow-hidden">
         
          <div className="absolute right-4 top-4 w-24 h-40 bg-gray-900 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
            <div className="w-full h-full bg-gray-800 rounded-lg p-2">
              <div className="w-full h-2 bg-gray-700 rounded mb-2"></div>
              <div className="space-y-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <div className="flex-1 h-2 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
         
          <div className="absolute left-6 bottom-4">
            <div className="w-20 h-24 relative">
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-orange-300 rounded-full mb-1"></div>
                <div className="w-6 h-12 bg-blue-600 rounded-lg mx-auto"></div>
                <div className="w-8 h-6 bg-gray-700 rounded-b-lg -mt-1"></div>
              </div>
              
              
              <div className="absolute bottom-8 right-2 w-3 h-5 bg-gray-800 rounded transform rotate-12"></div>
            </div>
          </div>
          
          
          <div className="absolute top-6 left-6 w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-6 h-6 bg-indigo-200 rounded-full animate-bounce"></div>
        </div>
      )
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: "Roriri Software Solutions offers 24/7 support, ensuring smooth app performance with regular updates and assistance.",
      illustration: (
        <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
      
          <div className="absolute left-6 bottom-6">
            <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg">
              
              <div className="w-20 h-12 bg-gray-900 rounded mx-auto mt-1">
                <div className="w-full h-full bg-green-400 rounded p-2">
                  <div className="w-full h-2 bg-green-600 rounded mb-1"></div>
                  <div className="w-3/4 h-1 bg-green-600 rounded mb-1"></div>
                  <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                </div>
              </div>
             
              <div className="w-8 h-2 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
          
          
          <div className="absolute left-8 bottom-20">
            <div className="w-6 h-6 bg-orange-300 rounded-full"></div>
            <div className="w-4 h-8 bg-blue-600 rounded mx-auto mt-1"></div>
          </div>
          
         
          <div className="absolute top-6 right-6 space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-4 border-gray-400 rounded-full relative animate-spin" style={{ animationDuration: `${3 + i}s` }}>
                <div className="absolute inset-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
         
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            24/7
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen italic  bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <h1 className='text-3xl text-blue-700 text-center'>Our Process</h1>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        
        <div className="max-w-6xl mx-auto" ref={timelineRef}>
         
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-indigo-300 to-green-300 h-full opacity-30"></div>
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-green-500 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>

          <div className="space-y-32">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item relative transition-all duration-1000 ease-out ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                    visibleItems.has(index) ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
                  }`}>
                    {item.number}
                  </div>
                  <div className={`absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 ${
                    visibleItems.has(index) ? 'block' : 'hidden'
                  }`}></div>
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : ''
                }`}>
                  <div className={`space-y-6 ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  } ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                  }`}>
                    <div className="group cursor-pointer">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                    <div className={`transition-all duration-700 delay-300 ${
                      visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {/* <button className=" cursor-pointer group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </button> */}
                    </div>
                  </div>
                  <div className={`${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  } transition-all duration-1000 delay-200 ${
                    visibleItems.has(index) 
                      ? 'opacity-100 scale-100 rotate-0' 
                      : 'opacity-0 scale-95 rotate-3'
                  }`}>
                    <div className="group relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                      
                      <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                        {item.illustration}
                      </div>
                    </div>
                  </div>
                </div>
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-16">
                    <div className={`w-8 h-8 border-2 border-gray-300 rounded-full bg-white transition-all duration-500 ${
                      visibleItems.has(index) ? 'animate-bounce' : ''
                    }`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelinePage;