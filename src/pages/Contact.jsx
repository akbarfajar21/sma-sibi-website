import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaStar,
} from "react-icons/fa";
import supabase from "../utils/SupaClient";

const Contact = () => {
  const [name, setName] = useState("");
  const [posisi, setPosisi] = useState("");
  const [star, setStar] = useState(0);
  const [testimoni, setTestimoni] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !posisi || !testimoni || star < 1 || star > 5) {
      alert("Mohon isi semua kolom dengan benar (rating 1-5)");
      return;
    }

    const { error } = await supabase.from("testimoni").insert([
      {
        name,
        posisi,
        testimoni,
        star,
      },
    ]);

    if (error) {
      console.error("Gagal kirim testimoni:", error.message);
      alert("Terjadi kesalahan saat mengirim testimoni.");
    } else {
      setSuccessMessage("Terima kasih! Testimoni kamu berhasil dikirim.");
      setName("");
      setPosisi("");
      setStar(0);
      setTestimoni("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-yellow-100 py-20 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 md:mb-0">
            Kontak Kami
          </h2>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Lokasi Sekolah
          </h2>
        </div>
      </section>

      {/* Konten */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Kontak Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaPhone className="text-2xl text-green-700 mt-1" />
              <p className="text-gray-800 text-lg font-medium">
                +62 851-7154-6791
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-2xl text-green-700 mt-1" />
              <p className="text-gray-800 text-base leading-relaxed">
                Jl. Raya Jejalen-Jabir, Jejalenjaya, Kec. Tambun Utara,
                <br />
                Kabupaten Bekasi, Jawa Barat 17510
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              {[FaInstagram, FaFacebookF, FaTelegramPlane, FaTwitter].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-gray-800 hover:bg-green-700 text-white p-3 rounded-full transition"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              )}
            </div>

            <div className="mt-10 ml-2 flex items-center gap-4">
              <img src="/logo.png" alt="Logo SMAIT" className="w-24" />
              <img
                src="/nama-sekolah-f.png"
                alt="Nama Sekolah"
                className="w-36"
              />
            </div>
          </div>

          {/* Maps + Form Testimoni */}
          <div className="space-y-12">
            {/* Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4973.536408748503!2d107.07228219999999!3d-6.2063405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698958fdb1a681%3A0xb737581e2c64f1ee!2sSMA%20IT%20BAITUL%20ILMI!5e1!3m2!1sid!2sid!4v1750778740974!5m2!1sid!2sid"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMAIT Baitul Ilmi"
              />
            </div>

            {/* Form Testimoni */}
            <div className="bg-yellow-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Tinggalkan Testimoni
              </h3>
              {successMessage && (
                <p className="text-green-600 text-sm mb-4">{successMessage}</p>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full p-3 border rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Posisi (Orang Tua, Alumni, Siswa, dll)
                  </label>
                  <input
                    type="text"
                    value={posisi}
                    onChange={(e) => setPosisi(e.target.value)}
                    placeholder="Contoh: Orang Tua Siswa"
                    className="w-full p-3 border rounded-lg text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Testimoni
                  </label>
                  <textarea
                    value={testimoni}
                    onChange={(e) => setTestimoni(e.target.value)}
                    placeholder="Tuliskan testimoni Anda..."
                    className="w-full p-3 border rounded-lg text-sm"
                    rows="4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-700">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <FaStar
                        key={val}
                        onClick={() => setStar(val)}
                        className={`cursor-pointer text-xl ${
                          val <= star ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full text-sm"
                >
                  Kirim Testimoni
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
