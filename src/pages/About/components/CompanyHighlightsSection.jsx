import React from 'react';
import { motion as Motion } from 'framer-motion';
import Slider from 'react-slick'; 
import {video2} from '../../../assets/office/office'
import founder4 from '../../../assets/founderimage/002.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { founder2, founder3, founder1 } from '../../../assets/founderimage/founder';


const mdPhotos = [
  { id: 1, src: founder1},
  { id: 2, src: founder2},
  { id: 3, src: founder3 },
  { id: 3, src: founder4 },
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

  // const mdCarouselSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, 
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false, 
  //   responsive: [
  //     {
  //       breakpoint: 1024, 
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 768, 
  //       settings: {
  //         slidesToShow: 2, 
  //         slidesToScroll: 1,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 640, 
  //       settings: {
  //         slidesToShow: 1, 
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <Motion.section
      className='py-20 px-4 bg-white italic'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
     

 <Motion.div variants={itemVariants} className='mb-20 max-w-4xl mx-auto'>
        <h3 className='text-3xl font-medium text-center text-purple-700 mb-8'>Our Story in Motion</h3>
         <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}> 
              <video
  src={video2}
  controls
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
>
  Your browser does not support the video tag.
</video>
            </div>
      </Motion.div>
    </Motion.section>
  );
};

export default CompanyHighlightsSection;