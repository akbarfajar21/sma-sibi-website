import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SyaratDanAlur = () => {
  return (
    <section className=" py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Syarat Pendaftaran */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-5 border-b pb-3 border-gray-200">
            Syarat Pendaftaran
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            {[
              "Membayar uang pendaftaran sebesar Rp. 250.000,- via transfer atau tunai ke loket administrasi di sekolah.",
              "Mengisi formulir pendaftaran dan menyerahkan kembali dengan disertai syarat administrasi lainnya.",
              "Mempersiapkan berkas-berkas persyaratan.",
              "Fotocopy akta kelahiran (1 lembar).",
              "Nomor NISN siswa (1 lembar).",
              "Fotocopy Kartu Keluarga (KK) (1 lembar).",
              "Fotocopy KTP kedua orang tua masing-masing (1 lembar).",
              "Surat keterangan sehat dari dokter (1 lembar).",
              "Surat kelakuan baik dari sekolah asal (1 lembar).",
              "Membawa materai 10.000 (1 lembar).",
              "Membawa map coklat untuk data berkas calon peserta didik.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 text-base mt-[2px]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Alur Pendaftaran */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-5 border-b pb-3 border-gray-200">
            Alur Pendaftaran
          </h3>
          <ul className="space-y-5 text-gray-700 text-sm leading-relaxed">
            {[
              {
                title: "1. Transfer Biaya",
                desc: "Calon peserta didik melakukan pembayaran biaya pendaftaran.",
              },
              {
                title: "2. Daftar Online",
                desc: "Mengisi formulir pendaftaran secara daring melalui website resmi sekolah.",
              },
              {
                title: "3. Cetak Bukti Pendaftaran",
                desc: "Setelah mengisi formulir, cetak bukti pendaftaran sebagai tanda telah mendaftar.",
              },
              {
                title: "4. Lengkapi Berkas Pendaftaran",
                desc: "Mengumpulkan dan menyerahkan seluruh berkas persyaratan ke sekolah.",
              },
              {
                title: "5. Mengikuti Tes dan Wawancara",
                desc: "Calon peserta didik mengikuti tes seleksi dan wawancara sesuai jadwal.",
              },
            ].map((item, i) => (
              <li key={i}>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SyaratDanAlur;
