import React, { useEffect, useState } from "react";

const getTimeRemaining = (deadline) => {
  const total = Date.parse(deadline) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

const WaktuPendaftaran = () => {
  const deadline = "2025-10-10T23:59:59";
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(deadline);
      setTimeLeft(remaining);

      if (remaining.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-center py-12 px-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        Waktu Pendaftaran
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Segera daftarkan putri anda sebelum waktu pendaftaran berakhir!
      </p>

      <div className="bg-white shadow-md rounded-xl inline-block px-6 py-4 text-lg font-semibold text-gray-800 border mb-6">
        6 – 10 Oktober 2025
      </div>

      {timeLeft.total > 0 ? (
        <div className="flex justify-center gap-4 text-gray-800 text-sm md:text-base font-medium">
          <div className="bg-green-100 px-4 py-2 rounded-md">
            <span className="block text-xl font-bold text-green-700">
              {timeLeft.days}
            </span>
            Hari
          </div>
          <div className="bg-green-100 px-4 py-2 rounded-md">
            <span className="block text-xl font-bold text-green-700">
              {timeLeft.hours}
            </span>
            Jam
          </div>
          <div className="bg-green-100 px-4 py-2 rounded-md">
            <span className="block text-xl font-bold text-green-700">
              {timeLeft.minutes}
            </span>
            Menit
          </div>
          <div className="bg-green-100 px-4 py-2 rounded-md">
            <span className="block text-xl font-bold text-green-700">
              {timeLeft.seconds}
            </span>
            Detik
          </div>
        </div>
      ) : (
        <p className="text-red-600 font-semibold mt-4">
          Pendaftaran telah ditutup.
        </p>
      )}
    </section>
  );
};

export default WaktuPendaftaran;
