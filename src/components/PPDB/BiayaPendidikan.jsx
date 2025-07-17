import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Card = ({ title, price, description, items }) => (
  <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-600 flex flex-col justify-between h-full">
    <div className="flex flex-col flex-grow">
      <h4 className="text-lg font-bold text-green-700 mb-1">{title}</h4>
      <p className="text-xl font-bold text-gray-800">{price}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {items.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const BiayaPendidikan = () => {
  return (
    <section className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Kartu Pembungkus Utama */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Judul */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Biaya Pendidikan
            </h2>
            <p className="text-sm text-gray-600 mt-1">SMAIT BAITUL ’ILMI</p>
          </div>

          {/* Grid Kartu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Biaya Pendaftaran",
                price: "Rp 250.000,-",
                description:
                  "Dibayarkan di awal sebelum mengisi formulir pendaftaran. Termasuk:",
                items: [
                  "Biaya ujian seleksi",
                  "Tes tertulis",
                  "Tes dan interview anak serta orangtua",
                ],
              },
              {
                title: "Biaya Masuk",
                price: "Rp 6.585.000,-",
                description:
                  "Dibayarkan di awal sebelum mengisi formulir pendaftaran. Termasuk:",
                items: [
                  "Biaya seragam sekolah",
                  "Biaya operasional",
                  "Biaya pengembangan kegiatan pendidikan selama 1 tahun",
                  "Seragam sekolah 3 stel",
                  "Buku paket",
                  "SPP bulan Juli",
                ],
              },
              {
                title: "SPP Bulanan",
                price: "Rp 370.000,- per bulan",
                description:
                  "Dibayarkan paling lambat tanggal 10 setiap bulan. Sudah termasuk biaya keperluan siswa untuk bulan berikutnya.",
                items: [],
              },
              {
                title: "Biaya Daftar Ulang",
                price: "Rp 3.435.000,-",
                description:
                  "Dibayarkan saat naik kelas (kelas 2 & 3). Berlaku wajib diulangi. Sudah termasuk:",
                items: [
                  "Buku materi pembelajaran",
                  "Kegiatan pendidikan selama 1 tahun",
                ],
              },
            ].map((card, i) => (
              <Card key={i} {...card} />
            ))}
          </div>

          {/* Tombol Unduh */}
          <div className="text-center mt-12">
            <a
              href="/brosur-ppdb-2025-2026.pdf"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition"
              download
            >
              Unduh Brosur PPDB 2025/2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiayaPendidikan;
