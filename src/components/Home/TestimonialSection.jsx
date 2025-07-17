import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import supabase from "../../utils/SupaClient";

const CARD_WIDTH = 300 + 24;

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  // Atur jumlah item per halaman berdasarkan ukuran layar
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
    if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (direction === "right" && startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-green-100 text-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">Testimoni</h2>
          <div className="flex gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 bg-white border border-green-300 text-green-700 rounded-full shadow-sm hover:bg-green-100 disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 bg-white border border-green-300 text-green-700 rounded-full shadow-sm hover:bg-green-100 disabled:opacity-50"
              disabled={startIndex >= testimonials.length - itemsPerPage}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {testimonials.length === 0 ? (
          <div className="  text-black p-4 rounded-md text-center">
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
                    className={`w-[300px] shrink-0 p-[2px] rounded-2xl transition-all duration-300 ease-in-out ${
                      isCenter ? "scale-105 z-10" : "scale-95 opacity-90"
                    }`}
                  >
                    <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between h-full">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {Array(testi.star)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-yellow-400 text-base">
                              ⭐
                            </span>
                          ))}
                      </div>

                      {/* Message */}
                      <p className="text-[15px] leading-relaxed italic text-slate-600 mb-4">
                        “{testi.testimoni}”
                      </p>
                      <hr className="my-2 border-slate-200" />

                      {/* Footer */}
                      <div className="flex items-center gap-3 mt-4">
                        {testi.profile_url ? (
                          <img
                            src={testi.profile_url}
                            alt={testi.name}
                            className="w-10 h-10 rounded-full object-cover border border-green-300"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-green-300 text-white rounded-full flex items-center justify-center font-bold shadow-sm">
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
    </section>
  );
};

export default TestimonialSection;
