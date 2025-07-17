import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background image */}
      <img
        src="/foto-sekolah.png"
        alt="Background Sekolah"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 text-white text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Halaman tidak ditemukan</p>
        <Link
          to="/"
          className="bg-white text-green-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
