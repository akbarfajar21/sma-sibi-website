import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KaryaCard from "../components/KaryaCard";
import supabase from "../utils/SupaClient";
import { useNavigate } from "react-router-dom";

const KaryaTulis = () => {
  const [karya, setKarya] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // mobile jika <768px
  const [selectedAuthor, setSelectedAuthor] = useState("Guru"); // default filter mobile
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchKarya = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("karya_tulis")
        .select("id, title, description, image_url, author, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Gagal ambil karya tulis:", error.message);
      } else {
        setKarya(data);
      }
      setLoading(false);
    };

    fetchKarya();
  }, []);

  const renderKaryaList = (authorType) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {loading ? (
        <p className="col-span-full text-center text-gray-400 text-sm animate-pulse">
          Memuat karya tulis...
        </p>
      ) : karya.filter((item) => item.author === authorType).length > 0 ? (
        karya
          .filter((item) => item.author === authorType)
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/karya-tulis/${item.id}`)}
              className="cursor-pointer"
            >
              <KaryaCard
                karya={{
                  id: item.id,
                  title: item.title,
                  date: new Date(item.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }),
                  image: item.image_url,
                  description: item.description,
                  author: item.author,
                }}
              />
            </div>
          ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Tidak ada karya tulis ditemukan.
        </p>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

      <section className="bg-yellow-100 px-4 py-12 md:px-32 mt-28">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Karya <span className="text-black font-bold">Tulis</span>
          </h2>
          <p className="uppercase text-sm tracking-wider mt-2 text-gray-700">
            SMAIT BAITUL ’ILMI
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-32">
        {isMobile ? (
          <>
            <div className="mb-6">
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl"
              >
                <option value="Guru">Karya Tulis Guru</option>
                <option value="Murid">Karya Tulis Murid</option>
              </select>
            </div>
            {renderKaryaList(selectedAuthor)}
          </>
        ) : (
          <>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Karya Tulis Guru
              </h3>
              {renderKaryaList("Guru")}
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Karya Tulis Murid
              </h3>
              {renderKaryaList("Murid")}
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default KaryaTulis;
