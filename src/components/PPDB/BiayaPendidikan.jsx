import React from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";

// Komponen Card untuk setiap jenis biaya
const BiayaCard = ({ title, price, description, items = [] }) => (
  <div className="group bg-white hover:bg-gradient-to-br hover:from-white hover:to-green-50 shadow-lg hover:shadow-xl rounded-xl p-6 border-l-4 border-green-600 transition-all duration-300 transform hover:-translate-y-1">
    <div className="space-y-4">
      {/* Header Card */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-green-700 group-hover:text-green-800 transition-colors">
          {title}
        </h3>
        <div className="text-2xl font-extrabold text-gray-900 tracking-tight">
          {price}
        </div>
      </div>

      {/* Deskripsi */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* List Items */}
      {items.length > 0 && (
        <ul className="space-y-2 mt-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-gray-700"
            >
              <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const BiayaPendidikan = () => {
  // Data biaya pendidikan
  const biayaData = [
    {
      title: "Biaya Pendaftaran",
      price: "Rp 250.000",
      description:
        "Dibayarkan di awal sebelum mengisi formulir pendaftaran. Mencakup seluruh proses seleksi:",
      items: [
        "Biaya ujian seleksi masuk",
        "Tes tertulis dan kompetensi",
        "Interview anak dan orangtua",
      ],
    },
    {
      title: "Biaya Masuk",
      price: "Rp 6.585.000",
      description:
        "Investasi awal pendidikan yang mencakup kebutuhan siswa selama tahun pertama:",
      items: [
        "Seragam sekolah lengkap (3 stel)",
        "Buku paket pembelajaran",
        "Biaya operasional tahun pertama",
        "Pengembangan kegiatan pendidikan",
        "SPP bulan Juli (sudah termasuk)",
      ],
    },
    {
      title: "SPP Bulanan",
      price: "Rp 370.000",
      description:
        "Iuran bulanan yang dibayarkan setiap tanggal 10. Sudah mencakup seluruh kebutuhan pembelajaran bulanan.",
      items: [],
    },
    {
      title: "Biaya Daftar Ulang",
      price: "Rp 3.435.000",
      description:
        "Dibayarkan saat naik ke kelas 2 dan 3. Investasi berkelanjutan untuk:",
      items: [
        "Buku materi pembelajaran terbaru",
        "Program kegiatan pendidikan tahunan",
        "Pengembangan fasilitas pembelajaran",
      ],
    },
  ];

  return (
    <section className=" from-slate-50 via-green-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container Utama */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Struktur Biaya Pendidikan
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              SMAIT Baitul 'Ilmi - Sekolah Terbaik untuk Masa Depan Putri Anda
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mx-auto"></div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {biayaData.map((biaya, index) => (
              <BiayaCard key={index} {...biaya} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Dapatkan Informasi Lengkap
              </h3>
              <p className="text-green-100 mb-6 max-w-md mx-auto">
                Unduh brosur PPDB untuk informasi detail persyaratan dan jadwal
                pendaftaran
              </p>

              <a
                href="/brosur-ppdb-2025-2026.pdf"
                className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-green-50 hover:text-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                download
              >
                <FaDownload className="text-lg" />
                <span>Unduh Brosur PPDB 2025/2026</span>
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              * Biaya dapat berubah sewaktu-waktu. Hubungi sekolah untuk
              informasi terkini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiayaPendidikan;
