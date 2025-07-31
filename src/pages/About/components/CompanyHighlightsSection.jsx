import React from 'react';
import { motion as Motion } from 'framer-motion';
import Slider from 'react-slick'; 

import founder1 from '../../../assets/founderimage/002.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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