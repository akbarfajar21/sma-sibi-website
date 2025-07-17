import React, { useState, useEffect } from "react";
import {
  FaQuran,
  FaChalkboardTeacher,
  FaBook,
  FaMosque,
  FaHome,
  FaLaptop,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const programs = [
  {
    title: "Tahfidz Al-Quran",
    img: "/program/tahfidz.jpg",
    desc: "Program unggulan untuk mencetak generasi penghafal Al-Qur'an dengan metode yang sistematis.",
    icon: <FaQuran className="text-white text-base" />,
  },
  {
    title: "Micro Teaching",
    img: "/program/micro-teaching.jpg",
    desc: "Melatih siswa untuk memiliki keterampilan mengajar dengan pendekatan praktik langsung.",
    icon: <FaChalkboardTeacher className="text-white text-base" />,
  },
  {
    title: "Kurikulum Diknas",
    img: "/program/kurikulum.jpg",
    desc: "Mengacu pada kurikulum nasional dengan integrasi nilai-nilai Islam.",
    icon: <FaBook className="text-white text-base" />,
  },
  {
    title: "Dirosah Islamiyyah",
    img: "/program/dirosah.jpg",
    desc: "Pembelajaran intensif ilmu-ilmu keislaman berbasis manhaj salaf.",
    icon: <FaMosque className="text-white text-base" />,
  },
  {
    title: "Life Skill & Home Management",
    img: "/program/life-skill.jpg",
    desc: "Pembinaan keterampilan hidup dan manajemen rumah tangga untuk siswa.",
    icon: <FaHome className="text-white text-base" />,
  },
  {
    title: "Teknologi Informasi",
    img: "/program/it.jpg",
    desc: "Pengenalan teknologi dan komputerisasi untuk menunjang era digital.",
    icon: <FaLaptop className="text-white text-base" />,
  },
];

const ProgramSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPrograms = showAll ? programs : programs.slice(0, 3);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="unggulan" className="px-4 md:px-12 mt-12">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#009F3C] mb-2">
          Program Unggulan
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-medium">
          SMAIT BAITUL ‘ILMI
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:gap-10 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPrograms.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Gambar */}
            <div className="relative p-3">
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Buletan ikon */}
              <div className="absolute -bottom-2 right-4 w-9 h-9 bg-green-600 rounded-full flex items-center justify-center shadow">
                {item.icon}
              </div>
            </div>

            {/* Konten */}
            <div className="px-5 pb-5 pt-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Toggle */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-2.5 bg-green-800 text-white rounded-full text-sm font-medium hover:bg-green-900 transition"
        >
          {showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
        </button>
      </div>
    </section>
  );
};

export default ProgramSection;
