import React from "react";

const KaryaCard = ({ karya }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={karya.image}
        alt={karya.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{karya.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{karya.date}</p>
        <p className="text-gray-600 mt-3 text-sm line-clamp-3">
          {karya.description}
        </p>
        <div className="mt-auto pt-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
            {karya.author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default KaryaCard;
