const videos = [
  { id: "7597784881988373816" },
  { id: "7628272798049340692" },
  { id: "7624647014956961045" },
];

export default function TikTok() {
  return (
    <section className="w-full bg-[#1b1b1d] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-12 text-center">
          <div className="w-10 h-10 rounded-full border border-[#45464d] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
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
          {videos.map((v) => (
            <div key={v.id} className="relative aspect-[9/16] max-h-[480px] overflow-hidden rounded-[4px] bg-[#303032]">
              <iframe
                src={`https://www.tiktok.com/embed/v2/${v.id}`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="encrypted-media"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
