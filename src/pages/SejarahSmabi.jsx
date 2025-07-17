import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SejarahSmabi from "../components/SejarahSmabi/Sejarah";
import DokumentasiPembangunan from "../components/SejarahSmabi/DokumentasiPembangunan";

const sejarahSmabi = () => {
  return (
    <div>
      <Navbar />
      <SejarahSmabi />
      <DokumentasiPembangunan />
      <Footer />
    </div>
  );
};

export default sejarahSmabi;
