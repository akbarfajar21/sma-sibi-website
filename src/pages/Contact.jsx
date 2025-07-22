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
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import supabase from "../utils/SupaClient";

const Contact = () => {
  const [name, setName] = useState("");
  const [posisi, setPosisi] = useState("");
  const [star, setStar] = useState(0);
  const [testimoni, setTestimoni] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !posisi || !testimoni || star < 1 || star > 5) {
      alert("Mohon isi semua kolom dengan benar (rating 1-5)");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase
      .from("testimoni")
      .insert([{ name, posisi, testimoni, star }]);

    if (error) {
      console.error("Gagal kirim testimoni:", error.message);
      alert("Terjadi kesalahan saat mengirim testimoni.");
    } else {
      setSuccessMessage("Terima kasih! Testimoni kamu berhasil dikirim.");
      setName("");
      setPosisi("");
      setStar(0);
      setTestimoni("");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-emerald-50">
      <Navbar />

      <section className="pt-28 text-center px-6 mt-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Kami siap membantu Anda dengan informasi lebih lanjut tentang SMAIT
          Baitul Ilmi
        </p>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* Info Kontak & Media Sosial */}
        <div className="lg:col-span-2 space-y-10">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: FaPhone, title: "Telepon", content: "+62 851-7154-6791" },
              {
                icon: FaEnvelope,
                title: "Email",
                content: "info@smaitbaitulilmi.sch.id",
              },
              {
                icon: FaMapMarkerAlt,
                title: "Alamat",
                content: "Jl. Raya Jejalen-Jabir, Tambun Utara, Bekasi",
              },
              {
                icon: FaClock,
                title: "Jam Operasional",
                content: "Senin - Jumat: 07:00 - 16:00\nSabtu: 07:00 - 12:00",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <item.icon className="text-emerald-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl border shadow text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Ikuti Kami
            </h3>
            <div className="flex justify-center gap-4">
              {[FaInstagram, FaFacebookF, FaTelegramPlane, FaTwitter].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-gray-100 hover:bg-emerald-500 hover:text-white p-3 rounded-full transition"
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="flex justify-center gap-6 items-center bg-emerald-50 py-4 rounded-xl">
            <img src="/logo.png" alt="Logo" className="w-14" />
            <img src="/nama-sekolah-f.png" alt="Nama" className="w-40" />
          </div>
        </div>

        {/* Map dan Form Testimoni */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Lokasi Sekolah</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="260"
              className="rounded-xl border-none"
              loading="lazy"
              title="Lokasi SMAIT"
            ></iframe>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Berikan Testimoni
            </h3>
            {successMessage && (
              <div className="bg-green-50 text-green-700 border border-green-200 p-3 rounded mb-4 text-sm">
                {successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm"
                required
              />
              <input
                type="text"
                placeholder="Posisi (Siswa, Alumni, dll)"
                value={posisi}
                onChange={(e) => setPosisi(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm"
                required
              />
              <textarea
                rows="4"
                placeholder="Tulis testimoni kamu..."
                value={testimoni}
                onChange={(e) => setTestimoni(e.target.value)}
                className="w-full border p-3 rounded-lg text-sm resize-none"
                required
              ></textarea>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <FaStar
                    key={val}
                    onClick={() => setStar(val)}
                    className={`cursor-pointer text-xl transition ${
                      val <= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Testimoni"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
