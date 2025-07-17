import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  const phoneNumber = "6285171546791";
  const message = encodeURIComponent(
    "Assalamu’alaikum, saya ingin bertanya seputar PPDB SMAIT BAITUL 'ILMI."
  );

  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      <div className="opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-3 py-1 rounded-md mb-2 shadow-lg">
        Seputar PPDB?
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl animate-bounce-slow hover:animate-none transition-all duration-300"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
