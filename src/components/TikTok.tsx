"use client";

import { useRef, useState } from "react";

const videos = [
  {
    title: "Comment créer sa SARL ? 🏢",
    src: "/videos/sarl.mp4",
    href: "https://www.tiktok.com/@yaomardochee",
  },
  {
    title: "Contrat de travail : 3 pièges à éviter",
    src: "/videos/contrat-travail.mp4",
    href: "https://www.tiktok.com/@yaomardochee",
  },
  {
    title: "Le droit de propriété expliqué",
    src: "/videos/droit-propriete.mp4",
    href: "https://www.tiktok.com/@yaomardochee",
  },
];

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[4px] bg-[#303032] cursor-pointer" onClick={toggle}>
      <video
        ref={ref}
        src={video.src}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play / Pause button */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Caption */}
      <p className="absolute bottom-4 left-4 right-4 font-sans text-[13px] font-semibold text-white leading-snug">
        {video.title}
      </p>
    </div>
  );
}

export default function TikTok() {
  return (
    <section className="w-full bg-[#1b1b1d] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-12 text-center">
          <div className="w-10 h-10 rounded-full border border-[#45464d] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <h2 className="font-serif text-[28px] md:text-[34px] font-semibold text-white leading-tight">
            Le Droit en 60 secondes
          </h2>
          <p className="font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-[#76777d]">
            RETROUVEZ-MOI SUR TIKTOK
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
