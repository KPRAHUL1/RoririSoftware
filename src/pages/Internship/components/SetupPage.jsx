import React from 'react';
import Stack from '../../../components/ui/Stack/Stack';

const WhatSetsUsApartPage = () => {
    const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left p-4 relative">
          <div className="absolute top-0 left-0 w-48 h-48 bg-green-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2 rotate-15 z-0"></div>


          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6 text-gray-800 relative z-10">
            What Sets Us <span className="text-green-600">Apart</span> ?
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-prose relative z-10">
            Our 1-week Foundational Program equips internship students with key skills and
            confidence to thrive in real-world projects.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out self-center md:self-start relative z-10">
            Register Now →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
    <Stack
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 200, height: 200 }}
  cardsData={images}
/>
        </div>
      </div>
    </div>
  );
};

export default WhatSetsUsApartPage;
