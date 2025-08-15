/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { certificate1 ,certificate4,certificate6,certificate7,certificate8 } from '../../../assets/internship/internship';

const Certification = () => {
  
  const certificateData = [
    {
      id: 1,
      certificateUrl: certificate1
    },
    {
      id: 4,
      certificateUrl: certificate4
    },
    {
      id: 6,
      certificateUrl: certificate6
    },
    {
      id: 7,
      certificateUrl: certificate7
    },
    {
      id: 8,
      certificateUrl: certificate8
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
      setCardsToShow(3);
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
    <div className="italic  font-sans p-4 flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h1
  className="text-4xl md:text-6xl font-medium mb-4  text-green-500
    "
>
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

          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-16 md:px-20">
  {displayedCards.map((card, index) => (
    <div
      key={`${card.id}-${startIndex}`}
      className="transition-all duration-700 transform-gpu"
      style={{
        animation: `slideIn 0.7s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="relative p-4 flex flex-col bg-white/5 rounded-xl shadow-md">
        {/* Fixed aspect ratio container */}
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={card.certificateUrl}
            alt={`Certificate ${card.id}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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