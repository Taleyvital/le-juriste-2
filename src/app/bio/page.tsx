import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bio — Yao Mardochée | Le Juriste 2.0",
  description:
    "Juriste ivoirien spécialisé en droit des affaires et fiscalité, Directeur juridique de l'Union des commerçants de Côte d'Ivoire.",
};

export default function BioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero — portrait + intro */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-16 pb-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            <div className="w-full md:w-[42%] shrink-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4px] bg-[#c8a882]">
                <Image
                  src="/image-juriste/IMG_5212.jpg"
                  alt="Yao Jean Mardoché"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-3">
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777d]">
                  Présentation
                </span>
                <h1 className="font-serif text-[38px] md:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1b1b1d]">
                  Yao Jean Mardoché
                </h1>
                <p className="font-sans text-[13px] font-semibold tracking-wide text-[#76777d] uppercase">
                  Directeur juridique · Union des commerçants de Côte d&rsquo;Ivoire
                </p>
              </div>
              <div className="w-8 h-[2px] bg-[#1b1b1d]" />
              <p className="font-sans text-[16px] md:text-[17px] leading-[1.75] text-[#45464d]">
                Juriste ivoirien spécialisé en droit privé, avec une orientation
                en droit des affaires et fiscalité, il occupe les fonctions de
                Directeur juridique de l&rsquo;Union des commerçants de Côte
                d&rsquo;Ivoire, où il intervient sur les problématiques
                juridiques et stratégiques liées aux activités commerciales et à
                la structuration du tissu économique.
              </p>
            </div>
          </div>
        </section>

        {/* Parcours — texte gauche, image droite */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-16 border-t border-[#e4e2e4]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex flex-col gap-6 md:w-[55%]">
              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
                  Parcours Académique
                </h2>
                <div className="w-8 h-[2px] bg-[#1b1b1d]" />
              </div>
              <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                Dans le cadre de son parcours académique, il poursuit un Master
                en droit privé, option droit des affaires et fiscalité,
                consolidant ainsi une expertise axée sur l&rsquo;accompagnement
                juridique des entreprises et la compréhension des enjeux fiscaux
                contemporains.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {[
                  { label: "Spécialité", value: "Droit des affaires & Fiscalité" },
                  { label: "Formation", value: "Master en droit privé" },
                  { label: "Poste actuel", value: "Directeur juridique, UCCI" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-baseline border-b border-[#e4e2e4] pb-3">
                    <span className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-[#76777d] w-[120px] shrink-0">
                      {item.label}
                    </span>
                    <span className="font-sans text-[15px] text-[#1b1b1d]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[42%] shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
                <Image
                  src="/image-juriste/IMG_4520.jpg"
                  alt="Yao Jean Mardoché — parcours"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image pleine largeur */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-6">
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
            <Image
              src="/image-juriste/IMG_5083.jpg"
              alt="Yao Jean Mardoché"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </section>

        {/* Approche — image gauche, texte droite */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-[42%] shrink-0 order-2 md:order-1">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
                <Image
                  src="/image-juriste/IMG_5209.jpg"
                  alt="Yao Jean Mardoché — approche"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 md:w-[55%] order-1 md:order-2">
              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
                  Approche
                </h2>
                <div className="w-8 h-[2px] bg-[#1b1b1d]" />
              </div>
              <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                Son approche du droit se caractérise par une volonté affirmée de
                concilier rigueur juridique, pragmatisme et adaptation aux
                réalités socio-économiques ivoiriennes.
              </p>
            </div>
          </div>
        </section>

        {/* Vision — texte + deux images côte à côte */}
        <section className="w-full bg-[#f6f3f5] border-y border-[#e4e2e4]">
          <div className="max-w-[1200px] mx-auto px-6 py-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6 max-w-[680px]">
                <div className="flex flex-col gap-3">
                  <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
                    Vision
                  </h2>
                  <div className="w-8 h-[2px] bg-[#1b1b1d]" />
                </div>
                <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                  L&rsquo;action de Yao Jean Mardoché s&rsquo;inscrit dans une
                  vision globale d&rsquo;un droit accessible, intelligible et
                  opérationnel, au service du développement économique et de la
                  cohésion sociale.
                </p>
                <p className="font-sans text-[15px] leading-[1.75] text-[#45464d]">
                  À travers ses engagements professionnels, associatifs et
                  numériques, il contribue à promouvoir une culture juridique
                  fondée sur la connaissance, la responsabilité et le respect des
                  normes, tout en œuvrant à renforcer l&rsquo;accès au droit pour
                  tous.
                </p>
              </div>

              {/* Deux images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
                  <Image
                    src="/image-juriste/IMG_5210.jpg"
                    alt="Yao Jean Mardoché — vision"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
                  <Image
                    src="/image-juriste/IMG_8800.jpg"
                    alt="Yao Jean Mardoché — engagement"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
