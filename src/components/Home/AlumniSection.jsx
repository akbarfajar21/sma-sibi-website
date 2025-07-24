import React, { useEffect, useState } from "react";
import supabase from "../../utils/SupaClient";

const AlumniSection = () => {
  const [universitas, setUniversitas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari tabel 'universitas' di Supabase
  useEffect(() => {
    const fetchUniversitas = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("universitas")
        .select("nama, logo_url")
        .order("nama", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data universitas:", error.message);
      } else {
        setUniversitas(data || []);
      }
      setLoading(false);
    };

    fetchUniversitas();
  }, []);

  // Duplikasi data untuk infinite scroll yang benar-benar seamless
  const duplicatedUniversitas = [
    ...universitas,
    ...universitas,
    ...universitas,
    ...universitas,
    ...universitas,
    ...universitas,
  ];

  return (
    <section className="bg-yellow-50 py-16 px-4 mt-12">
      <div className="mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sebaran <span className="text-green-700">Alumni</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">SMAIT BAITUL 'ILMI</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-green-700 bg-white transition ease-in-out duration-150">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Memuat data universitas...
            </div>
          </div>
        ) : universitas.length > 0 ? (
          <div className="relative overflow-hidden">
            {/* Container untuk infinite scroll */}
            <div className="flex">
              <div
                className="flex animate-scroll space-x-8"
                style={{
                  animation: `scroll ${
                    universitas.length * 2.5
                  }s linear infinite`,
                  width: `${duplicatedUniversitas.length * 120}px`,
                }}
              >
                {duplicatedUniversitas.map((item, index) => (
                  <div
                    key={`${item.nama}-${index}`}
                    className="flex flex-col items-center group flex-shrink-0"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={item.logo_url}
                        alt={item.nama}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f3f4f6'/%3E%3Ctext x='40' y='40' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='12'%3ELogo%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center leading-tight max-w-20 sm:max-w-24 line-clamp-2">
                      {item.nama}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-2xl">📚</span>
            </div>
            <p className="text-gray-500 text-sm">
              Data universitas belum tersedia.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AlumniSection;
