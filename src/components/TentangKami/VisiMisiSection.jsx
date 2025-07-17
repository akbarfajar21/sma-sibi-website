import React from "react";

const VisiMisiSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-32 text-gray-800 space-y-16">
      {/* Judul Tengah */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        Visi <span className="text-green-700 font-bold">& Misi Kami</span>
      </h2>

      {/* Visi Box */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-white shadow-md rounded-md p-6 flex items-start gap-4">
          <img src="/visi.png" alt="Ikon Visi" className="w-10 h-10 mt-1" />
          <div>
            <h3 className="text-lg font-bold mb-2">Visi</h3>
            <p className="text-sm md:text-base">
              Menuju generasi berilmu dengan berpegang teguh kepada Al-Qur’an
              dan sunnah sesuai dengan pemahaman salafussholeh
            </p>
          </div>
        </div>
      </div>

      {/* Misi Box */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-md p-6 flex items-start gap-4">
          <img src="/misi.png" alt="Ikon Misi" className="w-10 h-10 mt-1" />
          <div>
            <h3 className="text-lg font-bold mb-2">Misi</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
              <li>
                Membentuk dan menanamkan pendidikan agama Islam dengan aqidah,
                akhlak dan ibadah berdasarkan pemahaman para salafussholeh
              </li>
              <li>
                Menyelenggarakan pendidikan yang berkualitas namun terjangkau
                oleh masyarakat
              </li>
              <li>
                Mengembangkan potensi anak agar mandiri, bersahaja, berilmu, dan
                siap melanjutkan ke jenjang pendidikan yang lebih tinggi
              </li>
              <li>
                Menyelenggarakan pendidikan yang optimal dan profesional dengan
                menanamkan nilai-nilai Islam, hafalan Al-Qur’an, akhlak mulia,
                serta membekali siswa dengan hard skill dan soft skill
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strategi Mewujudkan Visi Misi */}
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/strategi.png"
          alt="Ikon Strategi"
          className="w-12 h-12 mx-auto mb-4"
        />
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Strategi{" "}
          <span className="font-bold text-black">Mewujudkan Visi Misi</span>
        </h2>
        <ul className="text-left list-disc pl-6 space-y-4 text-sm md:text-base leading-relaxed">
          <li>
            Membangun gedung berikut infrastrukturnya, menyediakan sarana dan
            prasarana pembelajaran yang memungkinkan terpenuhinya syarat minimal
            bagi Kegiatan Belajar Mengajar.
          </li>
          <li>
            Melibatkan kemampuan warga sekolah sebagai tenaga pendidik dan
            tenaga kependidikan non guru sesuai dengan bidang keahliannya.
            Mengupayakan tenaga guru yang layak sesuai dengan kapasitas
            pengetahuan dan keterampilan bagi tenaga pendidik [guru] dan tenaga
            kependidikan non guru yang ada.
          </li>
          <li>
            Interaktif dan komunikatif dengan masyarakat agar mendapat dukungan
            baik moril maupun materi sehingga mereka mempunyai rasa memiliki.
            Berusaha menjalin kerjasama dengan lembaga kampus yang sesuai dengan
            tujuan pendidikan dari SMIT Baitul ’Ilmi.
          </li>
          <li>
            Penggunaan alokasi dana yang terhimpun dari yayasan dan masyarakat
            secara efektif, efisien, transparan dan rasional.
          </li>
        </ul>
      </div>

      {/* Tujuan dan Sasaran */}
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/tujuan.png"
          alt="Ikon Tujuan"
          className="w-12 h-12 mx-auto mb-4"
        />
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Maksud{" "}
          <span className="font-bold text-black">Tujuan Dan Sasaran</span>
        </h2>
        <ul className="text-left list-disc pl-6 space-y-4 text-sm md:text-base leading-relaxed">
          <li>
            SMAIT Baitul ’Ilmi Tambun Utara didirikan dengan fokus peminatan IPA
            dan hafalan 5 juz Al-Qur’an.
          </li>
          <li>
            Membantu masyarakat terkhusus para Alumni SMPIT Baitul ’Ilmi yang
            ingin melanjutkan ke jenjang sekolah menengah atas. Membantu
            masyarakat agar dapat menyekolahkan putra/putrinya dengan biaya
            terjangkau.
          </li>
          <li>
            Membantu siswa agar mampu menjaga agamanya dari kerusakan moral dan
            penyimpangan pemikiran dan mampu berkompetensi, mengembangkan
            potensi diri sesuai bakat dan fitrahnya.
          </li>
          <li>
            Memberi bekal hafalan Al-Qur’an dan keahlian berupa keterampilan
            bagi siswa.
          </li>
          <li>
            Dapat menghasilkan lulusan yang bisa menampilkan diri sebagai
            manusia yang beriman dan bertaqwa kepada Allah SWT, berbudi pekerti
            yang luhur, sehat jasmani dan rohani serta memiliki kepekaan
            terhadap IPTEK DAN IMTAQ.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VisiMisiSection;
