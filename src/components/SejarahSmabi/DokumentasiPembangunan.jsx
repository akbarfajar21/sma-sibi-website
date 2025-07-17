import React from "react";

const pembangunanData = [
  {
    image: "/pembangunan/pembangunan-masjid-1.jpg",
    caption: "Pembangunan Awal Masjid Sekolah",
  },
  {
    image: "/pembangunan/pembangunan-masjid-2.jpg",
    caption: "Progres Struktur Masjid pada Tahap Kedua",
  },
  {
    image: "/pembangunan/pembangunan-sekolah-1.jpg",
    caption: "Pondasi dan Kerangka Awal Bangunan Sekolah",
  },
  {
    image: "/pembangunan/pembangunan-sekolah-2.jpg",
    caption: "Pengerjaan Tembok dan Atap Gedung Sekolah",
  },
  {
    image: "/pembangunan/masjid.jpg",
    caption: "Masjid Sekolah Setelah Selesai Dibangun",
  },
];

const DokumentasiPembangunan = () => {
  return (
    <section className="py-20 px-6 md:px-32 bg-green-600 text-gray-800">
      {/* Judul */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-800">
          Dokumentasi <span className="text-white">Pembangunan</span>
        </h2>
        <p className="text-sm md:text-base text-white mt-3">
          Progres pembangunan SMAIT Baitul ‘Ilmi dari awal hingga selesai
        </p>
      </div>

      {/* Galeri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {pembangunanData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition duration-300" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-medium text-gray-700">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DokumentasiPembangunan;
