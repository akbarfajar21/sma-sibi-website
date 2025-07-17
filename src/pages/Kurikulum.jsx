import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const curriculumData = [
  {
    title: "Praktik Mengajar",
    emoji: "👩‍🏫",
    description:
      "Kegiatan ekstrakurikuler untuk mengisi praktik edukatif, di mana siswa belajar menyusun materi, menguasai kelas, dan cara penyampaian ilmu. Program ini membentuk rasa percaya diri, kemampuan komunikasi, serta menajamkan jiwa kepemimpinan.",
    image: "/kurikulum/praktik-mengajar.png",
  },
  {
    title: "Memasak",
    emoji: "🍳",
    description:
      "Program memasak bertujuan membekali siswa dengan keterampilan dasar pengolahan makanan sehat dan menarik. Kegiatan ini juga melatih tanggung jawab, kreativitas, dan kerjasama tim.",
    image: "/kurikulum/memasak.png",
  },
  {
    title: "Menjahit",
    emoji: "🧵",
    description:
      "Ekstrakurikuler menjahit membantu siswa menguasai teknik dasar menjahit manual maupun mesin. Mereka diajarkan cara membuat pola, menjahit pakaian sederhana, hingga memperbaiki busana.",
    image: "/kurikulum/menjahit.png",
  },
];

const Kurikulum = () => {
  return (
    <div className="div">
      <div className="min-h-screen bg-white md:px-32">
        <Navbar />

        <section className="bg-yellow-100 py-20 px-6 text-center mt-20 ">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Kurikulum SMAIT Baitul 'Ilmi
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Kurikulum di SMAIT Baitul 'Ilmi dirancang untuk membekali
            siswa dengan keterampilan hidup (life skills) yang aplikatif dan
            bernilai ibadah. Berikut beberapa program unggulannya:
          </p>
        </section>

        {/* Konten Kartu */}
        <section className="py-20 px-4 bg-white">
          <div className=" mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {curriculumData.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="bg-green-600 p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {item.emoji} {item.title}
                  </h3>
                </div>
                <div className="p-5 text-gray-700 text-[15px] leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Kurikulum;
