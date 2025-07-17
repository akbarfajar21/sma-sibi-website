import React from "react";

const VisionMissionSection = () => {
  return (
    <section id="visi-misi" className="px-4 md:px-12 mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
        Visi & Misi <span className="text-green-700">Kami</span>
      </h2>

      <div className="grid gap-10 md:gap-12 max-w-5xl mx-auto">
        {/* VISI */}
        <div className="flex items-start gap-6 bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <img
                src="/visi.png"
                alt="Visi Icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Visi</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Menuju generasi berilmu dengan berpegang teguh kepada Al-Qur’an
              dan sunnah, sesuai dengan pemahaman salafussholeh.
            </p>
          </div>
        </div>

        {/* MISI */}
        <div className="flex items-start gap-6 bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-8">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <img
                src="/misi.png"
                alt="Misi Icon"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Misi</h3>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
              <li>
                Membentuk dan menanamkan pendidikan agama Islam dengan aqidah,
                akhlak, dan ibadah berdasarkan pemahaman para salafussholeh.
              </li>
              <li>
                Menyelenggarakan pendidikan yang berkualitas namun terjangkau
                oleh masyarakat.
              </li>
              <li>
                Mengembangkan potensi anak agar mandiri, bersahaja, berilmu, dan
                siap melanjutkan ke jenjang pendidikan yang lebih tinggi.
              </li>
              <li>
                Menyelenggarakan pendidikan optimal dan profesional dengan
                nilai-nilai Islam, hafalan Al-Qur’an, akhlak mulia, serta
                membekali siswa dengan hard skill dan soft skill.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
