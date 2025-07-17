import React from "react";

const HeroPPDB = () => {
  return (
    <section className="relative bg-yellow-100 py-20 px-6 mt-28">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Penerimaan Peserta Didik Baru <br className="hidden md:block" />
          Tahun Ajaran <span className="text-green-700">2025/2026</span> Telah
          Dibuka!
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-8 max-w-2xl mx-auto">
          SMA Islam Terpadu Baitul ’Ilmi membuka pendaftaran bagi siswa putri
          tingkat SMA dan sederajat. Segera daftarkan diri Anda dan raih masa
          depan yang cemerlang!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/formulir-ppdb.pdf"
            className="inline-block bg-white text-green-700 border border-green-600 hover:bg-green-50 font-semibold py-2 px-5 rounded-lg transition shadow"
          >
            Unduh Formulir
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgAgHCPgcatsIlUES3mXKN4xZmJsQgGh7Q24tzu88pHV_XWw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg transition shadow"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPPDB;
