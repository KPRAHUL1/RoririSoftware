import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
import { Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Internship from "./pages/Internship/Internship";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Products from "./pages/Product/components/ProductCard";
import Product from "./pages/Product/Product";
import MobileAppDevelopmentPage from "./pages/Services/components/MobileApp-development";
import ERPSolutions from "./pages/Services/components/ERP_solution";
import WebDevelopment from "./pages/Services/components/Web_developmentDetailsPage";
import IT_Consulting from "./pages/Services/components/IT_Consulting";
import EventPage from "./pages/Event/Event";
import Career from "./pages/Career/Career"
import JobDescriptionPage from "./pages/Career/JobDescription";
import JobApplicationForm from "./pages/Career/components/JobApplicationForm";
import ServicesPage from "./pages/Services/service";
import TermsAndConditions from "./pages/TermsCondition/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

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
           <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product/>}/>
           <Route path="/events" element={<EventPage/>}/>
           <Route path="/terms-and-condition" element={<TermsAndConditions/>}/>
           <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
           <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage/>}/>
          <Route path="/services/web-app-development" element={<WebDevelopment/>}/>
          <Route path="/services/erp-solutions" element={<ERPSolutions/>}/>
          <Route path="/services/it-consulting" element={<IT_Consulting/>}/>
          <Route path="/services/internship" element={<Internship />} />
            <Route path="/careers" element={<Career/>}/>
           <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
           <Route path="/jobapplicationform" element={<JobApplicationForm/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;