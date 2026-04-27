import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OngGallery from "@/components/OngGallery";

export const metadata = {
  title: "ONG — Yao Mardochée | Le Juriste 2.0",
  description:
    "Démocratiser l'accès à l'information juridique en Côte d'Ivoire. Découvrez les actions et engagements de notre ONG pour un citoyen informé et acteur du développement.",
};

const images = [
  { src: "/img-ong/IMG_5213.JPG", alt: "Activité ONG 1" },
  { src: "/img-ong/IMG_5214.JPG", alt: "Activité ONG 2" },
  { src: "/img-ong/IMG_5216.JPG", alt: "Activité ONG 3" },
  { src: "/img-ong/IMG_5218.JPG", alt: "Activité ONG 4" },
  { src: "/img-ong/IMG_5219.JPG", alt: "Activité ONG 5" },
  { src: "/img-ong/IMG_5220.JPG", alt: "Activité ONG 6" },
  { src: "/img-ong/IMG_5221.JPG", alt: "Activité ONG 7" },
  { src: "/img-ong/IMG_5222.JPG", alt: "Activité ONG 8" },
];

export default function OngPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col gap-5 max-w-[680px]">
            <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777d]">
              Engagement & Impact Social
            </span>
            <h1 className="font-serif text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1b1b1d]">
              Le Droit pour Tous
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-[#45464d]">
              Notre ONG vise à démocratiser l&rsquo;accès à l&rsquo;information
              juridique en Côte d&rsquo;Ivoire. Nous croyons qu&rsquo;un citoyen
              informé est un acteur du développement. À travers des ateliers,
              des formations et des actions de terrain, nous portons le droit au
              cœur des communautés.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#f6f3f5] border-y border-[#e4e2e4]">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#e4e2e4]">
              {[
                { value: "500+", label: "Citoyens formés" },
                { value: "12", label: "Ateliers organisés" },
                { value: "3", label: "Régions couvertes" },
                { value: "2019", label: "Année de fondation" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1.5 px-6 py-4">
                  <span className="font-serif text-[32px] font-bold text-[#1b1b1d]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[12px] text-[#76777d] text-center tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
                Notre Mission
              </h2>
              <div className="w-8 h-[2px] bg-[#1b1b1d]" />
              <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                Rendre le droit accessible à tous, indépendamment du niveau
                d&rsquo;instruction ou du statut socio-économique. Nos
                interventions couvrent le droit civil, le droit du travail et
                les droits fondamentaux du citoyen.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
                Notre Vision
              </h2>
              <div className="w-8 h-[2px] bg-[#1b1b1d]" />
              <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                Une Côte d&rsquo;Ivoire où chaque citoyen connaît et exerce ses
                droits. Un État de droit vivant, porté par une jeunesse engagée,
                informée et responsable.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pb-20">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
              Nos Actions sur le Terrain
            </h2>
            <div className="w-8 h-[2px] bg-[#1b1b1d]" />
          </div>
          <OngGallery images={images} />
        </section>

      </main>
      <Footer />
    </>
  );
}
