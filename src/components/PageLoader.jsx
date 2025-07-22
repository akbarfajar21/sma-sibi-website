import React from "react";
import gif from "/nama-sekolah-f.gif";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 animate-fade-in-out">
      <img
        src={gif}
        alt="Loading animasi SMAIT"
        className="w-32 h-auto animate-logo-bounce"
      />
    </div>
  );
};

export default PageLoader;
