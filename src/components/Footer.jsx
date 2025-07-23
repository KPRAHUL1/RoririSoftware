import React from 'react';
import { Facebook, Instagram, Linkedin, X, Phone, Mail } from 'lucide-react';

const Footer = () => {
  // Define link data for each section
  const linksData = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Faq', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms and Condition', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const aboutUsData = [
    { name: 'Our Story', href: '#' },
    { name: 'Events', href: '#' },
  ];

  const servicesData = [
    { name: 'AI services', href: '#' },
    { name: 'Mobile app development', href: '#' },
    { name: 'Website development', href: '#' },
    { name: 'Block chain development', href: '#' },
    { name: 'All Products & Trials', href: '#' },
    { name: 'IT consulting', href: '#' },
  ];

  const productData = [
    { name: 'Alo Invoice', href: '#' },
    { name: 'Fast X', href: '#' },
    { name: 'Alo Foodie', href: '#' },
  ];

  return (
    <footer className=" text-gray-600 bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Email */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-gray-700 mb-8">
          <div className="mb-4 sm:mb-0">
            {/* Using a placeholder image for the logo */}
            <img
              src="LogoWeb.png"
              alt="Roriri Tech"
              className="h-10 rounded-md"
            />
          </div>
          <a href="mailto:hr@aloinfotech.in" className="text-blue-400 transition duration-300 flex items-center">
            <Mail className="w-5 h-5 mr-2" /> hr@roririsoft.com
          </a>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" /> (+91) 7338941579
            </p>
            <a href="mailto:contact@aloinfotech.in" className="block hover:text-blue-400 transition duration-300 mb-2">
              contact@roririsoft.com
            </a>
            <p className="text-sm">
              RORIRI IT PARK,  <br />
              NALLANATHAPURAM,KALAKAD, <br /> Tamil Nadu 629003
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 transition duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400  transition duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400  transition duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400  transition duration-300">
                <X className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Links</h3>
            <ul>
              {linksData.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-blue-400 transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              {aboutUsData.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-blue-400 transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Services</h3>
            <ul>
              {servicesData.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-blue-400 transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Product</h3>
            <ul>
              {productData.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:text-blue-400 transition duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-700 text-sm">
          Copyright © 2025 Roriri. All rights reserved.
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
