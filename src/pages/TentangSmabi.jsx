import React from "react";
import Navbar from "../components/Navbar";
import SambutanKepalaSekolah from "../components/TentangKami/SambutanKepalaSekolah";
import Footer from "../components/Footer";  
import VisiMisiSection from "../components/TentangKami/VisiMisiSection";

const TentangSmabi = () => {
  return (
    <div>
      <Navbar />
      <SambutanKepalaSekolah />
      <VisiMisiSection />
      <Footer />
    </div>
  );
};

export default TentangSmabi;
