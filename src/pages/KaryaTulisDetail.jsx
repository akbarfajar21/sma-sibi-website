import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../utils/SupaClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const KaryaTulisDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [karya, setKarya] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKaryaDetail = async () => {
      const { data, error } = await supabase
        .from("karya_tulis")
        .select("title, description, image_url, author, created_at")
        .eq("id", id)
        .limit(1);

      if (error) {
        console.error("Gagal mengambil detail karya:", error.message);
      } else {
        setKarya(data?.[0] || null);
      }
      setLoading(false);
    };

    fetchKaryaDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">Loading karya tulis...</p>
      </div>
    );
  }

  if (!karya) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-xl font-semibold text-red-600">
          Karya tulis tidak ditemukan.
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 mt-20">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-green-700 font-medium mb-6 hover:underline flex items-center gap-2"
        >
          <span className="text-xl">←</span> Kembali
        </button>

        {/* Info Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500 mb-6">
          <span className="text-green-700 font-semibold">
            ✍️ {karya.author}
          </span>
          <span>
            {new Date(karya.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            | <span className="font-semibold">SMAIT BAITUL 'ILMI</span>
          </span>
        </div>

        {/* Gambar */}
        <div className="flex justify-center my-10">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-md">
            <img
              src={karya.image_url}
              alt={karya.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {karya.title}
        </h1>
        <div className="h-1 w-24 bg-green-600 rounded-full mb-8"></div>

        {/* Isi Karya */}
        <div className="prose max-w-none text-gray-700 text-left space-y-4">
          {karya.description
            .split("\n")
            .filter((p) => p.trim() !== "")
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KaryaTulisDetail;
