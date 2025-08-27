import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    desktop: null,
    mobile: null,
  });

  const toggleDropdown = (device, menu) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [device]: prev[device] === menu ? null : menu,
    }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown((prev) => ({ ...prev, mobile: null }));
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-6 sm:px-10 py-6 flex items-center justify-between z-50 bg-green-600">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo Sekolah" className="h-16" />
          <img
            src="/nama-sekolah.png"
            alt="Nama Sekolah"
            className="h-10 md:h-10 object-contain"
          />
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white bg-green-700 hover:bg-green-800 rounded-md p-2 transition z-[999] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul className="hidden md:flex md:items-center md:gap-8 text-white font-medium relative">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("desktop", "school")}
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              Sekolah Kami
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown.desktop === "school" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown.desktop === "school" && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white text-green-900 border border-green-200 rounded-lg shadow-xl z-50">
                <li>
                  <Link
                    to="/tentang-smabi"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Tentang SMABI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sejarah-smabi"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Sejarah SMABI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/berita-smabi"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Berita SMABI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/karya-tulis"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Karya Tulis SMABI
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("desktop", "gallery")}
              className="flex items-center gap-1 hover:underline cursor-pointer"
            >
              Pendidikan
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown.desktop === "gallery" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown.desktop === "gallery" && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white text-green-900 border border-green-200 rounded-lg shadow-xl z-50">
                <li>
                  <Link
                    to="/kurikulum"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Kurikulum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumni"
                    className="block px-4 py-2 hover:bg-green-700 hover:text-white transition-colors rounded-md"
                  >
                    Alumni
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            to="/form"
            className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800 transition"
          >
            DAFTAR SPMB
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white text-green-900 px-6 pt-8 pb-6 shadow-2xl rounded-l-xl transition-transform duration-300 ease-in-out z-[998] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 text-green-900 z-[999] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col gap-4 mt-12 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("mobile", "school")}
              className="flex items-center gap-1 cursor-pointer"
            >
              Sekolah Kami
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown.mobile === "school" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown.mobile === "school" && (
              <ul className="ml-4 mt-2">
                <li>
                  <Link to="/tentang-smabi" className="block py-1">
                    Tentang SMABI
                  </Link>
                </li>
                <li>
                  <Link to="/sejarah-smabi" className="block py-1">
                    Sejarah SMABI
                  </Link>
                </li>
                <li>
                  <Link to="/berita-smabi" className="block py-1">
                    Berita SMABI
                  </Link>
                </li>
                <li>
                  <Link to="/karya-tulis" className="block py-1">
                    Karya Tulis SMABI
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("mobile", "gallery")}
              className="flex items-center gap-1 cursor-pointer"
            >
              Pendidikan
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown.mobile === "gallery" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown.mobile === "gallery" && (
              <ul className="ml-4 mt-2">
                <li>
                  <Link to="/kurikulum" className="block py-1">
                    Kurikulum
                  </Link>
                </li>
                <li>
                  <Link to="/alumni" className="block py-1">
                    Alumni
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="block py-1">
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/form"
              className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-800 transition"
            >
              DAFTAR SPMB
            </Link>
          </li>
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[900] md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;
