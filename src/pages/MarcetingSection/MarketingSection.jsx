import React, { useState, useRef, useEffect, useCallback } from 'react';
import {motion as Motion, useMotionValue} from 'framer-motion';
import { client1, client2, client3, client4, client5 } from '../../assets/clients/clients';

const originalTestimonials = [
  {
    id: 1,
    quote: "The digital marketing services greatly boosted our conversion rates, with excellent follow-up and customer support.",
    author: "Plots To You",
     star: "⭐⭐⭐⭐",
    starvalue:"4.0",
    avatar: client1,
  },
  {
    id: 2,
    quote: "Roriri's tailored ERP solution transformed us completely. Grateful for the team's outstanding support and dedication throughout..",
    author: "Connect Training Institute",
    star: "⭐⭐⭐⭐⭐",
    starvalue:"5.0",
    avatar: client2,
  },
  {
    id: 3,
    quote: "Roriri ERP has reduced my workload and improved overall efficiency with just a few clicks. Thank you, Roriri ERP Team!",
    author: "Jeno Study Center",
    star: "⭐⭐⭐⭐⭐",
    starvalue:"5.0",
    avatar:client3,
  },
  {
    id: 4,
    quote: "The customized ERP has greatly improved our services, boosting revenue and efficiency. We truly appreciate the impact.",
    author: "Dilton IT Hub",
     star: "⭐⭐⭐⭐",
    starvalue:"4.0",
    avatar: client4,
  },
    {
    id: 5,
    quote: "The web applications have streamlined our operations, reduced workload, and significantly improved overall efficiency",
    author: "SD Tiles",
     star: "⭐⭐⭐⭐⭐",
    starvalue:"5.0",
    avatar: client5,
  },
];

const MarketingSection = () => {
  const buffer = 2; 
  const testimonials = [
    ...originalTestimonials.slice(-buffer),
    ...originalTestimonials,
    ...originalTestimonials.slice(0, buffer),
  ];

  const [currentIndex, setCurrentIndex] = useState(buffer);
  const carouselRef = useRef(null);
  const x = useMotionValue(0); 

  const [cardUnitWidth, setCardUnitWidth] = useState(350);
  const [carouselWidth, setCarouselWidth] = useState(0);

  const calculateConstraints = useCallback(() => {
    if (carouselRef.current) {
      const currentCarouselWidth = carouselRef.current.offsetWidth;
      setCarouselWidth(currentCarouselWidth);

      const cardElement = carouselRef.current.querySelector('.card-item');
      if (cardElement) {
        const cardActualWidth = cardElement.offsetWidth;
        const computedStyle = window.getComputedStyle(cardElement);
        const marginLeft = parseFloat(computedStyle.marginLeft);
        const marginRight = parseFloat(computedStyle.marginRight);
        const marginTotal = marginLeft + marginRight;

        const calculatedCardUnitWidth = cardActualWidth + marginTotal;
        setCardUnitWidth(calculatedCardUnitWidth);

        const totalContentWidth = testimonials.length * calculatedCardUnitWidth;
        const maxNegativeTranslate = -(totalContentWidth - currentCarouselWidth);

        return {
          left: maxNegativeTranslate,
          right: 0,
        };
      }
    }
    return { left: 0, right: 0 };
  }, [testimonials.length]);

  const [constraints, setConstraints] = useState(calculateConstraints);

  useEffect(() => {
    const updateDimensions = () => {
      setConstraints(calculateConstraints());
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [calculateConstraints]);


  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const threshold = 50;
    const velocityThreshold = 300;

    let newIndex = currentIndex;
    if (offset < -threshold || velocity < -velocityThreshold) {
      newIndex = Math.min(currentIndex + 1, testimonials.length - 1);
    } else if (offset > threshold || velocity > velocityThreshold) {
      newIndex = Math.max(currentIndex - 1, 0);
    }
    setCurrentIndex(newIndex);
  };

  const getTargetX = useCallback(() => {
    if (!carouselRef.current || testimonials.length === 0 || cardUnitWidth === 0) return 0;

    const cardActualWidth = cardUnitWidth - (parseFloat(window.getComputedStyle(carouselRef.current.querySelector('.card-item')).marginLeft) * 2);
    const offsetToCenterCard = (carouselWidth / 2) - (cardActualWidth / 2) - parseFloat(window.getComputedStyle(carouselRef.current.querySelector('.card-item')).marginLeft);

    let targetX = -(currentIndex * cardUnitWidth) + offsetToCenterCard;

    targetX = Math.max(targetX, constraints.left);
    targetX = Math.min(targetX, constraints.right);

    return targetX;
  }, [currentIndex, cardUnitWidth, carouselWidth, constraints, testimonials.length]);


  useEffect(() => {
    if (currentIndex >= testimonials.length - buffer) {
      const timeout = setTimeout(() => {
        x.set(getTargetX() - (originalTestimonials.length * cardUnitWidth));
        setCurrentIndex(buffer);
      }, 500);
      return () => clearTimeout(timeout);
    }
    else if (currentIndex < buffer) {
      const timeout = setTimeout(() => {
        x.set(getTargetX() + (originalTestimonials.length * cardUnitWidth));
        setCurrentIndex(testimonials.length - buffer - 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, x, getTargetX, originalTestimonials.length, testimonials.length, buffer, cardUnitWidth]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {

        if (prevIndex === testimonials.length - buffer - 1) {
          return buffer;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval); 
  }, [testimonials.length, buffer]);


  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden w-full">

        <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            You don't know marketing
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            ...but we're going to help. We send out weekly break downs of exactly what's working and what's not for the largest companies in the world. It's free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button className="bg-blue-600 cursor-target hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300">
              Join newsletter
            </button>
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12 min-h-[350px] lg:min-h-0">
          <Motion.div
            ref={carouselRef}
            className="flex w-full items-center justify-start py-4 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={constraints}
            onDragEnd={handleDragEnd}
            animate={{
                x: getTargetX() 
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Motion.div
                key={`${testimonial.id}-${index}`} 
                className="card-item flex-shrink-0 w-[90%] max-w-[350px] md:w-[350px] mx-2 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-100"
                variants={{
                    active: { opacity: 1, scale: 1 },
                    inactive: { opacity: 0.7, scale: 0.9 },
                }}
                animate={index >= buffer && index < testimonials.length - buffer && index === currentIndex ? "active" : "inactive"}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author}'s avatar`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mx-auto"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-gray-700">{testimonial.author}</p>
                <p className="text-xs text-gray-500">{testimonial.star} {testimonial.starvalue}</p>
              </Motion.div>
            ))}
          </Motion.div>
          <div className="absolute bottom-4 flex space-x-2">
            {originalTestimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index + buffer ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index + buffer)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;