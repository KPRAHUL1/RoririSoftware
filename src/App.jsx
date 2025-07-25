import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
import { Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Internship from "./pages/Internship/Internship";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="pt-[72px] md:pt-[88px] lg:pt-[88px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;