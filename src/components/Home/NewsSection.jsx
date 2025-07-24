import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- Tambah ini
import AOS from "aos";
import "aos/dist/aos.css";
import supabase from "../../utils/SupaClient";

const NewsSection = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate(); // <-- Tambah ini

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("id, judul, image_url, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal mengambil data berita:", error.message);
      } else {
        setBeritaList(data);
      }
    };

    fetchBerita();
  }, []);

  const visibleNews = showAll ? beritaList : beritaList.slice(0, 4);

  return (
    <section className="py-20 bg-white px-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Berita <span className="text-green-700">Terbaru</span>
        </h2>

        {beritaList.length === 0 ? (
          <div
            className="text-black p-4 rounded-md text-center"
            data-aos="fade-up"
          >
            Belum ada berita yang tersedia saat ini.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {visibleNews.map((berita, idx) => (
                <div
                  key={berita.id}
                  onClick={() => navigate(`/berita-detail/${berita.id}`)} // <-- Navigasi ke detail
                  className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <img
                    src={berita.image_url}
                    alt={berita.judul}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4 text-left">
                    <h3 className="font-semibold text-base text-gray-800 mb-2">
                      {berita.judul}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(berita.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      • SMAIT BAITUL ’ILMI
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="text-center mt-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 rounded-full bg-green-700 text-white text-sm font-semibold hover:bg-green-800 transition duration-300"
              >
                {showAll ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
