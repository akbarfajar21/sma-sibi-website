import React from "react";

const SambutanKepalaSekolah = () => {
  return (
    <section className="bg-yellow-50 px-6 py-16 md:px-32 mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Sambutan <span className="text-green-700">Kepala Sekolah</span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          SMAIT BAITUL ‘ILMI
        </p>
      </div>

      <div className="bg-white shadow-md border rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Foto dan Nama */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/foto-kepala-sekolah.jpg"
            alt="Kepala Sekolah"
            className="w-40 h-48 object-cover rounded-lg shadow-sm"
          />
          <span className="mt-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Ust. Luzman Rifqi, S.Kom.I
          </span>
        </div>

        {/* Sambutan */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed max-w-2xl">
          <p>
            Memiliki anak yang sholih/sholihah, cerdas, dan berkarakter adalah
            harapan setiap keluarga muslim. Di SMAIT Baitul ‘Ilmi, kami
            berkomitmen untuk mewujudkan hal tersebut dengan pendidikan yang
            berlandaskan nilai-nilai Islam.
          </p>
          <p className="mt-4">
            Kami meyakini bahwa pendidikan terbaik adalah pendidikan yang
            mengikuti teladan Rasulullah dan para sahabatnya. Dengan demikian,
            karakter, akhlak, serta ilmu pengetahuan dapat berjalan seiring.
          </p>

          <div className="mt-6">
            <p className="font-semibold text-green-800">
              Daarul Hijrah Malik bin Anas:
            </p>
            <p className="text-xl font-arabic mt-2 text-gray-900">
              لَنْ يُصْلِحَ آخِرَ هَذِهِ الْأُمَّةِ إِلَّا مَا صَلَحَ بِهِ
              أَوَّلُهَا
            </p>
            <p className="mt-1 text-gray-700 italic">
              “Tidaklah akan baik generasi akhir umat ini kecuali dengan apa
              yang telah membuat baik generasi awalnya.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SambutanKepalaSekolah;
