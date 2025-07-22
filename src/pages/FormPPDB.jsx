import React from "react";
import HeroPPDB from "../components/PPDB/HeroPPDB";
import WaktuPendaftaran from "../components/PPDB/WaktuPendaftaran";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SyaratDanAlur from "../components/PPDB/SyaratDanAlur";
import BiayaPendidikan from "../components/PPDB/BiayaPendidikan";

const FormPPDB = () => {
  return (
    <div>
      <Navbar />
      <HeroPPDB />
      <WaktuPendaftaran />
      <SyaratDanAlur />
      <BiayaPendidikan />
      <Footer />
    </div>
  );
};

export default FormPPDB;
