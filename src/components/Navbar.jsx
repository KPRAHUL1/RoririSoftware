import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatedHamburgerButton } from "./ui/AnimatedHamburgerButtom/AnimatedHamburgerButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [activePath, setActivePath] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      path: "/about",
      submenu: [
        { title: "Products", path: "/products" },
        { title: "Events", path: "/events" },
      ],
    },
    {
      title: "Services",
      path: "/services",
      submenu: [
        { title: "ERP Solutions", path: "/services/erp-solutions" },
        { title: `Mobile Application`, path: "/services/mobile-app-development" },
        { title: "Web Development", path: "/services/web-app-development" },
        { title: "Digital Marketing", path: "/services/digital-marketing" },
        { title: "Internship", path: "/services/internship" },
      ],
    },
    { title: "Internship", path: "/internship" },
    { title: "Careers", path: "/careers" },
  ];

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Motion.nav
      className={`
        fixed top-0 left-0 w-full z-50 bg-white shadow-lg backdrop-blur-md bg-opacity-90 px-4 py-3 md:px-6 md:py-4 flex justify-between items-center rounded-b-lg
        transition-transform duration-300 ease-in-out
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
      `}
      initial={false}
      animate={{ y: showNavbar ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src="LogoWeb.png"
          alt="Roriri Logo"
          className="w-24 md:w-36 rounded-md"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x40/000000/FFFFFF?text=Roriri"; }}
        />
      </div>

      <ul className="hidden lg:flex gap-6 lg:gap-8 items-center">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.path}
              className={`
                flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50
                ${activePath === item.path ? 'text-blue-600 bg-blue-50' : ''}
              `}
              onClick={() => setActivePath(item.path)}
            >
              {item.title}
              {item.submenu?.length > 0 && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
            </a>
            {item.submenu?.length > 0 && (
              <Motion.ul
                className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg mt-0 p-2 min-w-[200px] hidden group-hover:block z-10 border border-gray-100 animate-fade-in-up pt-2"
              >
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="px-2 py-2 flex hover:bg-blue-50 rounded-md transition-colors duration-200">
                    <a
                      href={subItem.path}
                      className={`
                        block text-gray-700 hover:text-blue-600 font-normal
                        ${activePath === subItem.path ? 'text-blue-600 font-semibold' : ''}
                      `}
                      onClick={() => setActivePath(subItem.path)}
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </Motion.ul>
            )}
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <a
          href="/book-consultation"
          className="bg-black cursor-target text-white px-5 py-2.5 rounded-lg shadow-lg  transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Let's Talk
        </a>
      </div>

      <div className="lg:hidden flex gap-3 items-center">
        <div className="hidden md:block">
          <a
            href="/book-consultation"
            className="bg-black cursor-target text-white px-5 py-2.5 rounded-lg shadow-lg  transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Let's Talk
          </a>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className=" text-gray-700 hover:text-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <AnimatedHamburgerButton />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            className="absolute top-full left-0 w-full bg-white shadow-xl p-4 lg:hidden z-40 border-t border-gray-100 rounded-b-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <Motion.li key={index} variants={listItemVariants}>
                  <div
                    onClick={() => item.submenu ? toggleSubMenu(index) : setIsMobileMenuOpen(false)}
                    className={`
                      flex justify-between items-center text-gray-800 font-medium cursor-pointer py-2 px-3 rounded-md hover:bg-blue-50 transition-colors duration-200
                      ${activePath === item.path ? 'text-blue-600 bg-blue-50' : ''}
                    `}
                  >
                    <a
                      href={item.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActivePath(item.path);
                      }}
                    >
                      {item.title}
                    </a>
                    {item.submenu?.length > 0 && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${openSubMenuIndex === index ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                  {item.submenu?.length > 0 && openSubMenuIndex === index && (
                    <Motion.ul
                      className="ml-4 mt-2 space-y-1 border-l-2 border-blue-200 pl-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Motion.li key={subIndex} variants={listItemVariants}>
                          <a
                            href={subItem.path}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setActivePath(subItem.path);
                            }}
                            className={`
                              block text-gray-600 p-2 hover:text-blue-600 py-1 px-2 rounded-md hover:bg-blue-50 transition-colors duration-200
                              ${activePath === subItem.path ? 'text-blue-600 font-semibold' : ''}
                            `}
                          >
                            {subItem.title}
                          </a>
                        </Motion.li>
                      ))}
                    </Motion.ul>
                  )}
                </Motion.li>
              ))}
              <Motion.li variants={listItemVariants} className="mt-4">
                <a
                  href="/book-consultation"
                  className="bg-black text-white px-4 py-2.5 rounded-lg shadow-lg hover:bg-blue-700 block text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </Motion.li>
            </ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;