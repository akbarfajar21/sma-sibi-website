import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Beranda from "./pages/Beranda";
import NotFound from "./pages/NotFound";
import TentangSmabi from "./pages/TentangSmabi";
import SejarahSmabi from "./pages/SejarahSmabi";
import BeritaSmabi from "./pages/BeritaSmabi";
import BeritaDetail from "./pages/BeritaDetail";
import ScrollToTop from "./components/ScrollToTop";
import FormPPDB from "./pages/FormPPDB";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Kurikulum from "./pages/Kurikulum";
import Contact from "./pages/Contact";
import Maintenance from "./pages/Maintenance";
import supabase from "./utils/SupaClient";
import Alumni from "./pages/Alumni";
import PageLoader from "./components/PageLoader";

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Aktifkan loading setiap ganti halaman
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); // waktu tampil spinner

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <FloatingWhatsapp />
      {loading && <PageLoader />}
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-smabi" element={<TentangSmabi />} />
        <Route path="/sejarah-smabi" element={<SejarahSmabi />} />
        <Route path="/berita-smabi" element={<BeritaSmabi />} />
        <Route path="/berita-detail/:id" element={<BeritaDetail />} />
        <Route path="/form" element={<FormPPDB />} />
        <Route path="/kurikulum" element={<Kurikulum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  const [maintenance, setMaintenance] = useState(false);

  useEffect(() => {
    const fetchMaintenanceStatus = async () => {
      const { data, error } = await supabase
        .from("pengaturan")
        .select("value")
        .eq("key", "maintenance")
        .single();

      if (error) {
        console.error("Gagal cek maintenance:", error.message);
      }

      setMaintenance(data?.value || false);
    };

    fetchMaintenanceStatus();
  }, []);

  return <Router>{maintenance ? <Maintenance /> : <AppRoutes />}</Router>;
}

export default App;
