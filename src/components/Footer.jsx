import { Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-8 text-green-900 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kiri - Logo & Kontak */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <img
              src="/logo.png"
              alt="Logo SMABI"
              className="w-14 h-auto object-contain"
            />
            <div className="mt-3">
              <img
                src="/nama-sekolah-f.png"
                alt="Nama Sekolah"
                className="h-10 md:h-9 object-contain"
              />
            </div>
          </div>
          <div>
            <p className="font-semibold mb-1">Office:</p>
            <p>Email: smabi.tamara@gmail.com</p>
            <p>Website: smabi.sch.id</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-9 h-9 border border-green-600 rounded-full flex items-center justify-center hover:bg-green-100"
            >
              <Instagram className="w-5 h-5 text-green-700" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="w-9 h-9 border border-green-600 rounded-full flex items-center justify-center hover:bg-green-100"
            >
              <Youtube className="w-5 h-5 text-green-700" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="w-9 h-9 border border-green-600 rounded-full flex items-center justify-center hover:bg-green-100"
            >
              <Phone className="w-5 h-5 text-green-700" />
            </a>
          </div>
        </div>

        {/* Tengah - Link Sekolah */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">Sekolah</h3>
          <a href="#" className="hover:underline">
            Tentang SMABI
          </a>
          <a href="#" className="hover:underline">
            Sejarah SMABI
          </a>
          <a href="#" className="hover:underline">
            Berita SMABI
          </a>
        </div>

        {/* Kanan - Link Pendidikan */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg mb-2">Pendidikan</h3>
          <a href="#" className="hover:underline">
            Berita SMABI
          </a>
          <a href="#" className="hover:underline">
            Kurikulum SMABI
          </a>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-gray-700">
        Copyright ©2025 Smait Baitul Ilmi Tambun. All Rights Reserved. Powered
        By Tim Creative
      </div>
    </footer>
  );
};

export default Footer;
