import React, { useEffect, useState } from "react";
import supabase from "../utils/SupaClient";
import Navbar from "../components/Navbar";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedAngkatan, setSelectedAngkatan] = useState(null);
  const [angkatanList, setAngkatanList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (selectedAngkatan !== null) {
      fetchAlumni();
    }
  }, [selectedAngkatan]);

  useEffect(() => {
    fetchAngkatan();
  }, []);

  useEffect(() => {
    filterAlumni();
  }, [alumni, searchQuery]);

  const filterAlumni = () => {
    if (!searchQuery.trim()) {
      setFilteredAlumni(alumni);
      return;
    }

    const filtered = alumni.filter(
      (item) =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.jurusan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.universitas.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.jalur.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAlumni(filtered);
  };

  const fetchAlumni = async () => {
    let query = supabase.from("alumni").select("*");

    if (selectedAngkatan === "null") {
      query = query.is("angkatan", null);
    } else {
      query = query.eq("angkatan", selectedAngkatan);
    }

    const { data, error } = await query;
    if (!error) {
      setAlumni(data);
    } else {
      console.error(error);
    }
  };

  const fetchAngkatan = async () => {
    const { data, error } = await supabase.from("alumni").select("angkatan");
    if (!error) {
      const unique = [
        ...new Set(data.map((d) => d.angkatan).filter((v) => v !== null)),
      ].sort((a, b) => a - b);
      setAngkatanList(unique);
      if (unique.length > 0) {
        setSelectedAngkatan(unique[0]);
      }
    } else {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 pt-24 pb-16">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 mb- mt-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Alumni
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Menelusuri jejak para alumni SMAIT Baitul 'Ilmi yang telah berkarya
            di berbagai bidang
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-5">
        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari alumni berdasarkan nama"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg max-w-fit mx-auto">
            {angkatanList.map((angkatan) => (
              <button
                key={angkatan}
                onClick={() => setSelectedAngkatan(angkatan)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden
                  ${
                    selectedAngkatan === angkatan
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/80"
                  }
                `}
              >
                <span className="relative z-10">Angkatan {angkatan}</span>
                {selectedAngkatan === angkatan && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredAlumni.length} hasil untuk "{searchQuery}"
              {selectedAngkatan && ` di Angkatan ${selectedAngkatan}`}
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAlumni.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="p-6 space-y-4">
                {/* Header dengan gradient */}
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.nama
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.nama}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Jurusan</span>
                    <span className="text-gray-800 font-semibold text-right flex-1 ml-2">
                      {item.jurusan}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 font-medium">Jalur</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-xs font-semibold">
                      {item.jalur}
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl text-sm font-medium shadow-lg">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {item.universitas}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto flex items-center justify-center text-white mb-6">
              {searchQuery ? (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {searchQuery
                ? "Tidak ada hasil yang ditemukan"
                : "Belum ada data alumni"}
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? `Coba ubah kata kunci pencarian atau pilih angkatan lain`
                : "Data alumni untuk angkatan ini akan segera tersedia"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
              >
                Hapus Pencarian
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alumni;
