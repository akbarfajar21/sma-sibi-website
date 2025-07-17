import React from "react";
import { Wrench } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border border-yellow-200">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 p-4 rounded-full shadow-inner">
            <Wrench className="h-10 w-10 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Kami Sedang Maintenance
        </h1>
        <p className="text-gray-600 text-base">
          Website sedang dalam tahap perbaikan untuk memberikan pengalaman yang
          lebih baik. Silakan kembali beberapa saat lagi.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
