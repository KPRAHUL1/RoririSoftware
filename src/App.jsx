import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Internship from "./pages/Internship/Internship";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/internship" element={<Internship/>}/>
    </Routes>
    <Footer/>
    </>
   
  );
};

export default App;
