import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import './footer.css';

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
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Website Development', href: '/web-development' },
    { name: 'All Products & Trials', href: '/products' },
    { name: 'IT Consulting', href: '/it-consulting' },
  ];

  const productData = [
    { name: 'ERP Solutions', href: '/erp-solutions' },
    { name: 'Attendance App', href: '/products' },
    { name: 'Nexemy', href: '/products' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="../assets/logo/LogoWeb.png" alt="Company Logo" />
          </div>
          <a href="mailto:hr@aloinfotech.in" className="footer-email">
            <Mail className="icon" /> hr@roririsoft.com
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><Phone className="icon" /> (+91) 7338941579</p>
            <a href="mailto:contact@aloinfotech.in">contact@roririsoft.com</a>
            <p>RORIRI IT PARK, NALLANATHAPURAM, KALAKAD, Tamil Nadu 629003</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/RoririSoftwareSolutionsPvtLtd/"><Facebook className="icon" /></a>
              <a href="https://www.instagram.com/roriri_it_park/"><Instagram className="icon" /></a>
              <a href="https://www.linkedin.com/company/roriri-software-solutions-pvt-ltd/"><Linkedin className="icon" /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              {linksData.map((link, index) => (
                <li key={index}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              {aboutUsData.map((link, index) => (
                <li key={index}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              {servicesData.map((link, index) => (
                <li key={index}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              {productData.map((link, index) => (
                <li key={index}><a href={link.href}>{link.name}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Roriri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;