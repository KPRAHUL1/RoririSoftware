
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import products  from './productData';
import TextType from '../../../../components/ui/TextType/TypeWriter';
import {motion as Motion } from 'framer-motion';


const ProductsList = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen italic bg-gray-50 font-inter text-center text-gray-900">
         <header className=" py-12 px-4">
    <h1 className="text-4xl sm:text-5xl font-medium mb-4 text-purple-500">Our Products</h1>
    <div className="text-2xl sm:text-3xl md:text-6xl font-semibold text-gray-800 flex flex-wrap justify-center items-center gap-2">
      <span>Exploring Excellence in</span>
      <TextType
        text={[' every creation', ' every solution']}
        className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text  text-transparent"
      />
    </div>
  </header>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16">
            {products.map((product) => (
              <Motion.div
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <div className="md:w-1/2 flex-shrink-0 relative z-20">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-64 md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none" />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center z-20">
                  <h3 className="text-3xl font-medium text-indigo-700 mb-2">{product.name}</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">{product.tagline}</p>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition duration-300 self-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/products/${product.id}`);
                    }}
                  >
                    View Details
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

export default ProductsList;