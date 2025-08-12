import React, { useState, useEffect, useRef } from 'react';

const Certification = () => {
  // Simplified certificate data without personal information
  const certificateData = [
    {
      id: 1,
      certificateUrl: 'https://placehold.co/400x300/a3e635/1f2937?text=Certificate+1'
    },
    {
      id: 2,
      certificateUrl: 'https://placehold.co/400x300/fde68a/1f2937?text=Certificate+2'
    },
    {
      id: 3,
      certificateUrl: 'https://placehold.co/400x300/fca5a5/1f2937?text=Certificate+3'
    },
    {
      id: 4,
      certificateUrl: 'https://placehold.co/400x300/93c5fd/1f2937?text=Certificate+4'
    },
    {
      id: 5,
      certificateUrl: 'https://placehold.co/400x300/d8b4fe/1f2937?text=Certificate+5'
    },
    {
      id: 6,
      certificateUrl: 'https://placehold.co/400x300/f9a8d4/1f2937?text=Certificate+6'
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Auto-play functionality
useEffect(() => {
  if (isPlaying) {
    intervalRef.current = setInterval(() => {
      setStartIndex((prevIndex) => 
        (prevIndex + cardsToShow) % certificateData.length
      );
    }, 3000);
  } else {
    clearInterval(intervalRef.current);
  }

  return () => clearInterval(intervalRef.current);
}, [isPlaying, certificateData.length, cardsToShow]);


  // Handle manual navigation
const handleNext = () => {
  setStartIndex((prevIndex) => 
    (prevIndex + cardsToShow) % certificateData.length
  );
};

const handlePrev = () => {
  setStartIndex((prevIndex) => 
    (prevIndex - cardsToShow + certificateData.length) % certificateData.length
  );
};


  // Toggle auto-play

  // Responsive cards display
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1440) {
      setCardsToShow(4);
    } else if (window.innerWidth >= 1024) {
      setCardsToShow(3);
    } else if (window.innerWidth >= 768) {
      setCardsToShow(2);
    } else {
      setCardsToShow(1);
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  const displayedCards = Array.from({ length: cardsToShow }, (_, i) => {
    const index = (startIndex + i) % certificateData.length;
    return certificateData[index];
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 font-sans p-4 flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            Certificate Gallery
          </h1>
          <p className="text-gray-400 text-lg">Showcasing achievements and accomplishments</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md text-gray-100 rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-10 hidden md:block hover:scale-110"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          {/* Cards Display */}
          <div className="flex justify-center items-stretch gap-8 overflow-hidden lg:px-16 md:px-20">
            {displayedCards.map((card, index) => (
              <div
                key={`${card.id}-${startIndex}`}
                className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] transition-all duration-700 transform-gpu"
                style={{
                  animation: `slideIn 0.7s ease-out ${index * 0.1}s both`
                }}
              >
               
                  {/* Glowing border effect */}
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center bg-white/5 rounded-xl p-4 mb-4">
                      <img
                        src={card.certificateUrl}
                        alt={`Certificate ${card.id}`}
                        className="w-full h-auto max-h-64 object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://placehold.co/400x300/6b7280/d1d5db?text=Certificate';
                        }}
                      />
                    </div>
                    
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-md text-gray-100 rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-10 hidden md:block hover:scale-110"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Control Panel */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          {/* Play/Pause Button */}


          {/* Mobile Navigation */}
          <div className="flex md:hidden space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 backdrop-blur-md text-gray-100 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white/10 backdrop-blur-md text-gray-100 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Certification;