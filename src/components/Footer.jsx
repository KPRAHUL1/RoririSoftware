import React from 'react';
import { Facebook, Instagram, Linkedin, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo/LogoWeb.png';

const Footer = () => {
  const linksData = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/career' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Condition', href: '/terms-and-condition' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const aboutUsData = [
    { name: 'Our Story', href: '/about' },
    { name: 'Events', href: '/events' },
  ];

  const servicesData = [
    { name: 'Mobile app development', href: '/mobile-app-development' },
    { name: 'Website development', href: '/web-development' },
    { name: 'All Products & Trials', href: '/products' },
    { name: 'IT consulting', href: '/it-consulting' },
  ];

  const productData = [
    { name: 'ERP Solutions ', href: '/erp-solutions' },
    { name: 'Roriri Attedence App', href: '/products' },
    { name: 'Nexemy', href: '/products' },
  ];

  return (
    <footer className="  pt-10 pb-6 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-700 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Roriri Tech" className="h-10 rounded-md" />
            <span className="text-xl font-bold tracking-wide">Roriri Software Solutions</span>
          </div>
          <a href="mailto:hr@roririsoft.com" className="text-base md:text-lg flex items-center gap-2 hover:text-blue-400 transition">
            <Mail className="w-5 h-5" /> hr@roririsoft.com
          </a>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">
          {/* Left: Contact & Social */}
          <div className="flex-1 min-w-[220px] mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Contact Us</h3>
            <p className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2" /> (+91) 7338941579
            </p>
            <a href="mailto:contact@roririsoft.com" className="block hover:text-blue-400 transition mb-2">
              contact@roririsoft.com
            </a>
            <p className="text-sm mb-2">
              RORIRI IT PARK,<br />
              NALLANATHAPURAM, KALAKAD,<br />
              Tamil Nadu 629003
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/" className="hover:text-blue-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/roriri_it_park/" className="hover:text-pink-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/" className="hover:text-blue-500 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@roriri_soft?si=u-VGsjZ_rmU7-liH" className="hover:text-red-500 transition">
                <X className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right: Links, About, Services, Product */}
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Links</h3>
              <ul>
                {linksData.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">About Us</h3>
              <ul>
                {aboutUsData.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Services</h3>
              <ul>
                {servicesData.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">Product</h3>
              <ul>
                {productData.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="hover:text-blue-400 transition">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-xs mt-6">
          Copyright © 2025 Roriri. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
