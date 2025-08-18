import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Share2, Heart } from 'lucide-react';
import products from './productData';
import ContactSection from './ContactSection';

const ProductDetails = () => {
   const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product ? product.imageUrl : '');
  const [activeTab, setActiveTab] = useState('overview');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-red-600">Product Not Found</h1>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleContactUs = () => {
    navigate('/contact')
  };

  return (
    <div className="italic min-h-screen bg-gray-50">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={selectedImage} alt={product.name} className="w-full h-96 object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? 'border-purple-500 shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-20 object-cover rounded" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
               
              </div>
              <h1 className="text-4xl font-bold text-indigo-700 mb-3">{product.name}</h1>
              <p className="text-xl text-purple-600 font-semibold mb-4">{product.tagline}</p>
              <div className="flex items-center space-x-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interested in this solution?</h3>
              <p className="text-gray-600 mb-4">
                Get in touch with our team to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                 href='#contact'
                  className=" text-center cursor-pointer flex-1 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                >
                  Get Quote & Demo
                </a>
                <button
                  onClick={handleContactUs} 
                  className="cursor-pointer flex-1 px-6 py-3 rounded-full font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="mt-16">
          <div className="border-b border-gray-200 flex space-x-8">
            {['overview', 'features', 'specifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium ${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === 'overview' && (
              <p className="text-gray-700 text-lg leading-relaxed">{product.detailedDescription}</p>
            )}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg shadow-sm flex items-start space-x-3">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mt-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div key={i} className={`px-6 py-4 ${i % 2 === 0 ? 'bg-gray-50' : ''}`}>
                    {spec}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div id='contact'>
          <ContactSection/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
