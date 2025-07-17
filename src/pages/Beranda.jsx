import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ProgramSection from "../components/Home/ProgramSection";
import VideoSection from "../components/Home/VideoSection";
import VisionMissionSection from "../components/Home/VisionMissionSection";
import AlumniSection from "../components/Home/AlumniSection";
import NewsSection from "../components/Home/NewsSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div>
      <HeroSection />
      <ProgramSection />
      <VideoSection />
      <VisionMissionSection />
      <AlumniSection />
      <NewsSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Beranda;
