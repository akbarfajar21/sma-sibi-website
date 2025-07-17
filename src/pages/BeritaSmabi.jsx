import React, { useEffect, useState } from "react";
import supabase from "../utils/SupaClient";
import BeritaCard from "../components/BeritaSmabi/BeritaCard";
import Navbar from "../components/Navbar";

const BeritaSmabi = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("berita")
        .select("id, judul, teks, image_url, created_by, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal ambil berita:", error.message);
      } else {
        setBerita(data);
      }
    };

    fetchBerita();
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-yellow-100 px-4 py-12 md:px-32 mt-28">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Berita <span className="text-black font-bold">Terkini</span>
          </h2>
          <p className="uppercase text-sm tracking-wider mt-2 text-gray-700">
            SMAIT BAITUL ’ILMI
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {berita.length > 0 ? (
            berita.map((item) => (
              <BeritaCard
                key={item.id}
                berita={{
                  id: item.id,
                  title: item.judul,
                  date: new Date(item.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }),
                  image: item.image_url,
                  description: item.teks,
                }}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Tidak ada berita ditemukan.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default BeritaSmabi;
