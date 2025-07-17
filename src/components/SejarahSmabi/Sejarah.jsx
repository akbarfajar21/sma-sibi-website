import React from "react";

const Sejarah = () => {
  return (
    <section className="bg-white text-gray-800 px-4 py-16 md:px-32 space-y-16">
      {/* Header */}
      <div className="text-center space-y-2 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Sejarah <span className="text-green-700 font-bold">Kami</span>
        </h2>
        <p className="text-sm md:text-base uppercase tracking-wider text-gray-600">
          SMAIT BAITUL ’ILMI
        </p>
        <img
          src="/logo.png"
          alt="Logo SMAIT Baitul Ilmi"
          className="w-20 h-20 mx-auto mt-4"
        />
      </div>

      {/* Visi, Misi, dan Latar Belakang */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed text-justify">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Visi, Misi, dan Latar Belakang
        </h3>
        <p>
          SMA Islam Terpadu (SMAIT) Baitul ’Ilmi lahir dari kepedulian mendalam
          terhadap pentingnya pendidikan yang tidak hanya unggul secara
          akademis, tetapi juga kuat dalam nilai-nilai agama dan akhlak.
        </p>
        <p>
          Didirikan oleh Yayasan Manarusunnah Ash-Sholihah Al-Islamiyah, sekolah
          ini merupakan jawaban atas kebutuhan mendesak masyarakat akan lembaga
          pendidikan tingkat menengah atas yang dapat menjadi benteng moral dan
          spiritual.
        </p>
        <p>
          Sekolah ini resmi berdiri pada tahun 2020 di Desa Jejalenjaya, Tambun
          Utara, Bekasi, dengan tekad mencetak generasi yang beradab, beriman,
          dan berilmu.
        </p>
      </div>

      {/* Tujuan Umum dan Strategis */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Tujuan Umum dan Strategis
        </h3>
        <p>
          Tujuan utama dari pendirian SMAIT Baitul ’Ilmi adalah untuk mencetak
          generasi muslim yang:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Beriman dan bertakwa kepada Allah.</li>
          <li>Berilmu dan berakhlak mulia.</li>
          <li>Mandiri, profesional, dan visioner.</li>
          <li>Memiliki karakter Islami kuat.</li>
          <li>Menjaga agama dan nilai-nilai luhur.</li>
        </ol>
        <p>
          Pendidikan di SMAIT Baitul ’Ilmi mencakup adab, akhlak, aqidah, dan
          spiritualitas.
        </p>
      </div>

      {/* Fokus pada Pendidikan Akhwat */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Fokus pada Pendidikan Akhwat: Pondasi Peradaban
        </h3>
        <p>
          Salah satu keunikan SMAIT Baitul ’Ilmi adalah fokus utamanya pada
          pendidikan anak perempuan. Yayasan percaya bahwa perempuan adalah
          pondasi utama dalam membangun peradaban.
        </p>
        <p>
          Dalam konteks ini, sekolah hadir untuk mengembalikan peran perempuan
          melalui pendidikan syar’i yang menyeluruh, menjadi respon konkret
          terhadap tantangan sosial dan moral di Indonesia.
        </p>
      </div>

      {/* Kurikulum Terpadu */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Kurikulum Terpadu: Nasional dan Islamiyah
        </h3>
        <p>
          SMAIT Baitul ’Ilmi menggabungkan Kurikulum Nasional dengan muatan
          lokal Islami sesuai visi misi Yayasan. Materi ajar mencakup:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tauhid dan aqidah ahlus sunnah wal jama’ah.</li>
          <li>Al-Qur’an, tahfidz, dan tafsir.</li>
          <li>Adab Islami dan ibadah harian.</li>
          <li>Fiqih dan ilmu syar’i secara sistematis.</li>
        </ul>
        <p>
          Semua disampaikan dengan pendekatan manhaj salafussholih, berfokus
          pada pengamalan dalam kehidupan sehari-hari.
        </p>
      </div>

      {/* Landasan Syar’i dan Spiritualitas */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Landasan Syar’i dan Spiritualitas
        </h3>
        <p>
          Pendirian sekolah ini diperkuat oleh Al-Qur’an dan Hadis. Di
          antaranya:
        </p>
        <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700">
          “Hai orang-orang yang beriman... Dan Allah akan meninggikan
          orang-orang yang beriman di antara kamu dan orang-orang yang diberi
          ilmu...”
          <br />
          <span className="text-sm">– (Q.S. Al-Mujadalah: 11)</span>
        </blockquote>
        <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700">
          “Barang siapa menempuh jalan untuk mencari ilmu, maka Allah akan
          memudahkan baginya jalan menuju surga.”
          <br />
          <span className="text-sm">– (HR. Muslim No. 2699)</span>
        </blockquote>
        <p>
          Kedua dalil ini menjadi pondasi pendidikan di SMAIT Baitul ’Ilmi,
          mencetak lulusan berakhlak dan berilmu.
        </p>
      </div>

      {/* Harapan dan Arah Masa Depan */}
      <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base leading-relaxed">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
          Harapan dan Arah Masa Depan
        </h3>
        <p>
          SMAIT Baitul 'Ilmi memiliki cita-cita besar untuk menjadi lembaga
          pendidikan Islam tingkat menengah yang unggul, profesional, dan
          bertanggung jawab secara moral dan spiritual. Dengan dukungan dari
          berbagai pihak, baik tokoh masyarakat, orang tua siswa, dan instansi
          pemerintah, sekolah ini berkomitmen untuk terus berkembang dan
          memberikan yang terbaik bagi umat dan bangsa.
        </p>
        <p>
          Ke depan, SMAIT Baitul 'Ilmi akan terus meningkatkan kualitas guru,
          sarana-prasarana, serta jejaring pendidikan agar semakin banyak
          generasi muda yang dapat merasakan manfaat dari lembaga ini.
        </p>
      </div>
    </section>
  );
};

export default Sejarah;
