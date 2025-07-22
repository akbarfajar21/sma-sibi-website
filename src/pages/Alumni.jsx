import React, { useEffect, useState } from "react";
import supabase from "../utils/SupaClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedAngkatan, setSelectedAngkatan] = useState(null);
  const [angkatanList, setAngkatanList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingAngkatan, setLoadingAngkatan] = useState(true);
  const [loadingAlumni, setLoadingAlumni] = useState(false);

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
    setLoadingAlumni(true);
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
    setLoadingAlumni(false);
  };

  const fetchAngkatan = async () => {
    setLoadingAngkatan(true);
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
    setLoadingAngkatan(false);
  };

  // Loading Component for Cards
  const LoadingCard = () => (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      <div className="p-5 space-y-4">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded mx-auto w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded w-12"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <div className="text-center">
            <div className="h-8 bg-gray-200 rounded mx-auto w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Loading Component for Tabs
  const LoadingTabs = () => (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm max-w-fit mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="px-6 py-3 bg-gray-200 rounded-lg animate-pulse w-24 h-12"
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 mb-8 mt-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Jejak Alumni
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Melihat perjalanan alumni SMAIT Baitul 'Ilmi yang telah menorehkan
            prestasi di berbagai bidang
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
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
              placeholder="Cari alumni berdasarkan nama, jurusan, atau universitas"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-gray-700 placeholder-gray-400"
              disabled={loadingAngkatan}
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
        {loadingAngkatan ? (
          <LoadingTabs />
        ) : (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-lg border border-gray-100 shadow-sm max-w-fit mx-auto">
              {angkatanList.map((angkatan) => (
                <button
                  key={angkatan}
                  onClick={() => setSelectedAngkatan(angkatan)}
                  disabled={loadingAlumni}
                  className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      selectedAngkatan === angkatan
                        ? "bg-green-600 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }
                  `}
                >
                  Angkatan {angkatan}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading Indicator for Alumni */}
        {loadingAlumni && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg border border-gray-100 shadow-sm">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="text-gray-700 font-medium">
                Memuat data alumni angkatan {selectedAngkatan}...
              </span>
            </div>
          </div>
        )}

        {/* Search Results Info */}
        {searchQuery && !loadingAlumni && (
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">
              Menampilkan {filteredAlumni.length} hasil untuk "{searchQuery}"
              {selectedAngkatan && ` di Angkatan ${selectedAngkatan}`}
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loadingAlumni
            ? // Show loading cards
              Array.from({ length: 8 }, (_, i) => <LoadingCard key={i} />)
            : // Show actual alumni cards
              filteredAlumni.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="p-5 space-y-4">
                    {/* Header */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-green-50 rounded-full mx-auto flex items-center justify-center text-green-800 font-bold text-xl border-2 border-green-100">
                        {item.nama
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {item.nama}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Jurusan</span>
                        <span className="text-gray-800 font-medium text-right flex-1 ml-2">
                          {item.jurusan}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Jalur</span>
                        <span className="px-2 py-1 bg-green-50 text-green-800 rounded text-xs font-medium">
                          {item.jalur}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded-lg text-sm font-medium">
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
        {filteredAlumni.length === 0 && !loadingAlumni && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-green-50 rounded-full mx-auto flex items-center justify-center text-green-800 mb-6 border-2 border-green-100">
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {searchQuery
                ? "Tidak ditemukan hasil pencarian"
                : "Belum ada data alumni"}
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? `Coba gunakan kata kunci yang berbeda atau pilih angkatan lain`
                : "Data alumni untuk angkatan ini akan segera kami perbarui"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-sm"
              >
                Reset Pencarian
              </button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Alumni;
