"use client";

import Image from "next/image";
import { useState } from "react";

type ConferenceImage = {
  src: string;
  alt: string;
  quote: string;
};

export default function ConferenceGallery({ images }: { images: ConferenceImage[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-[4px] bg-[#e4e2e4] group cursor-zoom-in
              ${i === 0 ? "col-span-2 row-span-2" : ""}
            `}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Photo */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] shrink-0 rounded-[4px] overflow-hidden">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Citation */}
            <div className="flex flex-col gap-6 md:w-1/2">
              {/* Guillemets décoratifs */}
              <span className="font-serif text-[72px] leading-none text-white/20 select-none -mb-4">
                &ldquo;
              </span>
              <blockquote className="font-serif text-[20px] md:text-[24px] leading-[1.5] text-white font-medium">
                {images[lightbox].quote}
              </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-px bg-white/40" />
                <cite className="font-sans text-[12px] tracking-[0.1em] uppercase text-white/50 not-italic">
                  Yao Mardochée
                </cite>
              </footer>

              {/* Counter */}
              <span className="font-sans text-[11px] tracking-widest text-white/30 mt-2">
                {lightbox + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Image précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Image suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
