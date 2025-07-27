import React from 'react';
import { motion as Motion } from 'framer-motion';
import Slider from 'react-slick'; 

import founder1 from '../../../assets/founderimage/002.png';
import roriri1 from '../../../assets/roriri/photoRoriri.png';
import roriri2 from "../../../assets/roriri/Garden.jpg"; 


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const awardPhotos = [
  { id: 1, src: roriri1, alt: 'Company Award 1' },
  { id: 2, src: roriri2, alt: 'Company Award 2' },
  { id: 3, src: roriri1, alt: 'Company Award 3' },
  { id: 4, src: roriri2, alt: 'Company Award 4' },
  { id: 5, src: roriri2, alt: 'Company Award 5' },
];

const mdPhotos = [
  { id: 1, src: founder1, alt: 'MD Photo 1' },
  { id: 2, src: founder1, alt: 'MD Photo 2' },
  { id: 3, src: founder1, alt: 'MD Photo 3' },
];

const youtubeVideoId = 'xUWa2NKyBaA';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const CompanyHighlightsSection = () => {
  const awardCarouselSettings = {
    dots: true,      
    infinite: true,    
    speed: 500,        
    slidesToShow: 1,   
    slidesToScroll: 1, 
    autoplay: true,   
    autoplaySpeed: 2000, 
    fade: true,        
    cssEase: "linear", 
    arrows: true,      
    prevArrow: <button className="slick-prev custom-slick-arrow text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-2 absolute z-10 top-1/2 -translate-y-1/2 -left-6 md:-left-12">←</button>,
    nextArrow: <button className="slick-next custom-slick-arrow text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full p-2 absolute z-10 top-1/2 -translate-y-1/2 -right-6 md:-right-12">→</button>,
    responsive: [ 
      {
        breakpoint: 768, 
        settings: {
          arrows: false, 
        }
      }
    ]
  };

  const mdCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Motion.section
      className='py-20 px-4 bg-white'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <Motion.h2 variants={itemVariants} className='text-4xl md:text-5xl font-medium text-center text-gray-900 mb-16'>
        Our Journey & Milestones
      </Motion.h2>

    
      <Motion.div variants={itemVariants} className='mb-20 max-w-6xl mx-auto'>
        <h3 className='text-3xl font-medium text-center text-purple-700 mb-8'>Awards & Recognitions</h3>
        <div className="relative"> 
          <Slider {...awardCarouselSettings}>
            {awardPhotos.map((photo) => (
              <div key={photo.id}> 
                <div className="relative w-full h-80 sm:h-96 lg:h-[500px] flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
               
                    onError={(e) => {
                      console.error("Image failed to load:", photo.src, e);
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found'; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-6">
                    <p className="text-white text-lg font-semibold">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <style jsx>{`
            /* Customizing dots for React Slick */
            .slick-dots li button:before {
              font-size: 12px; /* Adjust dot size */
              color: #a855f7; /* Default dot color */
            }
            .slick-dots li.slick-active button:before {
              color: #6d28d9; /* Active dot color */
            }
            .slick-dots {
              bottom: -40px; /* Adjust vertical position */
            }

            /* Hiding default arrows and using custom ones */
            .slick-prev:before, .slick-next:before {
              display: none; /* Hide default content */
            }
            .custom-slick-arrow {
              font-size: 2.5rem; /* Larger arrow icon */
              line-height: 1; /* Adjust line height for icon */
              background-color: rgba(255, 255, 255, 0.7);
              border-radius: 50%;
              width: 50px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 10px rgba(0,0,0,0.1);
              transition: all 0.2s ease-in-out;
            }
            .custom-slick-arrow:hover {
              background-color: rgba(255, 255, 255, 0.9);
              box-shadow: 0 6px 15px rgba(0,0,0,0.2);
            }
            .slick-prev { left: -30px; } /* Adjust position */
            .slick-next { right: -30px; } /* Adjust position */
            @media (min-width: 768px) { /* Adjust for larger screens */
              .slick-prev { left: -60px; }
              .slick-next { right: -60px; }
            }
          `}</style>
        </div>
      </Motion.div>

 <Motion.div variants={itemVariants} className='mb-20 max-w-4xl mx-auto'>
        <h3 className='text-3xl font-medium text-center text-purple-700 mb-8'>Our Story in Motion</h3>
        <div className="relative aspect-video w-full rounded-xl shadow-2xl overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=1`} // Autoplay, mute, loop, show controls
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Motion.div>

 
      <Motion.div variants={itemVariants} className='max-w-4xl mx-auto'>
        <h3 className='text-3xl font-medium text-center text-purple-700 mb-8'>Meet Our Leader</h3>
        <Slider {...mdCarouselSettings}>
          {mdPhotos.map((photo) => (
            <div key={photo.id} className='mr-5'>
              <div className="relative w-full h-64 flex  items-center m-5 justify-center px-2"> 
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  onError={(e) => {
                    console.error("Image failed to load:", photo.src, e);
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0  rounded-xl flex items-end p-4">
                  <p className="text-white text-md font-semibold">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>


      </Motion.div>
    </Motion.section>
  );
};

export default CompanyHighlightsSection;