import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="px-4 md:px-12 mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#009F3C] mb-2">
          Dokumentasi Video
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Kegiatan di SMAIT Baitul ‘Ilmi
        </p>
      </div>
      <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E90KBDUuvxU?si=vQqdu2TOGEz7MRDR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
