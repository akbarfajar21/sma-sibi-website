import React, { useEffect, useState } from "react";
import supabase from "../../utils/SupaClient";

const AlumniSection = () => {
  const [universitas, setUniversitas] = useState([]);

  // Ambil data dari tabel 'universitas' di Supabase
  useEffect(() => {
    const fetchUniversitas = async () => {
      const { data, error } = await supabase
        .from("universitas")
        .select("nama, logo_url")
        .order("nama", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data universitas:", error.message);
      } else {
        setUniversitas(data);
      }
    };

    fetchUniversitas();
  }, []);

  return (
    <section className="bg-yellow-50 py-16 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Sebaran <span className="text-green-700">Alumni</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">SMAIT BAITUL ’ILMI</p>
        </div>

        {/* Grid Logo Universitas */}
        {universitas.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 items-center">
            {universitas.map((item, index) => (
              <img
                key={item.nama + index}
                src={item.logo_url}
                alt={item.nama}
                className="w-28 h-auto object-contain mx-auto transition-transform duration-300 hover:scale-105"
                title={item.nama}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm mt-8">
            Data universitas belum tersedia.
          </p>
        )}
      </div>
    </section>
  );
};

export default AlumniSection;
