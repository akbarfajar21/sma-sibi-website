import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import supabase from "../../utils/SupaClient";

const ProgramSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari Supabase
  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("program_unggulan")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Gagal ambil data program:", error.message);
      } else {
        setPrograms(data);
      }
      setLoading(false);
    };

    fetchPrograms();
  }, []);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const displayedPrograms = showAll ? programs : programs.slice(0, 3);

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

      {/* Loading */}
      {loading ? (
        <div className="text-center text-gray-500">Memuat program...</div>
      ) : (
        <>
          {/* Cards */}
          <div className="grid gap-8 md:gap-10 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayedPrograms.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Gambar */}
                <div className="p-3">
                  <div className="h-48 overflow-hidden rounded-lg">
                    <img
                      src={item.foto_url}
                      alt={item.nama_program}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Konten */}
                <div className="px-5 pb-5 pt-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.nama_program}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Toggle */}
          {programs.length > 3 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-5 py-2.5 bg-green-800 text-white rounded-full text-sm font-medium hover:bg-green-900 transition"
              >
                {showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProgramSection;
