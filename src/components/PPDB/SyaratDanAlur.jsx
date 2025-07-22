import React from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaRoute,
  FaFileAlt,
  FaUserCheck,
} from "react-icons/fa";

const SyaratDanAlur = () => {
  // Data syarat pendaftaran
  const syaratPendaftaran = [
    "Membayar uang pendaftaran sebesar Rp 250.000 via transfer atau tunai ke loket administrasi sekolah",
    "Mengisi formulir pendaftaran dan menyerahkan kembali dengan persyaratan administrasi lengkap",
    "Menyiapkan berkas-berkas persyaratan sebagai berikut:",
    "Fotocopy akta kelahiran (1 lembar)",
    "Nomor NISN siswa (1 lembar)",
    "Fotocopy Kartu Keluarga/KK (1 lembar)",
    "Fotocopy KTP kedua orang tua masing-masing (1 lembar)",
    "Surat keterangan sehat dari dokter (1 lembar)",
    "Surat kelakuan baik dari sekolah asal (1 lembar)",
    "Materai 10.000 (1 lembar)",
    "Map coklat untuk menyimpan berkas calon peserta didik",
  ];

  // Data alur pendaftaran
  const alurPendaftaran = [
    {
      step: "1",
      title: "Transfer Biaya Pendaftaran",
      description:
        "Calon peserta didik melakukan pembayaran biaya pendaftaran melalui transfer bank atau datang langsung ke sekolah.",
      icon: "💰",
    },
    {
      step: "2",
      title: "Pendaftaran Online",
      description:
        "Mengisi formulir pendaftaran secara daring melalui website resmi SMAIT Baitul 'Ilmi.",
      icon: "💻",
    },
    {
      step: "3",
      title: "Cetak Bukti Pendaftaran",
      description:
        "Setelah mengisi formulir lengkap, cetak bukti pendaftaran sebagai tanda telah terdaftar resmi.",
      icon: "🖨️",
    },
    {
      step: "4",
      title: "Serahkan Berkas Lengkap",
      description:
        "Mengumpulkan dan menyerahkan seluruh berkas persyaratan ke bagian administrasi sekolah.",
      icon: "📋",
    },
    {
      step: "5",
      title: "Tes Seleksi & Wawancara",
      description:
        "Calon peserta didik mengikuti tes seleksi tertulis dan wawancara sesuai dengan jadwal yang telah ditentukan.",
      icon: "✍️",
    },
  ];

  return (
    <section className=" from-slate-50 via-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-green-100 rounded-2xl mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              <FaClipboardList className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Syarat & Alur Pendaftaran
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Panduan lengkap untuk mendaftar di SMAIT Baitul 'Ilmi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Syarat Pendaftaran */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-100 rounded-2xl">
                <FaFileAlt className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-700">
                  Syarat Pendaftaran
                </h3>
                <p className="text-gray-600 text-sm">
                  Dokumen yang harus disiapkan
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {syaratPendaftaran.map((syarat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {syarat}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Card */}
            <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-100">
              <p className="text-xs text-green-700 text-center font-medium">
                💡 Pastikan semua berkas dalam kondisi baik dan terbaca dengan
                jelas
              </p>
            </div>
          </div>

          {/* Alur Pendaftaran */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <FaRoute className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700">
                  Alur Pendaftaran
                </h3>
                <p className="text-gray-600 text-sm">
                  Langkah-langkah mendaftar
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {alurPendaftaran.map((alur, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {alur.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-6">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{alur.icon}</span>
                          <h4 className="text-lg font-bold text-gray-800">
                            {alur.title}
                          </h4>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {alur.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < alurPendaftaran.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-6 bg-gradient-to-b from-blue-300 to-green-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyaratDanAlur;
