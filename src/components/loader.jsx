import React from "react";
import logo from '../assets/logo/loader.png'
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

        <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
