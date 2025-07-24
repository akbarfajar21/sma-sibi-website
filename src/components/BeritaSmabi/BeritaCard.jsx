import React from "react";
import { Link } from "react-router-dom";

const BeritaCard = ({ berita }) => {
  return (
    <Link to={`/berita-detail/${berita.id}`} className="group">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
        <img
          src={berita.image}
          alt={berita.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-5">
          <p className="text-sm text-gray-500 mb-2">{berita.date}</p>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition duration-200">
            {berita.title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {berita.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BeritaCard;
