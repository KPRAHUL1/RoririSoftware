import React, { useState, useEffect, useRef } from 'react';

const Certification = () => {
  
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
    <div className="min-h-screen bg-green-200  font-sans p-4 flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 ">
            Certificate Gallery
          </h1>
          <p className="text-gray-400 text-lg">Showcasing achievements and accomplishments</p>
        </div>

       
        <div className="relative">
         
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 bg-white backdrop-blur-md text-black rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-10 hidden md:block hover:scale-110"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          
          <div className="flex justify-center items-stretch gap-5 overflow-hidden lg:px-16 md:px-20">
            {displayedCards.map((card, index) => (
              <div
                key={`${card.id}-${startIndex}`}
                className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] transition-all duration-700 transform-gpu"
                style={{
                  animation: `slideIn 0.7s ease-out ${index * 0.1}s both`
                }}
              >
               
                 
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center bg-white/5 rounded-xl mb-4">
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

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-white backdrop-blur-md text-black rounded-full shadow-xl hover:bg-white/20 transition-all duration-300 z-10 hidden md:block hover:scale-110"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-6">
        

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