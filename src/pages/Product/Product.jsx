import React from 'react';
import { motion as Motion } from 'framer-motion';
import RoririProductsPage from './ProductHeading';
import { product1,product2,product3, product4 } from '../../assets/product/product';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      name: 'Nexemy',
      tagline: 'Empower Learning, Anywhere',
      description: 'Take control of your education with a modern e-learning platform. Nexemy offers personalized courses, real-time progress tracking, and engaging content to help students and professionals achieve their goals—on their schedule, at their pace.',
      imageUrl: product4,
    },
    {
      id: 2,
      name: 'Roriri’s Attendance App',
      tagline: 'Revolutionize Attendance Tracking',
      description: 'Revolutionize attendance tracking with Roriri’s easy-to-use app. From marking attendance to generating detailed reports, our app ensures accuracy and saves valuable time for organizations, schools, and teams alike.',
      imageUrl: product1, 
    },
    {
      id: 3,
      name: 'Referral Dashboard',
      tagline: 'Effortless Campaign Management',
      description: 'Track and manage referral campaigns effortlessly with an intuitive dashboard. Monitor performance, reward advocates, and drive business growth with actionable insights and seamless integrations.',
      imageUrl: product2, 
    },
    {
      id: 4,
      name: 'Sales Management Dashboard',
      tagline: 'Actionable Sales Insights',
      description: 'Actionable insights into your sales pipeline with a powerful dashboard. From lead tracking to revenue forecasting, manage your team’s performance and boost productivity—all in one place.',
      imageUrl: product3, 
    },
  ];


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen italic bg-gray-50 font-inter text-gray-900">
      <RoririProductsPage/>
      
      <header className="py-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white text-center rounded-b-3xl shadow-lg">
        <div className="container mx-auto px-6">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-medium mb-4 leading-tight"
          >
            Our Products
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
          >
            Excellence from concept to completion
          </Motion.p>
        </div>
      </header>

     
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {products.map((product) => (
              <Motion.div
                key={product.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row"
              >
                
                <div className="md:w-1/2 flex-shrink-0">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                    
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found`;
                    }}
                  />
                </div>

                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-indigo-700 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {product.description}
                  </p>
                  <Motion.button onClick={() => navigate(`/products/${product.id}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition-colors duration-300 self-start"
                  >
                    Learn More
                  </Motion.button>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
