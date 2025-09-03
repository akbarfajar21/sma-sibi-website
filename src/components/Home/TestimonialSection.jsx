import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import supabase from "../../utils/SupaClient";

const CARD_WIDTH = 260 + 24;

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [selectedTestimoni, setSelectedTestimoni] = useState(null);

  // Ambil data dari Supabase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimoni")
        .select("name, posisi, star, testimoni, profile_url")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal ambil testimoni:", error);
      } else {
        setTestimonials(data);
      }
    };

    fetchTestimonials();
  }, []);

  // Atur jumlah item per halaman
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleScroll = (direction) => {
    const maxIndex = testimonials.length - itemsPerPage;
    if (direction === "left") {
      setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1)); // kalau sudah awal, lompat ke akhir
    } else if (direction === "right") {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)); // kalau sudah akhir, balik ke awal
    }
  };

  // Auto scroll setiap 3 detik
  useEffect(() => {
    if (testimonials.length > itemsPerPage) {
      const interval = setInterval(() => {
        handleScroll("right");
      }, 3000); // 3 detik
      return () => clearInterval(interval);
    }
  }, [testimonials, itemsPerPage]);

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100 text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            Testimoni
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 bg-white border border-green-300 text-green-700 rounded-full shadow-sm hover:bg-green-100 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 bg-white border border-green-300 text-green-700 rounded-full shadow-sm hover:bg-green-100 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Konten */}
        {testimonials.length === 0 ? (
          <div className="text-black p-4 rounded-md text-center">
            Belum ada testimoni yang tersedia saat ini.
          </div>
        ) : (
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-6"
              style={{
                transform: `translateX(-${startIndex * CARD_WIDTH}px)`,
                minWidth: `${testimonials.length * CARD_WIDTH}px`,
              }}
            >
              {testimonials.map((testi, index) => {
                const isCenter =
                  index >= startIndex &&
                  index < startIndex + itemsPerPage &&
                  index === startIndex + Math.floor(itemsPerPage / 2);

                return (
                  <div
                    key={index}
                    className={`w-[260px] shrink-0 p-[2px] rounded-2xl transition-all duration-300 ease-in-out ${
                      isCenter ? "scale-105 z-10" : "scale-95 opacity-90"
                    }`}
                  >
                    <div className="bg-white border border-green-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {Array(testi.star)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">
                              ⭐
                            </span>
                          ))}
                      </div>

                      {/* Message */}
                      <p className="text-[14px] leading-relaxed italic text-slate-600 mb-3 line-clamp-3">
                        “{testi.testimoni}”
                      </p>
                      {testi.testimoni.length > 100 && (
                        <button
                          onClick={() => setSelectedTestimoni(testi)}
                          className="text-green-600 text-xs font-semibold hover:underline self-start"
                        >
                          Lihat Selengkapnya
                        </button>
                      )}

                      <hr className="my-2 border-slate-200" />

                      {/* Footer */}
                      <div className="flex items-center gap-3 mt-3">
                        {testi.profile_url ? (
                          <img
                            src={testi.profile_url}
                            alt={testi.name}
                            className="w-9 h-9 rounded-full object-cover border border-green-300"
                          />
                        ) : (
                          <div className="w-9 h-9 bg-green-300 text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                            {testi.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-sm text-green-800">
                            {testi.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {testi.posisi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Modal untuk full testimoni */}
      {selectedTestimoni && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setSelectedTestimoni(null)}
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              {selectedTestimoni.profile_url ? (
                <img
                  src={selectedTestimoni.profile_url}
                  alt={selectedTestimoni.name}
                  className="w-12 h-12 rounded-full object-cover border border-green-300"
                />
              ) : (
                <div className="w-12 h-12 bg-green-300 text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                  {selectedTestimoni.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="font-bold text-green-700">
                  {selectedTestimoni.name}
                </p>
                <p className="text-sm text-slate-500">
                  {selectedTestimoni.posisi}
                </p>
              </div>
            </div>
            {/* Full testimoni */}
            <p className="text-slate-700 leading-relaxed italic">
              “{selectedTestimoni.testimoni}”
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
