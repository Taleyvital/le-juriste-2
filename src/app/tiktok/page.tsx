import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TikTok — Yao Mardochée | Le Juriste 2.0",
  description:
    "Contenus juridiques pédagogiques pour rendre le droit accessible au grand public.",
};

const videos = [
  { id: "7597784881988373816" },
  { id: "7628272798049340692" },
  { id: "7624647014956961045" },
];

const themes = [
  "Les notions juridiques fondamentales",
  "Les droits et obligations des citoyens",
  "Les problématiques juridiques liées à l'entrepreneuriat",
  "Les conseils pratiques en matière de gestion des situations juridiques courantes",
];

export default function TikTokPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col gap-5 max-w-[680px]">
            <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777d]">
              Créateur de contenus juridiques
            </span>
            <h1 className="font-serif text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1b1b1d]">
              Le Juriste 2.0 <br className="hidden md:block" />
              sur TikTok
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-[#45464d]">
              Yao Jean Mardoché développe des contenus pédagogiques destinés à
              rendre le droit accessible au grand public — des publications
              concrètes, pensées pour rapprocher le droit des réalités
              quotidiennes des populations.
            </p>
            <div className="pt-2">
              <a
                href="https://www.tiktok.com/@yaomardochee?_r=1&_t=ZS-95wUa5sJPld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold tracking-[0.08em] uppercase bg-[#1b1b1d] text-white px-6 py-3.5 rounded-[4px] hover:bg-black transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
                S&rsquo;abonner sur TikTok
              </a>
            </div>
          </div>
        </section>

        {/* Thèmes */}
        <section className="w-full bg-[#f6f3f5] border-y border-[#e4e2e4]">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="flex flex-col gap-6 max-w-[680px]">
              <h2 className="font-serif text-[20px] font-semibold text-[#1b1b1d]">
                Thèmes abordés
              </h2>
              <ul className="flex flex-col gap-3">
                {themes.map((theme) => (
                  <li key={theme} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#1b1b1d] shrink-0" />
                    <span className="font-sans text-[15px] leading-[1.7] text-[#45464d]">
                      {theme}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-16 pb-20">
          <div className="flex flex-col gap-3 mb-10">
            <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
              Dernières vidéos
            </h2>
            <div className="w-8 h-[2px] bg-[#1b1b1d]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="relative aspect-[9/16] overflow-hidden rounded-[4px] bg-[#f6f3f5]">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${v.id}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="encrypted-media"
                />
              </div>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="flex justify-center mt-12">
            <a
              href="https://www.tiktok.com/@yaomardochee?_r=1&_t=ZS-95wUa5sJPld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold tracking-[0.08em] uppercase border border-[#1b1b1d] text-[#1b1b1d] px-6 py-3.5 rounded-[4px] hover:bg-[#1b1b1d] hover:text-white transition-colors duration-200"
            >
              Voir toutes les vidéos sur TikTok
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
